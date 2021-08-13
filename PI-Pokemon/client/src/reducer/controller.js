function findPokemonReducer(array, name){
    let pokemon = []
    let newPokemos
    console.log(array)
    array.forEach(e => {
        if (e.name===name) {
            pokemon.push(e);
            newPokemos = array.filter(poke=>poke.name===name);
        };
    });
    return pokemon.concat(newPokemos)
}


module.export = {
    findPokemonReducer
}