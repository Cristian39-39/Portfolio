const express = require('express')
const { Pokemon, Type } = require('../db.js')
const router = express.Router()
const axios = require('axios')


//Buscar todos los pokemon
router.get('/', (req,res,next)=>{
    let pname = req.body.name
    console.log(pname)
    if(!!pname){
        Pokemon.findOne( { where: {name: pname} } ).then((onepokemon)=>{
            console.log(onepokemon)
            res.send(onepokemon)
        })



        // axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        // .then((apipoke)=>{
        //     let newPokemon = apipoke.data;
            
        //     resPokemon = {
        //         id: newPokemon.id, 
        //         name: newPokemon.name, 
        //         vida: newPokemon.stats[0].base_stat,
        //         fuerza: newPokemon.stats[1].base_stat,
        //         defensa: newPokemon.stats[2].base_stat,
        //         velocidad: newPokemon.stats[5].base_stat,
        //         altura: newPokemon.height,
        //         peso: newPokemon.weight,
        //         types: newPokemon.types.map((t)=>(t.type.name))
        //     }
        //     Pokemon.create(resPokemon).then(()=>{
        //         Pokemon.findByPk(resPokemon.id).then((poke)=>poke.addTypes(resPokemon.types))
        //     })
        //     res.send(resPokemon)
        // })

    }else{
        Pokemon.findAll( {include: Type} ).then(results=>{
            let dbPokemon = results;
        //normalizado
        dbPokemon = dbPokemon.map((p)=>(
            {
                id: p.id,
                name: p.name,
                img: p.img,
                types: p.types.map((t)=>({timg: t.imagen, typename: t.name}))
            }
        ))
            res.send(dbPokemon)
        })
        .catch(error=>next(error))
    }
})

//Buscar one pokemon




module.exports = router