const { createVillager, createAdventurer, createQuest } = require("../seeds");
const Quest = require("../../db/models/quests");
require("../../db/models/relationships");

// test data
let villager;
let adventurer;
let quest;

describe("quest model", () => {
  describe("when quest is associated with a villager", () => {
    beforeEach(async () => {
      villager = await createVillager();
      quest = await createQuest({ villager_id: villager.id });
    });

    it.only("can fetch the associated villager", async () => {
      const questForVillager = await Quest.findByPk(quest.id);
      const questVillager = await questForVillager.getVillager();

      expect(questVillager.id).toEqual(villager.id);
    });
  });

  describe("when quest is associated with an adventurer", () => {
    beforeEach(async () => {
      adventurer = await createAdventurer();
      villager = await createVillager();
      quest = await createQuest({
        adventurer_id: adventurer.id,
        villager_id: villager.id,
      });
    });

    it("can fetch the associated adventurer", async () => {
      const questForAdventurer = await Quest.findByPk(quest.id);
      const questAdventurer = await questForAdventurer.getAdventurer();

      expect(questAdventurer.id).toEqual(adventurer.id);
    });
  });
});
