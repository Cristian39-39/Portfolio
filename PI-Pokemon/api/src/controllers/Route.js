const { default: axios } = require("axios")
const { Pokemon, Type } = require("../db")

function normalizar (poke){
    let normalizadoPoke = {
        id: poke.code,
        name: poke.name,
        img: poke.imagen,
        types: poke.types.map((t)=>({typename: t.name}))
    }
    return normalizadoPoke
}

function normalizarPokemonDetails (poke){
    let normalizadoPoke = {
        id: poke.code,
        name: poke.name,
        imagen: poke.img,
        vida: poke.vida,
        fuerza: poke.fuerza,
        defensa: poke.defensa,
        velocidad: poke.velocidad,
        altura: poke.altura,
        peso: poke.peso,
        types: poke.types.map((t)=>({typename: t.name}))
    }
    return normalizadoPoke
}

function onePokeId(id){
    let resPokemon = {}
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((apiPoke)=>{
    resPokemon = apiPoke.data;
    resPokemon = {
        id: resPokemon.id,
        name: resPokemon.name, 
        vida: resPokemon.stats[0].base_stat, fuerza: resPokemon.stats[1].base_stat,
        defensa: resPokemon.stats[2].base_stat,
        velocidad: resPokemon.stats[5].base_stat,
        altura: resPokemon.height,
        peso: resPokemon.weight,
        types: resPokemon.types.map((t)=>(t.type.name))
    }}).then(()=>Pokemon.create(resPokemon)).then(()=>Pokemon.findOne({where: {id: resPokemon.id}}))
    .then((poke)=>poke.addTypes(resPokemon.types))
    .then(()=>Pokemon.findOne({where: {id: resPokemon.id}, include: Type}))
    .then((poke)=>resPokemon=poke)
    return resPokemon
}

module.exports = {
    normalizar,
    normalizarPokemonDetails,
    onePokeId
}