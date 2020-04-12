import React, { Component } from 'react';

import MiComponente from './MiComponente.js';



class SeccionPruebas extends Component {

    


    
/*
    constructor(props){
        super(props);
        this.state = {
            contador:0
        }
    }
*/
state ={
    contador:0
};

    HolaMundo(nombre, edad) {
        var presentacion = <h2>Hola Soy {nombre} y tengo {edad}</h2>;
        return presentacion;
    }

    Sumar =(e) =>{
        //this.state.contador=this.state.contador++;
        this.setState({
            contador: (this.state.contador + 1)
        })
    }
    Restar= (e)=>{
        this.setState({
            contador: (this.state.contador - 1)
        })
    }



    render() {
        
        var nombre = "Martin Carmona";


        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>

                
                <h2 className="subheader">Funciones y jsx básico</h2>
                {this.HolaMundo(nombre,12)}
                
                <h2 className="subheader">Componentes</h2>
                <section className='componentes'>
               
                    <MiComponente />

                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type='button' value='Sumar' onClick={this.Sumar} />
                    <input type='button' value='Restar' onClick={this.Restar}/>
                </p>

            </section>

            
        );
    }
}

export default SeccionPruebas;