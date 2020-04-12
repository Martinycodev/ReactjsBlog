import React, { Component } from 'react';
import Slider from './Slider.js';
import Sidebar from './Sidebar.js';

import Articles from './Articles';


class Search extends Component {

    state = {
        articles: {},
        status: null
    }

    render() {

        var searched = this.props.match.params.search;

        return (
            <React.Fragment>
              
                <Slider

                   
                    title={'Busqueda: '+searched}
                    size='slider-small'
                    
                />
                
                <div className="center">
                    <div id="content">
                        {/*Listado de articulos*/}
                        <Articles 
                            search={searched}
                        />
                   
                    </div>
                    

                </div>
                
                <Sidebar 
                    blog="true"
                />
            </React.Fragment>);
    }

}

export default Search;