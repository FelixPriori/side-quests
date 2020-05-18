const User = require("../../db/models/users");
const Quest = require("../../db/models/quests");
const faker = require("faker");
// sequelizeClient.sync({ force: true, match: /_test$/ });

describe("user model", () => {
  it("can fetch the associated quests", async () => {
    // data creation
    const villager = await User.create({
      username: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.internet.avatar(),
      adventurer: false,
      bio: faker.lorem.paragraph(),
    });

    const adventurer = await User.create({
      username: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
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
      classId: 1,
      adventurerId: adventurer.id,
      villagerId: villager.id,
    });

    await Quest.create({
      name: faker.name.jobType(),
      description: faker.lorem.paragraph(),
      completed: false,
      city: faker.address.city(),
      classId: 1,
      villagerId: villager.id,
    });
    // test
    const adventurerQuests = User.findByPk(adventurer.id).getQuests();
    // expectations
    expect(adventurerQuests.length).toEqual(2);
  });
});
