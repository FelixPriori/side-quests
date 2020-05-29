const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
const Badge = require("./badges");
const User = require("./users");

const AssignedBadge = sequelize.define(
  "assigned_badge",
  {
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
  },
  {
    timestamps: false,
  }
);

module.exports = AssignedBadge;
