const User = require("../../db/models/users");
const {
  createVillager,
  createAdventurer,
  createQuest,
  createBadge,
  createAssignedBadge,
} = require("../seeds");
require("../../db/models/relationships");

// test data
let villager;
let adventurer;
let quest1;
let quest2;
let badge;

describe("user model", () => {
  describe("when user is a villager", () => {
    beforeEach(async () => {
      villager = await createVillager();
      quest1 = await createQuest({ villager_id: villager.id });
      quest2 = await createQuest({ villager_id: villager.id });
    });

    it("can fetch the associated quests", async () => {
      const villagerUser = await User.findByPk(villager.id);
      const villagerQuests = await villagerUser.getVillagerQuests();

      expect(villagerQuests.length).toEqual(2);
      const questIds = villagerQuests.map((q) => q.id).sort();
      expect(questIds).toEqual([quest1.id, quest2.id].sort());
    });
  });

  describe("when user is an adventurer", () => {
    beforeEach(async () => {
      adventurer = await createAdventurer();
      villager = await createVillager();
      quest1 = await createQuest({
        villager_id: villager.id,
        adventurer_id: adventurer.id,
      });
      quest2 = await createQuest({
        villager_id: villager.id,
        adventurer_id: adventurer.id,
      });
    });

    it("can fetch the associated quests", async () => {
      const adventurerUser = await User.findByPk(adventurer.id);
      const adventurerQuests = await adventurerUser.getAdventurerQuests();

      expect(adventurerQuests.length).toEqual(2);
      const questIds = adventurerQuests.map((q) => q.id).sort();
      expect(questIds).toEqual([quest1.id, quest2.id].sort());
    });

    describe("when user has badges", () => {
      beforeEach(async () => {
        badge = await createBadge();
        await createAssignedBadge({
          userId: adventurer.id,
          badgeId: badge.id,
        });
      });

      it("can fetch the associated badges", async () => {
        const adventurerUser = await User.findByPk(adventurer.id);
        const badges = await adventurerUser.getBadges();

        expect(badges.length).toEqual(1);
        expect(badges[0].id).toEqual(badge.id);
      });
    });
  });
});
