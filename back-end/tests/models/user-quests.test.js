require("../../environment");
const { testDbConnection } = require("../../db/test_db_connection");
const User = require("../../db/models/users");
const Quest = require("../../db/models/quests");
const faker = require("faker");
const sequelize = require("../../db/sequelize");

describe("user model", () => {
  beforeAll(async () => {
    await testDbConnection();
    await sequelize.sync({ force: true, match: /_test$/ });
  });

  it("can fetch the associated quests", async () => {
    // test data creation
    const villager = await User.create({
      username: faker.internet.userName(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.internet.avatar(),
      adventurer: false,
      bio: faker.lorem.paragraph(),
    });

    const adventurer = await User.create({
      username: faker.internet.userName(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.internet.avatar(),
      adventurer: true,
      bio: faker.lorem.paragraph(),
    });

    await Quest.create({
      name: faker.name.jobType(),
      description: faker.lorem.paragraph(),
      completed: false,
      city: faker.address.city(),
      class_id: 1,
      adventurer_id: adventurer.id,
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
    // test
    const villagerQuests = await Quest.findByPk(villager.id).getQuests();
    // expectations
    expect(villagerQuests.length).toEqual(2);
  });
});
