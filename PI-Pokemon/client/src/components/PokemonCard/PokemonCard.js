import React from 'react';
import { Link } from 'react-router-dom';
import findtype from '../controllers/controllerType'
import './PokemonCard.css'


export default function PokemonCard(props) {

    return (
    <div className={`Card ${props.types[0].typename}`}>
        {/* <button onClick = {props.onClose}>x</button> */}
        <Link to={`/pokemons/${props.id}`} >
        <div className={`tittle ${props.types[0].typename}`}><h2>{props.name}</h2><p>#: {props.id}</p></div>
        <div><img src= {`${props.img}`} width="200" height="200" alt="Imagen no encontrada" /></div>
        <div className='types' > {props.types.map(t=>(<img src= {`${findtype(t.typename)}`} width="auto" height="40" alt="Imagen no encontrada" key={t.typename}/>)) } </div>
        </Link>
    </div>)

};