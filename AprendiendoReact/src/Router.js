import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas.js';
import Error from './components/Error.js';

import Header from './components/Header.js';
//import Slider from './components/Slider.js';
//import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';
import Blog from './components/Blog.js';
import Search from './components/Search.js';

import Formulario from './components/Formulario.js';

import Home from './components/Home.js';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';



class Router extends Component {

    render() {
        return (

            <BrowserRouter>
                {/*Configurar rutas y páginas*/}


                <Header />
                
       
                    <Switch>
                        <Route exact path="/" component={Home} /> 
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/blog/article/:id" component={Article} />
                        <Route exact path="/blog/crear" component={CreateArticle} />
                        <Route exact path="/blog/editar/:id" component={EditArticle} />
                        <Route exact path="/blog/busqueda/:search" component={Search} />
                        <Route exact path="/redirect/:search" render={
                            (
                                (props) => {
                                    var search = props.match.params.search;
                                    console.log("search");
                                    return  <Redirect to={'/blog/busqueda/'+search} />
                                }
                            )
                        } />
                        <Route exact path="/Formulario" component={Formulario} />
                        <Route exact path="/Peliculas" component={Peliculas} />


                        <Route exact path="/Mi-Componente" component={MiComponente} />

                        <Route exact path="/Pagina1" render={() => (<React.Fragment>
                            <h1>Hola Mundo desde la Pagina2</h1>
                            <MiComponente saludo="hola" /></React.Fragment>
                        )} />

                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {

                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;
                            return (
                                <div>
                                    <h1>Pagina de pruebas</h1>
                                    <h2>{nombre}</h2>{apellidos}

                                </div>
                            );
                        }
                        } />

                        <Route component={Error} />

            }

            </Switch>



                    <div className="Clearfix"></div>
                    <Footer />
                


            </BrowserRouter >
        );
    }
}

export default Router;