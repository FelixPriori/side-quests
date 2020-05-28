const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
const Class = require("./classes");
// const User = require("./users");

const Badge = sequelize.define(
  "badge",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requirement: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    int_requirement: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    criteria_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Class,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);


module.exports = Badge;
