const express = require('express')
const { Pokemon, Type } = require('../db.js')
const {normalizar, normalizarPokemonDetails} = require('../controllers/Route.js')
const axios = require('axios')
const router = express.Router()


//Buscar pokemon one and all
router.get('/', (req,res,next)=>{
    let pname = req.body.name
    if(!!pname){
        Pokemon.findOne( { where: {name: pname}, include: Type } ).then((onepokemon)=>{
            if(onepokemon){
                onepokemon = normalizar(onepokemon)
                res.send(onepokemon)
            }else{
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pname}`).then((apipoke)=>{
                    let newPokemon = apipoke.data;
                    newPokemon = {
                        id: newPokemon.id, 
                        name: newPokemon.name, 
                        vida: newPokemon.stats[0].base_stat,
                        fuerza: newPokemon.stats[1].base_stat,
                        defensa: newPokemon.stats[2].base_stat,
                        velocidad: newPokemon.stats[5].base_stat,
                        altura: newPokemon.height,
                        peso: newPokemon.weight,
                        types: newPokemon.types.map((t)=>(t.type.name))
                    }
                    Pokemon.create(newPokemon).then(()=>{
                        Pokemon.findByPk(newPokemon.id).then((poke)=>poke.addTypes(newPokemon.types))
                    }).then(()=>{
                        Pokemon.findOne( { where: {name: pname}, include: Type } ).then((onepokemon)=>{
                            onepokemon = normalizar(onepokemon)
                            res.send(onepokemon)
                    })
                })
                })};
        }).catch(error=>next(error));     
    }else{
        Pokemon.findAll( {include: Type} ).then(results=>{
            let dbPokemon = results;
        //normalizado
        dbPokemon = dbPokemon.map((p)=>(
            normalizar(p)
        ))
            res.send(dbPokemon)
        }).catch(error=>next(error))
    }
})

//Pokemon details
router.get('/:name', (req,res,next)=>{
    Pokemon.findOne( { where: {name: req.params.name}, include: Type } ).then((onepokemon)=>{
        onepokemon = normalizarPokemonDetails(onepokemon)
        res.send(onepokemon)
})
})



module.exports = router