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
const { conn, Pokemon, Type  } = require('./src/db.js');
const axios = require('axios')
const numeroPokemons = 9

// Syncing all the models at once.

conn.sync({ force: true }).then(async () => {
  const pokemons = [];
  const apiType = await axios.get('https://pokeapi.co/api/v2/type')
  let index = 1;
  while(index<=numeroPokemons){
    let apiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
    let resPokemon = apiPokemon.data;
    
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
    }
    pokemons.push(resPokemon)
    index++
  }
  let resType = apiType.data.results
  resType = resType.map((t)=>({name: t.name}))
  await Type.bulkCreate(resType)
  await Pokemon.bulkCreate(pokemons)
  index = 0;
  while(index<numeroPokemons){
    let poke = await Pokemon.findByPk(pokemons[index].id);
    await poke.addTypes(pokemons[index].types)
    index++
  }

  // console.log('data base cargued')
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
