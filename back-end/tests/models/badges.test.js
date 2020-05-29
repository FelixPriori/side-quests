const {
  createClass,
  createBadge,
  createUser,
  createAssignedBadge,
} = require("../seeds");
const Badge = require("../../db/models/badges");

let classInstance;
let badge;
let user1;
let user2;

describe("badges model", () => {
  beforeEach(async () => {
    classInstance = await createClass();
    badge = await createBadge({ classId: classInstance.id });
  });

  it("can fetch associated class", async () => {
    const badgeForClass = await Badge.findByPk(badge.id);
    const classForBadge = await badgeForClass.getClass();
    expect(classForBadge.id).toEqual(badge.classId);
  });

  describe("when badge has users", () => {
    beforeEach(async () => {
      user1 = await createUser();
      user2 = await createUser();

      // associate those 2 users to the badge
      await createAssignedBadge({
        userId: user1.id,
        badgeId: badge.id,
      });
      await createAssignedBadge({
        userId: user2.id,
        badgeId: badge.id,
      });
    });

    it("can fetch the associated users", async () => {
      const userBadge = await Badge.findByPk(badge.id);
      const users = await userBadge.getUsers();

      expect(users.length).toEqual(2);
      const userIds = users.map((b) => b.id).sort();
      expect(userIds).toEqual([user1.id, user2.id].sort());
    });
  });
});
