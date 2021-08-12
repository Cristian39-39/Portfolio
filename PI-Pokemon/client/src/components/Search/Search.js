import React from "react";
import { useDispatch } from "react-redux";
// import { Link } from 'react-router-dom';
import {getPokemons} from '../../actions/index'
import './Search.css'


export default function Search () {
    const [input, setInput] = React.useState({
        name: ""
    });

    const dispatch = useDispatch()

    function handleChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        setInput({name: ""})
        dispatch(getPokemons(input.name))
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
    
    
    // function mapStateToProps(state) {
    //     return {
    //         state: state
    //     };
    // }
    
    // function mapDispatchToProps(dispatch) {
    //     return {

    //         getPokemons: data => dispatch(getPokemons(data))
    //     };
    // }
    
    // export default connect(
    //     mapStateToProps,
    //     mapDispatchToProps
    // )(Search);