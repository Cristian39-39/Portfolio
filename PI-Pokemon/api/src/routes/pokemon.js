const express = require('express')
const { Pokemon, TYpe } = require('../db.js')
const router = express.Router()
const axios = require('axios')

router.get('/', (req,res,next)=>{
    let name = req.params.name
    if(name){
        res.send(console.log('unpokemonjajaja'))
    }else{
        Pokemon.findAll( ).then(results=>{
            let dbPokemon = results;
    
        //normalizado
        dbPokemon = dbPokemon.map((p)=>(
            {
                id: p.id,
                name: p.name,
                img: p.img
            }
        ))
            res.send(dbPokemon)
        })
        .catch(error=>next(error))
    }

})

module.exports = router