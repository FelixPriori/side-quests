const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
// const Badge = require("./badges");

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

// Class.hasMany(Badge, { as: "badges", foreignKey: "classId" });

module.exports = Class;
