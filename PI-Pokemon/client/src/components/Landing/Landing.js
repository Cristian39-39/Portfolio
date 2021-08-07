import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/img/pokemon.png'

import './Landing.css';

export default function Landing() {
    return (
        <div className="landing">
            <div><Link exact to="/pokemons" >Home</Link></div>
            <div>
                <img id="landing" src={img} width="auto" height="auto" className="d-inline-block align-top" alt="" />
            </div>
        </div>
    )
}