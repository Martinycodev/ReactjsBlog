import React, { Component } from 'react';

import Pelicula from './Pelicula.js'

class Peliculas extends Component {

    state = {}

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        peliculas[0].titulo = "Batman Begins";


    }

    favorita = (pelicula, indice) => {
        console.log("favorita marcada");
        console.log(pelicula, indice);


        this.setState({
            favorita: pelicula
        })
    }

    componentWillMount() {

        this.setState({
            peliculas: [
                { titulo: 'BatmanVsSuperman', imagen: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg' },
                { titulo: 'GranTorino', imagen: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg' },
                { titulo: 'ElUltimoSamurai', imagen: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg' }
            ],
            nombre: 'MartinCarmona',
            favorita: {}
        });

    }
    /*
        componentDidMount(){
            alert("Se ha montado el componente.")
        }
    
        componentWillUnmount(){
            alert("Se ha desmontado el componente")
        }
    */

    render() {

     



        return (
            <div className="peliculas" id='content'>
                <h2 className='subheader'>Peliculas</h2>

                <p>Seleccion de {this.state.nombre}</p>
                <div><button onClick={this.cambiarTitulo}>Holi</button></div>


                {/*   -- Condicional --
                    this.state.favorita.titulo ? (
                        <p className='favorita'>
                        <strong>La pelicula Favorita es:</strong>
                        <span>{this.state.favorita.titulo}</span>
                         </p>
                         
                    ) : (
                        <p>Todabia no hay favorita</p>
                    )
                */
                }

                {/*Crear componente de peliculas*/}


                <div id='articles' className='peliculas'>
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    indice={i}
                                    marcarFavorita={this.favorita}

                                />


                            )
                        })
                    }
                </div>
            </div>


        );
    }

}

export default Peliculas;