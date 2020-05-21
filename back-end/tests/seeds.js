const faker = require("faker");
const User = require("../db/models/users");
const Quest = require("../db/models/quests");
const Badge = require("../db/models/badges");
const Class = require("../db/models/classes");

const commonUserFields = {
  username: faker.internet.userName(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatar: faker.internet.avatar(),
  bio: faker.lorem.paragraph(),
  adventurer: faker.random.boolean(),
};

const createVillager = async () =>
  User.create({ ...commonUserFields, adventurer: false });

const createAdventurer = async () =>
  User.create({ ...commonUserFields, adventurer: true });

const createUser = async () => User.create(commonUserFields);

const createQuest = async (options) =>
  Quest.create({
    name: faker.name.jobType(),
    description: faker.lorem.paragraph(),
    completed: false,
    city: faker.address.city(),
    class_id: 1,
    ...options,
  });

const createBadge = async (options) =>
  Badge.create({
    name: "A stealthy aquaintance",
    requirement: "Complete 1 Rogue Quest",
    int_requirement: 1,
    criteria_type: "quest",
    class_id: 1,
    ...options,
  });

const createClass = async (options) =>
  Class.create({
    name: "Rogue",
    description:
      "Rogues like to help people from the shadows by sneaking to the nearest store to deliver needed supplies",
    ...options,
  });

module.exports = {
  createVillager,
  createAdventurer,
  createUser,
  createQuest,
  createBadge,
  createClass,
};
