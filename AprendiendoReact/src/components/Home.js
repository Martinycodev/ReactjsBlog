import React, { Component } from 'react';
import Slider from './Slider.js';
import Sidebar from './Sidebar.js';
import Articles from './Articles';

class Home extends Component {

    render() {



        return (
            <React.Fragment>
              
                <Slider
                    title='holi a todos'
                    btn='leer'
                    size='slider-big'
                />
                

                 <div className="center">
                    <div id="content">
                        {/*Listado de articulos*/}
                        <Articles 
                            home='true'
                        />
                   
                    </div>
                    

                </div>
                
                <Sidebar 
                    
                />
            </React.Fragment>);
    }

}

export default Home;