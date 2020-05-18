const sequelize = require("../sequelize");
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

Class.hasMany(Badge, { as: "badges", foreignKey: "classId" });

module.exports = Class;
