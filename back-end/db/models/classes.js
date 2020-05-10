const sequelize = require("../../server");
const { DataTypes } = require("sequelize");
const { Badge } = require("./badges");

const Class = sequelize.define("Class", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Class.hasMany(Badge);

module.exports = Class;
