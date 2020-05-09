const sequelize = require("../../server");
const { DataTypes } = require("sequelize");
const { Classes } = require("./classes");
const { Users } = require("./users");

const ClassProgress = sequelize.define("ClassProgress", {
  classId: {
    type: DataTypes.INTEGER,
    references: {
      model: Classes,
      key: "id",
    },
    allowNull: false,
  },
  adventurerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: "id",
    },
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
