import { GET_POKEMON, GET_ALL_POKEMONS, FIND_POKEMON, SELECT_PAGE, RENDER_POKEMON, } from "../actions/consts";


var initialState = {
    pokemons:[],
    pokemonRender:[],
    pokemonDetail:{},
    page: 1
}

function reducer(state=initialState, action){
    switch(action.type){
        case GET_ALL_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
            }
        case GET_POKEMON:
            return{
                ...state,
                pokemons: action.payload.concat(state.pokemons),
            }
        case FIND_POKEMON:
            return{
                ...state,
                pokemons: state.pokemons.filter(poke=>poke.name===action.payload).concat(state.pokemons.filter(poke=>poke.name!==action.payload))  ,
            }
        case SELECT_PAGE:
            return {
                ...state,
                page: action.payload,
                pokemonRender: state.pokemons.slice((action.payload-1)*9, action.payload*9)
            }
        case RENDER_POKEMON:
            return{
                ...state,
                pokemonRender: state.pokemons.slice((state.page-1)*9, state.page*9)
            }

        default: return state
    }
}
export default reducer