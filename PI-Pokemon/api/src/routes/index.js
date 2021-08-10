const { Router, json } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouters = require('./pokemon.js')
const typesRouters = require('./type.js')

const router = Router();
router.use(json())
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonRouters)
router.use('/types', typesRouters)

module.exports = router;
