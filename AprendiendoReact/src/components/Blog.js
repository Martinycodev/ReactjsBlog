import React, { Component } from 'react';
import Slider from './Slider.js';
import Sidebar from './Sidebar.js';

import Articles from './Articles';


class Blog extends Component {

    state = {
        articles: {},
        status: null
    }

    render() {

        return (
            <React.Fragment>
              
                <Slider
                    title='Bienvenidos al Blog'
                    size='slider-small'
                    
                />
                
                <div className="center">
                    <div id="content">
                        {/*Listado de articulos*/}
                        <Articles />
                   
                    </div>
                    

                </div>
                
                <Sidebar 
                    blog="true"
                />
            </React.Fragment>);
    }

}

export default Blog;