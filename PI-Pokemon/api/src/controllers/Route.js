function normalizar (poke){
    let normalizadoPoke = {
        id: poke.id,
        name: poke.name,
        img: poke.img,
        types: poke.types.map((t)=>({timg: t.timg, typename: t.typename}))
    }
    return normalizadoPoke
}

function normalizarPokemonDetails (poke){
    let normalizadoPoke = {
        id: poke.id,
        name: poke.name,
        imagen: poke.img,
        vida: poke.vida,
        fuerza: poke.fuerza,
        defensa: poke.defensa,
        velocidad: poke.velocidad,
        altura: poke.altura,
        peso: poke.peso,
        types: poke.types.map((t)=>({timg: t.imagen, typename: t.name}))
    }
    return normalizadoPoke
}

module.exports = {
    normalizar,
    normalizarPokemonDetails
}