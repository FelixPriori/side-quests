const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Class = sequelize.define(
  "class",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Class;
