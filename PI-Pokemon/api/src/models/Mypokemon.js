const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('mypokemon', {
        code: {
            type: DataTypes.VIRTUAL,
                get(){
                    return `MY${this.id}`
                }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
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
        timestamps:true,
        createdAt:false,
        updatedAt:false
    });
};