const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo el mismo solo tiene nombre y el id se crea predeterminadamente
  sequelize.define("temperament", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
