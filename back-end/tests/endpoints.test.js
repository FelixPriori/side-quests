const app = require("../application")();
const supertest = require("supertest");
const request = supertest(app);
const { createBadge, createClass } = require("./seeds");

// test data
let badge;
let classInstance;

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
  it("should return an array of all the user objects", async () => {
    const response = await request.get("/users");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].id).toBe(1);
    expect(response.body[0]).toMatchObject({
      id: 1,
      username: "BobRobertson",
      first_name: "Bob",
      last_name: "Robertson",
      email: "bob@example.com",
      password: "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
      avatar: "/images/defaultAvatar.png",
      adventurer: true,
      bio: "",
    });
  });

  it("should return a user based on id equalling 1", async () => {
    const response = await request.get("/users/1");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toMatchObject({
      id: 1,
      username: "BobRobertson",
      first_name: "Bob",
      last_name: "Robertson",
      email: "bob@example.com",
      password: "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
      avatar: "/images/defaultAvatar.png",
      adventurer: true,
      bio: "",
    });
  });

  it("should return an array of villagers", async () => {
    const response = await request.get("/villagers");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toMatchObject({
      id: 2,
      username: "AlAlbertson",
      first_name: "Al",
      last_name: "Albertson",
      email: "al@example.com",
      password: "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
      avatar: "/images/defaultAvatar.png",
      adventurer: false,
      bio: "",
    });
  });

  it("should return an array of adventurers", async () => {
    const response = await request.get("/adventurers");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toMatchObject({
      id: 1,
      username: "BobRobertson",
      first_name: "Bob",
      last_name: "Robertson",
      email: "bob@example.com",
      password: "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
      avatar: "/images/defaultAvatar.png",
      adventurer: true,
      bio: "",
    });
  });
});

describe("quests", () => {
  it("should return a quest based on the id = 1 ", async () => {
    const response = await request.get("/quests/1");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toMatchObject({
      id: 1,
      name: "Can't figure out this math problem.",
      description: "I have a test coming up and I can't understand integrals.",
      completed: false,
      city: "Montreal",
      class_id: 3,
      villager_id: 6,
      experience_points: 100,
    });
  });

  it("should return a quest based on the villager id = 6", async () => {
    const response = await request.get("/users/6/quests");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toMatchObject({
      id: 1,
      name: "Can't figure out this math problem.",
      description: "I have a test coming up and I can't understand integrals.",
      completed: false,
      city: "Montreal",
      class_id: 3,
      villager_id: 6,
      experience_points: 100,
    });
  });

  it("should return an array of all the quests", async () => {
    const response = await request.get("/quests");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toMatchObject({
      id: 1,
      name: "Can't figure out this math problem.",
      description: "I have a test coming up and I can't understand integrals.",
      completed: false,
      city: "Montreal",
      class_id: 3,
      villager_id: 6,
      experience_points: 100,
    });
  });
});
