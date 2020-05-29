const sequelize = require("../sequelize");

const AssignedBadge = sequelize.define(
  "assigned_badge",
  {},
  {
    timestamps: false,
  }
);

module.exports = AssignedBadge;
