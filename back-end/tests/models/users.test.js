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
let badge1;
let badge2;

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
        badge1 = await createBadge();
        badge2 = await createBadge();

        // associate those 2 badges to the adventurer
        await createAssignedBadge({
          userId: adventurer.id,
          badgeId: badge1.id,
        });
        await createAssignedBadge({
          userId: adventurer.id,
          badgeId: badge2.id,
        });
      });

      it("can fetch the associated badges", async () => {
        const adventurerUser = await User.findByPk(adventurer.id);
        const badges = await adventurerUser.getBadges();

        expect(badges.length).toEqual(2);
        const badgeIds = badges.map((b) => b.id).sort();
        expect(badgeIds).toEqual([badge1.id, badge2.id].sort());
      });
    });
  });
});
