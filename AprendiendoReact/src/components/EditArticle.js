import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import imageDefault from '../assets/images/default.png';

//recoger el id en la url

//crear un metodo para sacar el objeto del backen

//repoblar el formulario

//actualizar el articulo  en el backend



class EditArticle extends Component {
    url = Global.url;

    articleId = null;

    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    componentWillMount() {
        this.articleId = this.props.match.params.id;

        this.getArticle(this.articleId);


        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo no puede estar vacío'
            }

        });
    }

    getArticle = (id) => {
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                })
            });
        

    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });

        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = (e) => {

        e.preventDefault();

        //Rellenar state con formulario
        this.changeState();
      
        if (this.validator.allValid()) {

            //Hacer peticion por post para guardar el articulo
            axios.put(this.url + 'article/' + this.articleId, this.state.article)
                .then(res => {
                    
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });
                       
                        swal(
                            'Articulo creado',
                            'El articulo ha sido correctamente',
                            'success'
                        );

                        //Subir la imagen

                        if (this.state.selectedFile !== null) {
                            var articleId = this.state.article._id;

                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );

                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                    }
                                });

                        } else {
                            this.setState({
                                status: 'success'
                            });
                        }

                    } else {
                        this.setState({
                            status: 'failed'
                        });

                    }

                });

        } else {
            this.setState({
                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();
        }



    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });

    }

    error = ''

    render() {

        console.log(this.state.article);

        if (this.state.status === 'success') {

            return <Redirect to="/blog" />;
        }

        var article = this.state.article;

        return (
            <div className='center'>
                <section className='content'>
                    <h1 className='subheader'> Editar artículo</h1>

                    {this.state.article &&        
                        <form className='mid-form' onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor='title'>Titulo</label>
                                <input type='text' name='title' defaultValue={article.title} ref={this.titleRef} onChange={this.changeState} />

                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                            </div>

                            <div className="form-group">
                                <label htmlFor='content'>Contenido</label>
                                <textarea name='content' defaultValue={article.content} ref={this.contentRef} onChange={this.changeState}></textarea>

                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>

                            <div className="form-group">
                                <label htmlFor='file0'>Imagen</label><div className='clearfix'></div>
                                    <div className="image-wrap">
                                        {(article.image != null) ? (
                                            <img src={this.url + 'get-image/' + article.image} alt={article.title} className='imageform' />
                                        ) : (
                                                <img src={imageDefault} alt="paisaje" className='imageform' />
                                            )}

                                    </div>
                                <input type='file' name='file0' onChange={this.fileChange} />

                            </div>
                            
                            <input type='submit' value='guardar' className='btn btn-success' />

                        </form>
                    }

                    {!this.state.article._id &&
                    <h1 className='subheader'>Cargando</h1>
                    
                    }

                    
                </section>

                <Sidebar />

            </div>
        )
    }
}

export default EditArticle;