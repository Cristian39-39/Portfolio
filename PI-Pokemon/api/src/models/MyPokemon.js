const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('mypokemon', {
        code: {
        type: DataTypes.STRING,
        defaultValue: 'myPoke'
        },
        name: {
        type: DataTypes.STRING(20),

        },
        imagen: {
        type: DataTypes.STRING,
        defaultValue: 'https://c.tenor.com/eg9_HxtaW3kAAAAC/pokemon-pikachu.gif'
        },
        img: {
        type: DataTypes.STRING,
        defaultValue: 'https://c.tenor.com/eg9_HxtaW3kAAAAC/pokemon-pikachu.gif'
        },
        vida: {
        type: DataTypes.INTEGER
        },
        fuerza: {
        type: DataTypes.INTEGER
        },
        defensa: {
        type: DataTypes.INTEGER
        },
        velocidad: {
        type: DataTypes.INTEGER
        },
        altura: {
        type: DataTypes.INTEGER
        },
        peso: {
        type: DataTypes.INTEGER
        }
    },{
        timestamps:false,
        createdAt:true,
        // updatedAt:false
    });
};
