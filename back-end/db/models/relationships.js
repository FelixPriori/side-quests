const Quest = require("./quests");
const User = require("./users");
const Badge = require("./badges");
const Class = require("./classes");

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

Badge.belongsTo(Class);
