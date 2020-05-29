const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
const Class = require("./classes");

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
    classId: {
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
