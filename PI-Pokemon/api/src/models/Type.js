const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('type', {
        name: {
            type: DataTypes.STRING(20),
        },
        imagen: {
            type: DataTypes.VIRTUAL,
                get(){
                    return `../../../client/type/${this.id}`
                }
        }
    },{
        timestamps:false,
        // createdAt:false,
        // updatedAt:false
    });
};