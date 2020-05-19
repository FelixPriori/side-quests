const Quest = require("./quests");
const User = require("./users");

Quest.belongsTo(User, {
  foreignKey: "villager_id",
  as: "villager",
});

User.hasMany(Quest, {
  foreignKey: "villager_id",
  as: "villagerQuests",
});
