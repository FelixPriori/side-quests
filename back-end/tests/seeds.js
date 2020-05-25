const faker = require("faker");
const User = require("../db/models/users");
const Quest = require("../db/models/quests");
const Badge = require("../db/models/badges");
const Class = require("../db/models/classes");
const ClassProgress = require("../db/models/classProgress");
const AssignedBadges = require("../db/models/assignedBadges");

// hopefully faker's ability to generate unique values will be a reality soon
// see https://github.com/Marak/faker.js/issues/692
const uniqueEmail = () =>
  Math.floor(Math.random() * 1000000000) + faker.internet.email();

const commonUserFields = {
  username: faker.internet.userName(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  password: faker.internet.password(),
  avatar: faker.internet.avatar(),
  bio: faker.lorem.paragraph(),
  adventurer: faker.random.boolean(),
  // email needs to be dynamically generated
};

const createVillager = async (options) =>
  User.create({
    ...commonUserFields,
    adventurer: false,
    email: uniqueEmail(),
    ...options,
  });

const createAdventurer = async (options) =>
  User.create({
    ...commonUserFields,
    adventurer: true,
    email: uniqueEmail(),
    ...options,
  });

const createUser = async () =>
  User.create({ ...commonUserFields, email: uniqueEmail() });

const createQuest = async (options) =>
  Quest.create({
    name: faker.name.jobType(),
    description: faker.lorem.paragraph(),
    completed: false,
    city: faker.address.city(),
    class_id: (await createClass()).id,
    ...options,
  });

const createBadge = async (options) =>
  Badge.create({
    name: "A stealthy aquaintance",
    requirement: "Complete 1 Rogue Quest",
    int_requirement: 1,
    criteria_type: "quest",
    class_id: (await createClass()).id,
    ...options,
  });

const createClass = async (options) =>
  Class.create({
    name: "Rogue",
    description:
      "Rogues like to help people from the shadows by sneaking to the nearest store to deliver needed supplies",
    ...options,
  });

const createProgress = async (options) =>
  ClassProgress.create(options);

const createAssignedBadges = async (options) =>
  AssignedBadges.create(options);

module.exports = {
  createVillager,
  createAdventurer,
  createUser,
  createQuest,
  createBadge,
  createClass,
  createProgress,
  createAssignedBadges,
};
