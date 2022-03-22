const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dogs", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.STRING,
      defaultValue:
      "https://drive.google.com/file/d/1me3a-ECgQQle1SesLGZUgpR2e3J2su_b/preview",
    allowNull: true,
    },
    // temperament:{
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    createdInBd: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
