import React from 'react';
import grass from "../../img/type/grass.png"


export default function PokemonCard(props) {
  // acá va tu código
    props = {
        id: 1,
        name: "bulbasaur",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        types: [
            {
                timg: "../../img/type/grass.png",
                typename: "grass"
            },
            {
                timg: "../../../client/type/poison",
                typename: "poison"
            }
        ]
    }
    return (
    <div className='Card' >
        {/* <button onClick = {props.onClose}>x</button> */}
        <h3>{props.name[0].toUpperCase() + props.name.slice(1) }</h3>
        <p>#: {props.id}</p>
        <p>typo: {props.types.map(t=>t.typename)}</p>
        <img src= {`${grass}`} alt="Imagen no encontrada" />
        <img src= {`${props.img}`} alt="Imagen no encontrada" />
    </div>)

};