import { GET_POKEMON, GET_ALL_POKEMONS, FIND_POKEMON,
     SELECT_PAGE, RENDER_POKEMON, CHANGE_FILTER, FILTER,
    FILTER_TYPE, FILTER_API, FILTER_DB, CHANGE_ORDER, ORDER_TYPE, ORDER_FUERZA_ASC, ORDER_FUERZA_DES } from "../actions/consts";


var initialState = {
    pokemonsAll: [],
    pokemons:[],
    pokemonRender:[],
    pokemonDetail:{},
    page: 1,
    filter: 'ALL',
    type: 'normal',
    order: 'asc',
    select: 'type',
    types:[
        "normal",
        "fighting",
        "flying",
        "poison",
        "ground",
        "rock",
        "bug",
        "ghost",
        "steel",
        "fire",
        "water",
        "grass",
        "electric",
        "psychic",
        "ice",
        "dragon",
        "dark",
        "fairy",
        "unknown",
        "shadow"
    ]
}

function reducer(state=initialState, action){
    switch(action.type){
        case GET_ALL_POKEMONS:
            return{
                ...state,
                pokemonsAll: action.payload,
                page: 1
            }
        case GET_POKEMON:
            return{
                ...state,
                pokemonsAll: action.payload.concat(state.pokemons),
                page: 1
            }
        case FIND_POKEMON:
            return{
                ...state,
                pokemonsAll: state.pokemons.filter(poke=>poke.name===action.payload).concat(state.pokemons.filter(poke=>poke.name!==action.payload)),

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
        case CHANGE_FILTER:
            return {
                ...state,
                filter: action.payload[0],
                type: action.payload[1]
            }
        case FILTER:
            return {
                ...state,
                pokemons: state.pokemonsAll,
            }
        case FILTER_TYPE:
            return {
                ...state, 
                pokemons: state.pokemonsAll.filter((poke)=>
                poke.types.length
                    ? poke.types[0].typename === state.type
                        ? true
                        : poke.types.length > 1
                            ? poke.types[1].typename === state.type
                                ? true
                                : false
                            : false
                    : false),
                page: 1
            }
        case FILTER_API:
            return {
                ...state,
                pokemons: state.pokemonsAll.filter((poke)=>
                poke.id?poke.id.includes('myPoke')?false:true:false
                ),
                page: 1
            }
        case FILTER_DB:
            return {
                ...state,
                pokemons: state.pokemonsAll.filter((poke)=>
                poke.id?poke.id.includes('myPoke')?true:false:false
                ),
                page: 1
            }
        case CHANGE_ORDER:
            return {
                ...state,
                order: action.payload[0],
                select: action.payload[1]
            }
        case ORDER_FUERZA_ASC:
            return{
                ...state,
                pokemons: state.pokemons.sort((a,b)=>a.fuerza - b.fuerza)
            }
        case ORDER_FUERZA_DES:
            return{
                ...state,
                pokemons: state.pokemons.sort((a,b)=>b.fuerza - a.fuerza)
                ,page: 1
            }
        case ORDER_TYPE:
            return{
                ...state,
                pokemons: action.payload
            }
        default: return state
    }
}
export default reducer