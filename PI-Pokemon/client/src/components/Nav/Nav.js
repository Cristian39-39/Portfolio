import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/img/navpoke.png'

import './Nav.css';

export default function Nav() {
    return (
        <header className="navbar">
            <div>
                <img id="logopoke" src={Logo} width="auto" height="50" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink to="/pokemons" >Pokemons</NavLink>
                        <NavLink to="/pokemons/create" >Create Pokemon</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}