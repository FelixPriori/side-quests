const sequelize = require("../../server");
const { DataTypes } = require("sequelize");

const ClassProgress = sequelize.define("ClassProgress", {
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  adventurerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  experiencePoints: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  questCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = ClassProgress;
