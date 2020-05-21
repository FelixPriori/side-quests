const app = require("../application")();
const supertest = require("supertest");
const request = supertest(app);
const {
  createBadge,
  createClass,
  createUser,
  createVillager,
  createAdventurer,
  createQuest,
} = require("./seeds");

// test data
let badge;
let classInstance;
let user;
let villager;
let adventurer;
let quest;

describe("badges", () => {
  beforeEach(async () => {
    badge = await createBadge();
  });

  it("should return an array of objects", async () => {
    const response = await request.get("/badges");
    expect(response.status).toBe(200);

    const badges = response.body;
    expect(badges.length).toBeGreaterThan(0);

    const specificBadge = badges.find((e) => e.id === badge.id);
    expect(specificBadge).toMatchObject(badge.dataValues);
  });

  it("should return a single badge object", async () => {
    const response = await request.get(`/badges/${badge.id}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toMatchObject(badge.dataValues);
  });
});

describe("classes", () => {
  beforeEach(async () => {
    classInstance = await createClass();
    badge = await createBadge({ class_id: classInstance.id });
  });

  it("should return an array of objects", async () => {
    const response = await request.get("/classes");
    expect(response.status).toBe(200);

    const classes = response.body;
    expect(classes.length).toBeGreaterThan(0);

    const specificClass = classes.find((e) => e.id === classInstance.id);
    expect(specificClass).toMatchObject(classInstance.dataValues);
  });

  it("should return a single class object", async () => {
    const response = await request.get(`/classes/${classInstance.id}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toMatchObject(classInstance.dataValues);
  });

  it("should return the badges associated with the specified class", async () => {
    const response = await request.get(`/classes/${classInstance.id}/badges`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toMatchObject(badge.dataValues);
  });
});

describe("users", () => {
  beforeEach(async () => {
    user = await createUser();
  });

  it("should return an array of all the user objects", async () => {
    const response = await request.get("/users");
    expect(response.status).toBe(200);

    const users = response.body;
    expect(users.length).toBeGreaterThan(0);

    const specificUser = users.find((e) => e.id === user.id);
    expect(specificUser).toMatchObject(user.dataValues);
  });

  it("should return a user with a specific id", async () => {
    const response = await request.get(`/users/${user.id}`);
    expect(response.status).toBe(200);

    const specificUser = response.body[0];
    expect(specificUser).toMatchObject(user.dataValues);
  });
});

describe("villagers", () => {
  beforeEach(async () => {
    villager = await createVillager();
  });

  it("should return an array of villagers", async () => {
    const response = await request.get("/villagers");
    expect(response.status).toBe(200);

    const villagers = response.body;
    expect(villagers.length).toBeGreaterThan(0);

    const specificVillager = villagers.find((e) => e.id === villager.id);
    expect(specificVillager).toMatchObject(villager.dataValues);
  });
});

describe("adventurers", () => {
  beforeEach(async () => {
    adventurer = await createAdventurer();
  });

  it("should return an array of adventurers", async () => {
    const response = await request.get("/adventurers");
    expect(response.status).toBe(200);

    const adventurers = response.body;
    expect(adventurers.length).toBeGreaterThan(0);

    const specificAdventurer = adventurers.find((e) => e.id === adventurer.id);
    expect(specificAdventurer).toMatchObject(adventurer.dataValues);
  });
});

describe("quests", () => {
  beforeEach(async () => {
    adventurer = await createAdventurer();
    villager = await createVillager();
    quest = await createQuest({
      adventurer_id: adventurer.id,
      villager_id: villager.id,
    });
  });

  it("should return an array of all the quests", async () => {
    const response = await request.get("/quests");
    expect(response.status).toBe(200);

    const quests = response.body;
    expect(quests.length).toBeGreaterThan(0);

    const specificQuest = quests.find((e) => e.id === quest.id);
    expect(specificQuest).toMatchObject(quest.dataValues);
  });

  it("should return a quest based on the quest id", async () => {
    const response = await request.get(`/quests/${quest.id}`);
    expect(response.status).toBe(200);

    const specificQuest = response.body[0];
    expect(specificQuest).toMatchObject(quest.dataValues);
  });

  it("should return quests based on the villager's id", async () => {
    const response = await request.get(`/users/${villager.id}/quests`);
    expect(response.status).toBe(200);

    const quests = response.body;
    expect(quests.length).toBeGreaterThan(0);

    const specificQuest = quests.find((e) => e.id === quest.id);
    expect(specificQuest).toMatchObject(quest.dataValues);
  });
});
