import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    {/*LOGO*/}
                    <div id="logo">
                        <img src={logo}  alt="logotipo" />
                        <span id="brand"><strong>Martin</strong>yCo</span>
                    </div>

                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to='/'  activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Blog'  activeClassName="active" >Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Formulario'  activeClassName="active">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to='/peliculas'  activeClassName="active">Peliculas</NavLink>
                            </li>

                        </ul>

                    </nav>



                    <div className="clearfix"></div>

                </div>


            </header>
        );
    }
}

export default Header;