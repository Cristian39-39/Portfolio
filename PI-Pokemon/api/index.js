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
const { conn, Pokemon, Type, Mypokemon  } = require('./src/db.js');
const axios = require('axios')

// Syncing all the models at once.

conn.sync({ force: true }).then(async () => {
  const pokemons = [];
  // const apiPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
  const apiPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
  const apiType = await axios.get('https://pokeapi.co/api/v2/type')
  let resPokemon = {apiPokemon.data}
  // apiPokemonname = apiPokemonname.map((p)=>({name: p.name}))
  let resType = apiType.data.results
  resType = resType.map((t)=>({name: t.name}))
  console.log(apiPokemonname)
  console.log(resType)
  await Type.bulkCreate(resType)
  // await Pokemon.bulkCreate()
  console.log('data base cargued')
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
