import React, {Component} from 'react';

class MiComponente extends Component{

    render(){

        let receta={
            nombre:"pizza",
            ingredientes:['tomate','queso','jamon'],
            calorias:"400"
        };

        return (
            <div className="mi-omponente">
            <h1>{receta.nombre}</h1>
            <h2>
                {receta.calorias + ' calorias'}
            </h2>
            
            { this.props.saludo && 
            <h3>{this.props.saludo}</h3>

            }
            
            
            <ol>
                {
                    receta.ingredientes.map((ingrediente, i) =>{
                        
                        return (
                        <li key={i}>{ingrediente}</li>
                        )
                    })
                }
            </ol>
            <hr/>
            </div>
            

        );
    }

}

export default MiComponente;