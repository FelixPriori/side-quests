const faker = require("faker");

require("../../environment");
const { testDbConnection } = require("../../db/test_db_connection");
const User = require("../../db/models/users");
const Quest = require("../../db/models/quests");
require("../../db/models/relationships");

//test data
let villager;

describe("user model", () => {
  beforeAll(async () => {
    await testDbConnection();
    // await sequelize.sync({ force: true, match: /_test$/ });
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

    await Quest.create({
      name: faker.name.jobType(),
      description: faker.lorem.paragraph(),
      completed: false,
      city: faker.address.city(),
      class_id: 1,
      adventurer_id: null,
      villager_id: villager.id,
    });

    await Quest.create({
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
  });
});
