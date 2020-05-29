const Quest = require("./quests");
const User = require("./users");
const Badge = require("./badges");
const Class = require("./classes");
const ClassProgress = require("./classProgress");
const AssignedBadge = require("./assignedBadges");

Quest.belongsTo(User, { as: "villager" });

Quest.belongsTo(User, { as: "adventurer" });

Quest.belongsTo(Class);

User.hasMany(Quest, { as: "villagerQuests" });

User.hasMany(Quest, { as: "adventurerQuests" });

ClassProgress.belongsTo(Class);

ClassProgress.belongsTo(User, { as: "adventurer" });

AssignedBadge.belongsTo(Badge);

AssignedBadge.belongsTo(User);

Badge.belongsTo(Class, {
  foreignKey: "class_id",
});

Class.hasMany(Badge, {
  foreignKey: "class_id",
});

User.belongsToMany(Badge, { through: AssignedBadge });
Badge.belongsToMany(User, { through: AssignedBadge });
