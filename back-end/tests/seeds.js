const faker = require("faker");
const User = require("../db/models/users");

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

module.exports = { createVillager, createAdventurer };
