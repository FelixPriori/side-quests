const sequelize = require("../../server");
const { DataTypes } = require("sequelize");
const { Class } = require("./classes");
const { User } = require("./users");

const ClassProgress = sequelize.define("ClassProgress", {
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

ClassProgress.belongsTo(Class);
ClassProgress.hasOne(User, {
  foreignKey: "adventurerId",
});

module.exports = ClassProgress;
