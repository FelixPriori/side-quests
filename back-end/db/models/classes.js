const sequelize = require("../../server");
const { DataTypes } = require("sequelize");

const Classes = sequelize.define("Class", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Classes;
