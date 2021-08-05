const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.VIRTUAL,
                get(){
                    return `../../../client/type/${this.id}`
                }
        }
    },{
        timestamps:true,
        createdAt:false,
        updatedAt:false
    });
};