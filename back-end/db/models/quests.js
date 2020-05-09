const sequelize = require("../../server");
const { DataTypes } = require("sequelize");
const { Classes } = require("./classes");
const { Users } = require("./users");

const Quests = sequelize.define("Quest", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
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
    defaultValue: null,
  },
  villagerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: "id",
    },
    allowNull: false,
  },
  experiencePoints: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 100,
  },
});

module.exports = Quests;
