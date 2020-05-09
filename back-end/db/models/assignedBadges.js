const sequelize = require("../../server");
const { DataTypes } = require("sequelize");
const { Badges } = require("./badges");
const { Users } = require("./users");

const AssignedBadges = sequelize.define("AssignedBadge", {
  badgeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Badges,
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
});

module.exports = AssignedBadges;
