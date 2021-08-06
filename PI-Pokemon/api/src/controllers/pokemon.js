function getAllPokemonApi(){
    // const pokemons = [];
// const apiType = await axios.get('https://pokeapi.co/api/v2/type')
// let index = 1;
// while(index<=151){
//   let apiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
//   let resPokemon = apiPokemon.data;
  
//   resPokemon = {
//     id: apiPokemon.data.id, 
//     name: resPokemon.name, 
//     vida: apiPokemon.data.stats[0].base_stat, fuerza: apiPokemon.data.stats[1].base_stat,
//     defensa: apiPokemon.data.stats[2].base_stat,
//     velocidad: apiPokemon.data.stats[5].base_stat,
//     altura: apiPokemon.data.height,
//     peso: apiPokemon.data.weight,
//     types: apiPokemon.data.types.map((t)=>(t.type.name))
//   }
//   pokemons.push(resPokemon)
//   index++
// }
// let resType = apiType.data.results
// resType = resType.map((t)=>({name: t.name}))
// await Type.bulkCreate(resType)
// await Pokemon.bulkCreate(pokemons)
// index = 0;
// while(index<20){
//   let poke = await Pokemon.findByPk(pokemons[index].id);
//   await poke.addTypes(pokemons[index].types)
//   index++
// }
// })
}

module.exports = {
  getAllPokemonApi
}