const Quest = require("./quests");
const User = require("./users");

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
