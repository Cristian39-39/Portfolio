import React from 'react';
// import { connect } from 'react-redux';
// import {addTodo} from '../../actions/index.js'
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
        types: {
            typename: [ {type1:''}, {type2:''} ],
        }
    });

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
            types: {
                typename: [ {type1:''}, {type2:''} ],
            }
        });
        props.addTodo(input);
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
            <input name='type1'value={input.imagen} onChange={handleChange}/>
            <label>Types</label>
            <div name='peso'value={input.types.type1} onChange={handleChange}>
            <select name="type">
                <option value="1">normal</option> 
                <option value="2">fighting</option> 
                <option value="3">flying</option>
                <option value="10">poison</option> 
                <option value="11">ground</option> 
                <option value="12">rock</option> 
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