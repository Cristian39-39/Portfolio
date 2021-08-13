function findpokemon (pokemons, name) {

    let j = false
    pokemons.forEach(e => {
        if (e.name===name) j = true;
    });
    return j
}


module.exports = {
    findpokemon
}