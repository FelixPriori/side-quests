const {
  createVillager,
  createAdventurer,
  createQuest,
  createClass,
} = require("../seeds");
const Quest = require("../../db/models/quests");

// test data
let villager;
let adventurer;
let quest;
let classInstance;

describe("quest model", () => {
  describe("when quest is associated with a villager", () => {
    beforeEach(async () => {
      villager = await createVillager();
      classInstance = await createClass();
      quest = await createQuest({
        villagerId: villager.id,
        classId: classInstance.id,
      });
    });

    it("can fetch the associated villager", async () => {
      const questForVillager = await Quest.findByPk(quest.id);
      const questVillager = await questForVillager.getVillager();

      expect(questVillager.id).toEqual(villager.id);
    });

    it("can fetch the associated class", async () => {
      const questForClass = await Quest.findByPk(quest.id);
      const questClass = await questForClass.getClass();

      expect(questClass.id).toEqual(classInstance.id);
    });
  });

  describe("when quest is associated with an adventurer", () => {
    beforeEach(async () => {
      villager = await createVillager();
      adventurer = await createAdventurer();
      classInstance = await createClass();
      quest = await createQuest({
        adventurerId: adventurer.id,
        villagerId: villager.id,
        classId: classInstance.id,
      });
    });

    it("can fetch the associated adventurer", async () => {
      const questForAdventurer = await Quest.findByPk(quest.id);
      const questAdventurer = await questForAdventurer.getAdventurer();

      expect(questAdventurer.id).toEqual(adventurer.id);
    });

    it("can fetch the associated class", async () => {
      const questForClass = await Quest.findByPk(quest.id);
      const questClass = await questForClass.getClass();

      expect(questClass.id).toEqual(classInstance.id);
    });
  });
});
