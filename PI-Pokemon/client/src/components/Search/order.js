import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
import {changeOrder, orderPokemon, renderPokemon} from '../../actions/index'
import './Search.css'

export default function Order () {
    const [input, setInput] = React.useState({
        order: "asc",
        select: 'type'
    });
    const pokemons = useSelector(state=> state.pokemons)
    const types = useSelector(state=> state.types)
    const dispatch = useDispatch()
    let newPokemons = []

    function handleChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        dispatch(changeOrder(input.order, input.select))
        if(input.select==='type'&&input.order==='asc'){
            newPokemons=ordertypeReducerAsc(pokemons, types)
        }else if(input.select==='type'&&input.order==='des'){
            newPokemons=ordertypeReducerDes(pokemons, types)
        }
        dispatch(orderPokemon(input.order, input.select, newPokemons))
        dispatch(renderPokemon())
    }
        return (
                <form className="form-container" onSubmit={handleSubmit}>
                    <select name="order"value={input.order} onChange={handleChange}>
                        <option value="asc">Menor a Mayor</option> 
                        <option value="des">Mayor a Menor</option> 
                    </select>

                    <select name="select"value={input.select} onChange={handleChange}>
                        <option value="type">TYPE</option> 
                        <option value="fuerza">FUERZA</option> 
                    </select>
                <button type="submit">ORDER</button>
                </form>
            );
}

function ordertypeReducerAsc(pokemons, types){
    let pokemonsOrder = pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[0]? true: poke.types.length > 1? poke.types[1].typename === types[0]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[1]? true: poke.types.length > 1? poke.types[1].typename === types[1]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[2]? true: poke.types.length > 1? poke.types[1].typename === types[2]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[3]? true: poke.types.length > 1? poke.types[1].typename === types[3]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[4]? true: poke.types.length > 1? poke.types[1].typename === types[4]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[5]? true: poke.types.length > 1? poke.types[1].typename === types[5]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[6]? true: poke.types.length > 1? poke.types[1].typename === types[6]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[7]? true: poke.types.length > 1? poke.types[1].typename === types[7]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[8]? true: poke.types.length > 1? poke.types[1].typename === types[8]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[9]? true: poke.types.length > 1? poke.types[1].typename === types[9]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[10]? true: poke.types.length > 1? poke.types[1].typename === types[10]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[11]? true: poke.types.length > 1? poke.types[1].typename === types[11]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[12]? true: poke.types.length > 1? poke.types[1].typename === types[12]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[13]? true: poke.types.length > 1? poke.types[1].typename === types[13]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[14]? true: poke.types.length > 1? poke.types[1].typename === types[14]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[15]? true: poke.types.length > 1? poke.types[1].typename === types[15]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[16]? true: poke.types.length > 1? poke.types[1].typename === types[16]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[17]? true: poke.types.length > 1? poke.types[1].typename === types[17]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[18]? true: poke.types.length > 1? poke.types[1].typename === types[18]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[19]? true: poke.types.length > 1? poke.types[1].typename === types[19]? true: false: false: false))))))))))))))))))))
    return pokemonsOrder.filter((item, index)=>{
        return pokemonsOrder.indexOf(item)===index
    })
}
function ordertypeReducerDes(pokemons, types){
    let pokemonsOrder = pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[19]? true: poke.types.length > 1? poke.types[1].typename === types[19]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[18]? true: poke.types.length > 1? poke.types[1].typename === types[18]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[17]? true: poke.types.length > 1? poke.types[1].typename === types[17]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[16]? true: poke.types.length > 1? poke.types[1].typename === types[16]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[15]? true: poke.types.length > 1? poke.types[1].typename === types[15]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[14]? true: poke.types.length > 1? poke.types[1].typename === types[14]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[13]? true: poke.types.length > 1? poke.types[1].typename === types[13]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[12]? true: poke.types.length > 1? poke.types[1].typename === types[12]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[11]? true: poke.types.length > 1? poke.types[1].typename === types[11]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[10]? true: poke.types.length > 1? poke.types[1].typename === types[10]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[9]? true: poke.types.length > 1? poke.types[1].typename === types[9]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[8]? true: poke.types.length > 1? poke.types[1].typename === types[8]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[7]? true: poke.types.length > 1? poke.types[1].typename === types[7]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[6]? true: poke.types.length > 1? poke.types[1].typename === types[6]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[5]? true: poke.types.length > 1? poke.types[1].typename === types[5]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[4]? true: poke.types.length > 1? poke.types[1].typename === types[4]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[3]? true: poke.types.length > 1? poke.types[1].typename === types[3]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[2]? true: poke.types.length > 1? poke.types[1].typename === types[2]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[1]? true: poke.types.length > 1? poke.types[1].typename === types[1]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[0]? true: poke.types.length > 1? poke.types[1].typename === types[0]? true: false: false: false))))))))))))))))))))
    return pokemonsOrder.filter((item, index)=>{
        return pokemonsOrder.indexOf(item)===index
    })
}