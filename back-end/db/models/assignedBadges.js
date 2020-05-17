const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
const { Badge } = require("./badges");
const { User } = require("./users");

const AssignedBadge = sequelize.define("AssignedBadge", {
  badgeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Badge,
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
});

module.exports = AssignedBadge;
