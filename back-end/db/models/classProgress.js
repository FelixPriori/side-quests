const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
const Class = require("./classes");
const User = require("./users");

const ClassProgress = sequelize.define(
  "class_progress",
  {
    classId: {
      type: DataTypes.INTEGER,
      references: {
        model: Class,
        key: "id",
      },
      allowNull: false,
    },
    adventurerId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    experience_points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    quest_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ClassProgress;
