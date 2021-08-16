import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {findpokemon} from '../controllers/controller';
import Filter from "./filter";
import Order from "./order"
// import { Link } from 'react-router-dom';
import {getPokemons, findPokemon, renderPokemon, filter} from '../../actions/index'
import './Search.css'

export default function Search () {
    const [input, setInput] = React.useState({
        name: ""
    });
    useEffect(()=>dispatch(renderPokemon()))
    
    
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    function handleChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        setInput({name: ""});
        if(findpokemon(pokemons, input.name)){
            dispatch(findPokemon(input.name));
        }else {dispatch(getPokemons(input.name)).then(()=>dispatch(filter())).then(()=>dispatch(renderPokemon()))}
    }
        return (
            <>
            <div className='search'>
                <form className="form-container" onSubmit={handleSubmit}>
                <div>
                    <label className="label" htmlFor="name">Pokemon: </label>
                    <input
                    name="name"
                    autoComplete="off"
                    value={input.name}
                    onChange={handleChange}
                    />
                <button type="submit">BUSCAR</button>
                
                </div>
                </form>
                <Filter />
                <Order/>
            </div>
                <hr/>
            </>
            
            );
}