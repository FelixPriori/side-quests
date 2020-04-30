/* eslint-disable camelcase */
require("../environment");
const app = require("../application")("production");
const supertest = require("supertest");
const request = supertest(app);

describe("badges", () => {
  it("should return an array of objects", async () => {
    const response = await request.get("/badges");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toMatchObject({
      id: 1,
      name: "A stealthy aquaintance",
      requirement: "Complete 1 Rogue Quest",
      int_requirement: 1,
      criteria_type: "quest",
      class_id: 1,
    });
  });

  it("should return a single badge object", async () => {
    const response = await request.get("/badges/1");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toMatchObject({
      id: 1,
      name: "A stealthy aquaintance",
      requirement: "Complete 1 Rogue Quest",
      int_requirement: 1,
      criteria_type: "quest",
      class_id: 1,
    });
  });
});

describe("classes", () => {
  it("should return an array of objects", async () => {
    const response = await request.get("/classes");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toMatchObject({
      id: 1,
      name: "Rogue",
      description:
        "Rogues like to help people from the shadows by sneaking to the nearest store to deliver needed supplies",
    });
  });

  it("should return a single class object", async () => {
    const response = await request.get("/classes/1");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toMatchObject({
      id: 1,
      name: "Rogue",
      description:
        "Rogues like to help people from the shadows by sneaking to the nearest store to deliver needed supplies",
    });
  });

  it("should return the badges associated with the specified class", async () => {
    const response = await request.get("/classes/1/badges");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toMatchObject({
      id: 1,
      name: "A stealthy aquaintance",
      requirement: "Complete 1 Rogue Quest",
      int_requirement: 1,
      criteria_type: "quest",
      class_id: 1,
    });
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
