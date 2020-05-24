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
  as: "classId",
});

ClassProgress.belongsTo(User, {
  foreignKey: "adventurer_id",
  as: "adventurerId",
});

AssignedBadges.belongsTo(Badge, {
  foreignKey: "badge_id",
  as: "badgeId",
});

AssignedBadges.belongsTo(User, {
  foreignKey: "adventurer_id",
  as: "adventurerId",
});

Badge.belongsTo(Class);
