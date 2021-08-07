const { Router, json } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouters = require('./pokemon.js')

const router = Router();
router.use(json())
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonRouters)

module.exports = router;
