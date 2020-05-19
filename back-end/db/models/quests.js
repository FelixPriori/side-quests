const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
const Class = require("./classes");
const User = require("./users");

const Quest = sequelize.define(
  "quest",
  {
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
      defaultValue: null,
    },
    villager_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    experience_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
    },
  },
  {
    timestamps: false,
  }
);

Quest.belongsTo(User, {
  foreignKey: "adventurerId",
  as: "adventurer",
});

Quest.belongsTo(User, {
  foreignKey: "villagerId",
  as: "villager",
});

module.exports = Quest;
