const Quest = require("./quests");
const User = require("./users");
const Badge = require("./badges");
const Class = require("./classes");
const ClassProgress = require("./classProgress");
const AssignedBadges = require("./assignedBadges");

Quest.belongsTo(User, {
  foreignKey: "villager_id",
  as: "villager",
});

Quest.belongsTo(User, {
  foreignKey: "adventurer_id",
  as: "adventurer",
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
  as: "class",
});

ClassProgress.belongsTo(User, {
  foreignKey: "adventurer_id",
  as: "adventurer",
});

AssignedBadges.belongsTo(Badge, {
  foreignKey: "badge_id",
  as: "badge",
});

AssignedBadges.belongsTo(User, {
  foreignKey: "adventurer_id",
  as: "adventurer",
});

Badge.belongsTo(Class);
