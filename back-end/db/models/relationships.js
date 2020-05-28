const Quest = require("./quests");
const User = require("./users");
const Badge = require("./badges");
const Class = require("./classes");
const ClassProgress = require("./classProgress");
const AssignedBadge = require("./assignedBadges");

Quest.belongsTo(User, {
  foreignKey: "villager_id",
  as: "villager",
});

Quest.belongsTo(User, {
  foreignKey: "adventurer_id",
  as: "adventurer",
});

Quest.belongsTo(Class, {
  foreignKey: "class_id",
});

User.hasMany(Quest, {
  foreignKey: "villager_id",
  as: "villagerQuests",
});

User.hasMany(Quest, {
  foreignKey: "adventurer_id",
  as: "adventurerQuests",
});

ClassProgress.belongsTo(Class, {
  foreignKey: "class_id",
});

ClassProgress.belongsTo(User, {
  foreignKey: "adventurer_id",
  as: "adventurer",
});

AssignedBadge.belongsTo(Badge, {
  foreignKey: "badge_id",
});

AssignedBadge.belongsTo(User, {
  foreignKey: "adventurer_id",
  as: "adventurer",
});

Badge.belongsTo(Class, {
  foreignKey: "class_id",
});

Class.hasMany(Badge, {
  foreignKey: "class_id",
});

// User.belongsToMany(Badge, { through: AssignedBadges });
// Badge.belongsToMany(User, { through: AssignedBadges });
