import React from 'react';
import findtype from '../controller'
import './PokemonCard.css'


export default function PokemonCard(props) {
  // acá va tu código
    props = {
        // id: 1,
        // name: "bulbasaur",
        // img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        // types: [
        //     {
        //         timg: "../../img/type/grass.png",
        //         typename: "grass"
        //     },
        //     {
        //         timg: "../../../client/type/poison",
        //         typename: "poison"
        //     }
        // ]
        id: 9,
        name: "blastoise",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
        vida: 79,
        fuerza: 83,
        defensa: 100,
        velocidad: 78,
        altura: 16,
        peso: 855,
        types: [
            {
                "timg": "../../../client/type/water",
                "typename": "water"
            }
        ]     
    }
    return (
    <div className={`Card ${props.types[0].typename}`} >
        {/* <button onClick = {props.onClose}>x</button> */}
        <div className={`tittle ${props.types[0].typename}`}><h2>{props.name[0].toUpperCase() + props.name.slice(1) }</h2><p>#: {props.id}</p></div>
        
        
        {/* <p>typo:</p>
        <p>{props.types.map(t=>t.typename).join(', ')}</p> */}
        <div><img src= {`${props.img}`} width="auto" height="200" alt="Imagen no encontrada" /></div>
        <div className='types' > {props.types.map(t=>(<img src= {`${findtype(t.typename)}`} width="auto" height="40" alt="Imagen no encontrada" />)) } </div>
    </div>)

};