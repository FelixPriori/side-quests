const sequelize = require("../../server");
const { DataTypes } = require("sequelize");
const { Class } = require("./classes");
const { User } = require("./users");

const Badge = sequelize.define("Badge", {
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
    allowNull: false,
  },
});

Badge.belongsTo(Class);
Badge.belongsToMany(User, { through: "AssignedBadges" });

module.exports = Badge;
