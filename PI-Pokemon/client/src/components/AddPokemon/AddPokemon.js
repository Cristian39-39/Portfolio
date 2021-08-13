import React from 'react';
import {useDispatch} from 'react-redux'
import {addPokemon} from '../../actions/index.js'
import './AddPokemon.css'

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.


export default function AddPokemon(props) {
    const [input, setInput] = React.useState({
        name: '',
        vida:'' ,
        fuerza:'',
        defensa:'',
        velocidad:'',
        altura:'',
        peso:'',
        imagen:'',
        type1:'',
        type2:'',
        type3:''
    });

    const dispatch = useDispatch()


    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    };

    function handleSubmit(e) {
        e.preventDefault();
        setInput({    
            name: '',
            // description:'',
            vida:'' ,
            fuerza:'',
            defensa:'',
            velocidad:'',
            altura:'',
            peso:'',
            imagen:'',
            type1:'',
            type2:'',
            type3:''
        });
        dispatch(addPokemon(input));
    }

    return (
        <>
        <h1>Create New Pokemon</h1>
        <div className='form'>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input name='name' value={input.name} onChange={handleChange}/>
            {/* <label>vida</label>
            <textarea name='description' value={input.description} onChange={handleChange}/> */}
            <label>Vida</label>
            <input name='vida' value={input.vida} onChange={handleChange}/>
            <label>Fuerza</label>
            <input name='fuerza'value={input.fuerza} onChange={handleChange}/>
            <label>Defensa</label>
            <input name='defensa'value={input.defensa} onChange={handleChange}/>
            <label>Velocidad</label>
            <input name='velocidad'value={input.velocidad} onChange={handleChange}/>
            <label>Altura</label>
            <input name='altura'value={input.altura} onChange={handleChange}/>
            <label>Peso</label>
            <input name='peso'value={input.peso} onChange={handleChange}/>
            <label>Imagen</label>
            <input name='imagen'value={input.imagen} onChange={handleChange}/>
            <label>Types</label>
            <div >
            <select name="type1"value={input.type1} onChange={handleChange}>
                <option value=""></option>
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
            </select>
            <select name="type2"value={input.type2} onChange={handleChange}>
                <option value=""></option>
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
            </select>
            <select name="type3"value={input.type3} onChange={handleChange}>
                <option value=""></option>
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
            </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
        </div>
        </>
    )
    };

// function mapStateToProps(state) {
//     return {
//         state: state
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         addTodo: data => dispatch(addTodo(data))
//     };
// }



// // export default connect(
// //     mapStateToProps,
// //     mapDispatchToProps
// // )(AddTodo);