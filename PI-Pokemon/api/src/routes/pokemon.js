const express = require('express')
const { Pokemon, Type } = require('../db.js')
const {normalizar, normalizarPokemonDetails, onePokeId} = require('../controllers/Route.js')
const axios = require('axios')
const router = express.Router()



router.get('/', (req, res, next)=>{
    let namePoke = req.query.name? req.query.name : '';
    if(namePoke===''){
        Pokemon.findAll( {include: Type} ).then(results=>{
            let dbPokemon = results;
        //normalizado
        dbPokemon = dbPokemon.map((p)=>(
            normalizar(p)
        ))
            res.send(dbPokemon)
        }).catch(error=>next(error))
    }else{
        Pokemon.findOne( { where: {name: namePoke}, include: Type } ).then((onepokemon)=>{
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
            };})
    };  
});

//Buscar pokemon all
// router.get('/', (req,res,next)=>{
// })

// router.get('/', (req,res,next)=>{
//     let pname = req.body.name
//     if(!!pname){
//         Pokemon.findOne( { where: {name: pname}, include: Type } ).then((onepokemon)=>{
//             if(onepokemon){
//                 onepokemon = normalizar(onepokemon)
//                 res.send(onepokemon)
//             }else{
//                 axios.get(`https://pokeapi.co/api/v2/pokemon/${pname}`).then((apipoke)=>{
//                     let newPokemon = apipoke.data;
//                     newPokemon = {
//                         id: newPokemon.id, 
//                         name: newPokemon.name, 
//                         vida: newPokemon.stats[0].base_stat,
//                         fuerza: newPokemon.stats[1].base_stat,
//                         defensa: newPokemon.stats[2].base_stat,
//                         velocidad: newPokemon.stats[5].base_stat,
//                         altura: newPokemon.height,
//                         peso: newPokemon.weight,
//                         types: newPokemon.types.map((t)=>(t.type.name))
//                     }
//                     Pokemon.create(newPokemon).then(()=>{
//                         Pokemon.findByPk(newPokemon.id).then((poke)=>poke.addTypes(newPokemon.types))
//                     }).then(()=>{
//                         Pokemon.findOne( { where: {name: pname}, include: Type } ).then((onepokemon)=>{
//                             onepokemon = normalizar(onepokemon)
//                             res.send(onepokemon)
//                     })
//                 })
//                 })};
//         }).catch(error=>next(error));     
//     }else{
//         Pokemon.findAll( {include: Type} ).then(results=>{
//             let dbPokemon = results;
//         //normalizado
//         dbPokemon = dbPokemon.map((p)=>(
//             normalizar(p)
//         ))
//             res.send(dbPokemon)
//         }).catch(error=>next(error))
//     }}
// )

//Pokemon details
router.get('/:id', (req,res,next)=>{
    Pokemon.findOne( { where: {code: req.params.id}, include: Type } ).then((onepokemon)=>{
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
        }
    })
})



module.exports = router