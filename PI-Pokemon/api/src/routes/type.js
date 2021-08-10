const express = require('express')
const { Type } = require('../db.js')
const router = express.Router()

router.get('/', (req, res, next)=>{
        Type.findAll( ).then(results=>{
            let dbType = results;
        //normalizado
        dbType = dbType.map((p)=>(p.name ))
        res.send(dbType)
    }).catch(error=>next(error))});

    module.exports = router