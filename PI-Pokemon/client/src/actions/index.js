import axios from 'axios'
import { POKEMONS_URL } from '../consts'
import { GET_POKEMON, GET_ALL_POKEMONS, FIND_POKEMON, SELECT_PAGE } from './consts'

export function getPokemons(name){
    if(name===''){
        return function(dispatch){
            return axios.get(`${POKEMONS_URL}?name=${name}`)
            .then((pokemons)=>{
                dispatch({
                    type: GET_ALL_POKEMONS,
                    payload: pokemons.data
                })
            })
        }
    }else {
        return function(dispatch){
            return axios.get(`${POKEMONS_URL}?name=${name}`)
            .then((pokemons)=>{
                dispatch({
                    type: GET_POKEMON,
                    payload: pokemons.data
                })
            })
        }
    }
}
export function findPokemon(name){
    return{type:FIND_POKEMON, payload: name}
}
export function selectPage(pag){
    return{type:SELECT_PAGE, payload: pag}
}