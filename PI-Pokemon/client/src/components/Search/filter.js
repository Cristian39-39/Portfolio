import React from "react";
import { useDispatch } from "react-redux";
// import { Link } from 'react-router-dom';
import {changeFilter, filterPokemon} from '../../actions/index'
import './Search.css'

export default function Filter () {
    const [input, setInput] = React.useState({
        filter: "",
        type: 'normal'
    });
    
    const dispatch = useDispatch()

    function handleChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(changeFilter(input.filter, input.type))
        dispatch(filterPokemon(input.filter))
    }
        return (
                <form className="form-container" onSubmit={handleSubmit}>
                    <select name="filter"value={input.filter} onChange={handleChange}>
                        <option value="api">API</option> 
                        <option value="db">DATA BASE</option> 
                        <option value="type">TYPE</option>
                    </select>
                    {input.filter==='type'?
                    <select name="type"value={input.type} onChange={handleChange}>
                        <option value="normal">normal</option> 
                        <option value="fighting">fighting</option> 
                        <option value="flying">flying</option>
                        <option value="poison">poison</option> 
                        <option value="ground">ground</option> 
                        <option value="rock">rock</option>
                        <option value="bug">bug</option>
                        <option value="ghost">ghost</option>
                        <option value="steel">steel</option>
                        <option value="fire">fire</option>
                        <option value="water">water</option>
                        <option value="grass">grass</option>
                        <option value="electric">electric</option>
                        <option value="psychic">psychic</option>
                        <option value="ice">ice</option>
                        <option value="dragon">dragon</option>
                        <option value="dark">dark</option>
                        <option value="fairy">fairy</option>
                    </select>:null
                }
                <button type="submit">FILTER</button>
                </form>
            );
}