// function findPokemonReducer(array, name){
//     let pokemon = []
//     let newPokemos
//     console.log(array)
//     array.forEach(e => {
//         if (e.name===name) {
//             pokemon.push(e);
//             newPokemos = array.filter(poke=>poke.name===name);
//         };
//     });
//     return pokemon.concat(newPokemos)
// }
export default function ordertypeReducer(pokemons, types){
    let pokemonsOrder = pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[0]? true: poke.types.length > 1? poke.types[1].typename === types[0]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[1]? true: poke.types.length > 1? poke.types[1].typename === types[1]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[2]? true: poke.types.length > 1? poke.types[1].typename === types[2]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[3]? true: poke.types.length > 1? poke.types[1].typename === types[3]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[4]? true: poke.types.length > 1? poke.types[1].typename === types[4]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[5]? true: poke.types.length > 1? poke.types[1].typename === types[5]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[6]? true: poke.types.length > 1? poke.types[1].typename === types[6]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[7]? true: poke.types.length > 1? poke.types[1].typename === types[7]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[8]? true: poke.types.length > 1? poke.types[1].typename === types[8]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[9]? true: poke.types.length > 1? poke.types[1].typename === types[9]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[10]? true: poke.types.length > 1? poke.types[1].typename === types[10]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[11]? true: poke.types.length > 1? poke.types[1].typename === types[11]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[12]? true: poke.types.length > 1? poke.types[1].typename === types[12]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[13]? true: poke.types.length > 1? poke.types[1].typename === types[13]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[14]? true: poke.types.length > 1? poke.types[1].typename === types[14]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[15]? true: poke.types.length > 1? poke.types[1].typename === types[15]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[16]? true: poke.types.length > 1? poke.types[1].typename === types[16]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[17]? true: poke.types.length > 1? poke.types[1].typename === types[17]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[18]? true: poke.types.length > 1? poke.types[1].typename === types[18]? true: false: false: false).concat(pokemons.filter((poke)=>
    poke.types.length? poke.types[0].typename === types[19]? true: poke.types.length > 1? poke.types[1].typename === types[19]? true: false: false: false))))))))))))))))))))
    return pokemonsOrder.filter((item, index)=>{
        return pokemonsOrder.indexOf(item)===index
    })
}


// module.export = {
    // findPokemonReducer,
//     ordertypeReducer
// }