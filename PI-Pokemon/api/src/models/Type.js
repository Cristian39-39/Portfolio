const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('type', {
        name: {
            type: DataTypes.STRING(20),
            primaryKey: true
        },
        imagen: {
            type: DataTypes.VIRTUAL,
                get(){
                    return `../../../client/type/${this.name}`
                }
        }
    },{
        timestamps:false,
        // createdAt:false,
        // updatedAt:false
    });
};