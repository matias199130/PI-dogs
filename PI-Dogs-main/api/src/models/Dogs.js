const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // modelo de perros datos pedidos: id, nombre, altura, vida, imagen,
  //y agregado por mi consulto si es creado o no en la base de datos
  sequelize.define("dogs", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    life_span: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    createdInBd: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
