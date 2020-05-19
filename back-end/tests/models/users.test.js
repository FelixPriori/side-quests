const faker = require("faker");

require("../../environment");
const { testDbConnection } = require("../../db/test_db_connection");
const User = require("../../db/models/users");
const Quest = require("../../db/models/quests");
const { createVillager, createAdventurer } = require("../seeds");
require("../../db/models/relationships");

//test data
let villager;
let adventurer;
let quest1;
let quest2;

describe("user model", () => {
  beforeAll(async () => {
    await testDbConnection();
  });

  describe("villager", () => {
    beforeEach(async () => {
      villager = await createVillager();

      quest1 = await Quest.create({
        name: faker.name.jobType(),
        description: faker.lorem.paragraph(),
        completed: false,
        city: faker.address.city(),
        class_id: 1,
        adventurer_id: null,
        villager_id: villager.id,
      });

      quest2 = await Quest.create({
        name: faker.name.jobType(),
        description: faker.lorem.paragraph(),
        completed: false,
        city: faker.address.city(),
        class_id: 1,
        adventurer_id: null,
        villager_id: villager.id,
      });
    });

    it("can fetch the associated quests", async () => {
      const villagerUser = await User.findByPk(villager.id);
      const villagerQuests = await villagerUser.getVillagerQuests();

      expect(villagerQuests.length).toEqual(2);
      const questIds = villagerQuests.map((q) => q.id).sort();
      expect(questIds).toEqual([quest1.id, quest2.id].sort());
    });
  });

  describe("adventurer", () => {
    beforeEach(async () => {
      adventurer = await createAdventurer();

      quest1 = await Quest.create({
        name: faker.name.jobType(),
        description: faker.lorem.paragraph(),
        completed: false,
        city: faker.address.city(),
        class_id: 1,
        adventurer_id: adventurer.id,
        villager_id: villager.id,
      });

      quest2 = await Quest.create({
        name: faker.name.jobType(),
        description: faker.lorem.paragraph(),
        completed: false,
        city: faker.address.city(),
        class_id: 1,
        adventurer_id: adventurer.id,
        villager_id: villager.id,
      });
    });

    it("can fetch the associated quests", async () => {
      const adventurerUser = await User.findByPk(adventurer.id);
      const adventurerQuests = await adventurerUser.getAdventurerQuests();

      expect(adventurerQuests.length).toEqual(2);
      const questIds = adventurerQuests.map((q) => q.id).sort();
      expect(questIds).toEqual([quest1.id, quest2.id].sort());
    });
  });
});
