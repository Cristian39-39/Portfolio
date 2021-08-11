const express = require('express')
const { Pokemon, Type, Mypokemon } = require('../db.js')
const {normalizar, normalizarPokemonDetails, onePokeId} = require('../controllers/Route.js')
const axios = require('axios')
const router = express.Router()


//Search pokemon
router.get('/', (req, res, next)=>{
    let namePoke = req.query.name? req.query.name : '';
    if(namePoke===''){
        let pokemonsPromise = Pokemon.findAll( {include: Type} );
        let mypokemonsPromise = Mypokemon.findAll({include: Type});
        return Promise.all([pokemonsPromise,mypokemonsPromise])
        .then(results=>{
            let pokemons = results[0];
            let mypokemons = results[1];
            let allpokemons = pokemons.concat(mypokemons)
            res.send(allpokemons.map(p=>normalizar(p)))
        }).catch(error=>next(error))
    }else{
        Pokemon.findOne( { where: {name: namePoke}, include: Type } ).then((onepokemon)=>{
            if(onepokemon){
                onepokemon = normalizar(onepokemon)
                res.send(onepokemon)
            }else{
                Mypokemon.findOne( { where: {name: namePoke}, include: Type } ).then((onepokemon)=>{
                    if(onepokemon){
                            onepokemon = normalizar(onepokemon)
                            res.send(onepokemon)
                    }else{
                let resPokemon = {}
                axios.get(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)
                .then((apiPoke)=>{
                resPokemon = apiPoke.data;
                resPokemon = {
                    id: resPokemon.id,
                    code: resPokemon.id,
                    name: resPokemon.name,
                    imagen: resPokemon.sprites.other['dream_world']['front_default'],
                    img: resPokemon.sprites.other['official-artwork']['front_default'],
                    vida: resPokemon.stats[0].base_stat, fuerza: resPokemon.stats[1].base_stat,
                    defensa: resPokemon.stats[2].base_stat,
                    velocidad: resPokemon.stats[5].base_stat,
                    altura: resPokemon.height,
                    peso: resPokemon.weight,
                    types: resPokemon.types.map((t)=>(t.type.name))
                }}).then(()=>Pokemon.create(resPokemon)).then(()=>Pokemon.findOne({where: {name: namePoke}}))
                .then((poke)=>poke.addTypes(resPokemon.types))
                .then(()=>Pokemon.findOne({where: {name: namePoke}, include: Type}))
                .then((poke)=>{
                    res.send(normalizar(poke))
                }).catch(error=>next(error))
            }})}})
    };  
});


//Pokemon details
router.get('/:id', (req,res,next)=>{
    Pokemon.findOne( { where: {code: req.params.id}, include: Type } ).then((onepokemon)=>{
        if(onepokemon){
            onepokemon = normalizarPokemonDetails(onepokemon)
            res.send(onepokemon)
        }else{
            Mypokemon.findOne( { where: {code: req.params.id}, include: Type } ).then((onepokemon)=>{
                if(onepokemon){
                        onepokemon = normalizarPokemonDetails(onepokemon)
                        res.send(onepokemon)
                }else{
            let resPokemon = {}
            axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
            .then((apiPoke)=>{
            resPokemon = apiPoke.data;
            resPokemon = {
                id: resPokemon.id,
                code: resPokemon.id,
                name: resPokemon.name,
                imagen: resPokemon.sprites.other['dream_world']['front_default'],
                img: resPokemon.sprites.other['official-artwork']['front_default'], 
                vida: resPokemon.stats[0].base_stat, fuerza: resPokemon.stats[1].base_stat,
                defensa: resPokemon.stats[2].base_stat,
                velocidad: resPokemon.stats[5].base_stat,
                altura: resPokemon.height,
                peso: resPokemon.weight,
                types: resPokemon.types.map((t)=>(t.type.name))
            }}).then(()=>Pokemon.create(resPokemon)).then(()=>Pokemon.findOne({where: {id: resPokemon.id}}))
            .then((poke)=>poke.addTypes(resPokemon.types))
            .then(()=>Pokemon.findOne({where: {id: resPokemon.id}, include: Type}))
            .then((poke)=>{
                res.send(normalizarPokemonDetails(poke))
            }).catch(error=>next(error))
        }})}
    })
})

//Create pokemon!!!!

router.post('/', (req, res, next)=>{
    let newpokemon = req.body
	Mypokemon.create(newpokemon).then(()=>Mypokemon.findOne({where: {name: newpokemon.name}}))
	.then((poke)=>{
	poke.addTypes(newpokemon.types)
	.then(()=>{
	Mypokemon.update({code: poke.code+poke.id}, {where: {name: newpokemon.name}})
	res.send('Has descubierto un nuevo pokemon')}).catch(error=>next(error))
})});


module.exports = router