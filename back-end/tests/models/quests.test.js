const faker = require("faker");

require("../../environment");
const { testDbConnection } = require("../../db/test_db_connection");
const { createVillager, createAdventurer } = require("../seeds");
const Quest = require("../../db/models/quests");
require("../../db/models/relationships");

// test data
let villager;
let adventurer;
let quest;

describe("quest model", () => {
  beforeAll(async () => {
    await testDbConnection();
  });

  describe("villager", () => {
    beforeEach(async () => {
      villager = await createVillager();

      quest = await Quest.create({
        name: faker.name.jobType(),
        description: faker.lorem.paragraph(),
        completed: false,
        city: faker.address.city(),
        class_id: 1,
        adventurer_id: null,
        villager_id: villager.id,
      });
    });

    it("can fetch the associated villager", async () => {
      const questForVillager = await Quest.findByPk(quest.id);
      const questVillager = await questForVillager.getVillager();

      expect(questVillager.id).toEqual(villager.id);
    });
  });

  describe("adventurer", () => {
    beforeEach(async () => {
      adventurer = await createAdventurer();

      quest = await Quest.create({
        name: faker.name.jobType(),
        description: faker.lorem.paragraph(),
        completed: false,
        city: faker.address.city(),
        class_id: 1,
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
