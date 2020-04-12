import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Link ,  Redirect } from 'react-router-dom';
import imageDefault from '../assets/images/default.png';
import Moment from 'react-moment';
import 'moment/locale/es';
import Sidebar from './Sidebar';
import swal from 'sweetalert';

class Article extends Component {


    url = Global.url;

    state = {
        article: false,
        status: null
    }

    componentWillMount() {

        this.getArticle();

    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {

                this.setState({
                    article: res.data.article,
                    status: 'success'
                })
            })
            .catch(err => {

                this.setState({
                    articles: false,
                    status: "success"
                });

            })
            ;

    }

    deleteArticle = (id) => {

        swal({
            title: "Estas seguro?",
            text: "Borrarás permanentemente tu articulo?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            this.setState({
                                articles: res.data.article,
                                status: "deleted"
                            });


                        })
                    swal("Articulo Borrado", "El articulo ha sido borrado correctamente", "success");
                } else {
                    swal("Tranquilo", "El articulo no se ha borrado", "success");
                }
            });


        /* axios.delete(this.url + 'article/' + id)
         .then( res => {
             this.setState({
                 articles: res.data.article,
                 status: "deleted"
             });
 
           
         })*/
    }

    render() {


        if (this.state.status === 'deleted') {
            return <Redirect to='/blog' />
        }



        var article = this.state.article;

        return (



            <div className="center">

                <section id="content">

                    {this.state.article &&

                        <div id="articles">
                            <article className="article-detail" id="article-template">
                                <div className="image-wrap">
                                    {(article.image != null) ? (
                                        <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                    ) : (
                                            <img src={imageDefault} alt="paisaje" />
                                        )}

                                </div>

                                <h1 className="subheader">{article.title}</h1>
                                <span className="date">
                                    <Moment locale='es' fromNow>{article.date}</Moment>
                                </span>
                                <div className="clearfix"></div>

                                <p>{article.content}</p>

                                <div className="clearfix"></div>

                                <button onClick={
                                    () => {
                                        this.deleteArticle(article._id)
                                    }

                                } className='btn btn-danger'>eliminar</button>
                                <Link to={'/blog/editar/'+ article._id}  className='btn btn-warning'>editar</Link>
                                       
                                

                                <div className="clearfix"></div>
                            </article>

                        </div>


                    }

                    {!this.state.article &&
                        <div id="article">
                            <h2 className='subheader'>El Articulo no existe</h2>
                            <p>intentalo mas tarde</p>

                        </div>


                    }

                    {!this.state.status == null &&
                        <div id="article">
                            <h2 className='subheader'>Cargando</h2>
                            <p>espere unos segundos</p>

                        </div>


                    }




                </section>

                <Sidebar />
                <div className="clearfix"></div>

            </div>
        );

    }


}

export default Article;