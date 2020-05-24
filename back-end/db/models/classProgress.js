const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
const Class = require("./classes");
const User = require("./users");

const ClassProgress = sequelize.define(
  "class_progress",
  {
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Class,
        key: "id",
      },
      allowNull: false,
    },
    adventurer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    experience_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quest_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ClassProgress;
