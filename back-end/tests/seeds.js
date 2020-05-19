const faker = require("faker");
const User = require("../db/models/users");
const Quest = require("../db/models/quests");

const commonUserFields = {
  username: faker.internet.userName(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatar: faker.internet.avatar(),
  bio: faker.lorem.paragraph(),
};

const createVillager = async () =>
  User.create({ ...commonUserFields, adventurer: false });

const createAdventurer = async () =>
  User.create({ ...commonUserFields, adventurer: true });

const createQuest = async (options) =>
  Quest.create({
    name: faker.name.jobType(),
    description: faker.lorem.paragraph(),
    completed: false,
    city: faker.address.city(),
    class_id: 1,
    adventurer_id: options.adventurer && options.adventurer.id,
    villager_id: options.villager && options.villager.id,
  });

module.exports = { createVillager, createAdventurer, createQuest };
