//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Pokemon, Type, Mypokemon, Op  } = require('./src/db.js');
const axios = require('axios')

// Syncing all the models at once.

conn.sync({ force: true }).then(async () => {
  const pokemons = [];
  // const apiPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
  const apiPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
  const apiType = await axios.get('https://pokeapi.co/api/v2/type')
  let resPokemon = apiPokemon.data;
  
  resPokemon = {
    id: apiPokemon.data.id, 
    name: resPokemon.name, 
    vida: apiPokemon.data.stats[0].base_stat, fuerza: apiPokemon.data.stats[1].base_stat,
    defensa: apiPokemon.data.stats[2].base_stat,
    velocidad: apiPokemon.data.stats[5].base_stat,
    altura: apiPokemon.data.height,
    peso: apiPokemon.data.weight,
    types: apiPokemon.data.types.map((t)=>(t.type.name))
  }
  // apiPokemonname = apiPokemonname.map((p)=>({name: p.name}))
  let resType = apiType.data.results
  resType = resType.map((t)=>({name: t.name}))
  console.log(resPokemon)
  // resPokemon.types.forEach(e => {
  //   resPokemon.type = e;
  // });
  pokemons.push(resPokemon)
  
  // console.log(resType)
  await Type.bulkCreate(resType)
  await Pokemon.bulkCreate(pokemons)
  // pokemons.forEach(e=>{
  //   e.types.forEach(t=>{})
  // });

  console.log('data base cargued')
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
