import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {selectPage} from '../../actions/index'
// import './Pokemons.css'

export default function Pagination(){

    var pokemons = useSelector(state => state.pokemons)
    var dispatch = useDispatch()
    let pagN = Math.ceil(pokemons.length/9)
    let pagTotal = []
 
    for(let i=1; i<=pagN;i++){
        if(!pagTotal.includes(i)){pagTotal.push(i)}
    }

    if(pokemons){
        return (

                <div className='pagination' key='pagination'>
                    {
                    pagTotal.map((p)=><button onClick={()=>dispatch(selectPage(p))} key={`pag${p}`}>{p}</button>)}
                </div>


        )
    }
}