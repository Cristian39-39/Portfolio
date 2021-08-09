import axios from 'axios'
import { POKEMONS_URL } from '../consts'
import { GET_POKEMONS } from './consts'

export function getPokemons(){
    return function(dispatch){
        return axios.get(POKEMONS_URL)
        .then((pokemons)=>{
            dispatch({
                type: GET_POKEMONS,
                payload: pokemons.data
            })
        })
    }
}