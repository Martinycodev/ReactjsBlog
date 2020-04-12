import React, { Component } from 'react';
import Slider from './Slider.js';
import Sidebar from './Sidebar.js';

class Formulario extends Component {



    nombreRef= React.createRef();
    apellidosRef= React.createRef();
    bioRef= React.createRef();
    genhombreRef= React.createRef();
    genmujerRef= React.createRef();
    genotroRef= React.createRef();


    state ={
        user:{}
    }

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'hombre';

        if(this.genhombreRef.current.checked){
            genero= this.genhombreRef.current.value;
        }else if (this.genmujerRef.current.checked){
            genero= this.genmujerRef.current.value;
        }else if (this.genotroRef.current.checked){
            genero= this.genotroRef.current.value;
        }




        var user ={
            nombre : this.nombreRef.current.value,
            apellidos : this.apellidosRef.current.value,
            bio : this.bioRef.current.value,
            
            genero
        }


        this.setState({
            user: user
        })
        console.log("formulario enviado");
        console.log(user);




    }

    render() {



        return (
            <React.Fragment>

                <Slider
                    title='Bienvenidos al Formulario'
                    size='slider-small'

                />


                         {/*FORMULARIO*/}
                <div className="center">
       
                    <section id="content">            

                        <h1 className="subheader">
                            FORMULARIO
                        </h1>


                        {this.state.user.nombre  &&
                            <div>
                                <p>Nombre: {this.state.user.nombre}</p>
                                <p>apellidos: {this.state.user.apellidos}</p>
                                <p>bio: {this.state.user.bio}</p>
                                <p>genero: {this.state.user.genero}</p>

                            </div>
                        }
                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Apellidos</label>
                                <input type="text" name="Apellidos" ref={this.apellidosRef} />
            
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Biografía</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>

                            </div>
                            <div className="form-group radiobutton">
                                <input type="radio" name="genero" value="hombre" ref={this.genhombreRef} />Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.genmujerRef} />Mujer
                                <input type="radio" name="genero" value="Otro" ref={this.genotroRef} />Otro
                            </div>

                            <div className="clearfix"></div>
                            <input type="submit" value="enviar" className="btn btn-success" />
                        </form>
                        

                    </section>
                </div>

                                <Sidebar />
            </React.Fragment>);
    }

}

export default Formulario;