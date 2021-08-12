import React from 'react';
import { useSelector } from "react-redux";
import PokemonCard from '../PokemonCard/PokemonCard';
import './Pokemons.css'

export default function Pokemons(){
    // let iten = 0;
    // let pag = 1;
    // let data = []
    // let datatem=[]
    // for(let i=0;i<props.length;i++){
    //     datatem.push(props[i])
    //     if(datatem.length===9||i===props.length-1){
    //         data.push(datatem);
    //         datatem=[];
    //     }
    // }
    var pokemons = useSelector(state => state.pokemons)

    if(pokemons){
        return (
            <div className='conter' key='pokemons'>
                <div className='cards'>
                    {
                        pokemons.map((p) => {
                            return<PokemonCard 
                            id={p.id}
                            name={p.name}
                            img={p.img}
                            types={p.types}
                            key={p.id}
                        />})
                            
                    }
                </div>



                {/* <ul className='pagination'>
                    {
                        data.map(dt=>
                            <li>
                                <div className='cards'>
                                    {
                                        dt.map((p) => {
                                            return<PokemonCard 
                                            id={p.id}
                                            name={p.name}
                                            img={p.img}
                                            types={p.types} />})
                                    }
                                </div>
                            </li>
                            )
                    }
                </ul> */}
            </div>
        )
    }
}

