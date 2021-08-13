import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {findpokemon} from '../controllers/controller'
// import { Link } from 'react-router-dom';
import {getPokemons, findPokemon, renderPokemon} from '../../actions/index'
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
        }else {dispatch(getPokemons(input.name))
        dispatch(renderPokemon())}
    }
        return (
            <div key='search'>
                <h2>Buscador</h2>
                <form className="form-container" onSubmit={handleSubmit}>
                <div>
                    <label className="label" htmlFor="name">Pokemon: </label>
                    <input
                    name="name"
                    autoComplete="off"
                    value={input.name}
                    onChange={handleChange}
                    />
                </div>
                <button type="submit">BUSCAR</button>
                </form>
                {/* <ul>
                {this.props.movies && this.props.movies.map(movie => (
                <li key={movie.imdbID}>
                    <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>      
                    <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button>
                </li>
                ))}
                </ul> */}
            </div>
            );
}