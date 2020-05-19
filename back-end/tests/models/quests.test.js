require("../../environment");
const { testDbConnection } = require("../../db/test_db_connection");
const User = require("../../db/models/users");
const Quest = require("../../db/models/quests");
const faker = require("faker");

// test data
let villager;
let quest;

describe("quest model", () => {
  beforeAll(async () => {
    await testDbConnection();
  });

  beforeEach(async () => {
    villager = await User.create({
      username: faker.internet.userName(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.internet.avatar(),
      adventurer: false,
      bio: faker.lorem.paragraph(),
    });

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
    const villagerQuest = await Quest.findByPk(quest.id);
    const questVillager = await villagerQuest.getVillager();

    expect(questVillager.id).toEqual(villager.id);
  });
});
