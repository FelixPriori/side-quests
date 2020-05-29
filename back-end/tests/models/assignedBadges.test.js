const {
  createAssignedBadge,
  createAdventurer,
  createBadge,
} = require("../seeds");
const AssignedBadge = require("../../db/models/assignedBadges");
const User = require("../../db/models/users");

let assignedBadge;
let adventurer;
let badge;
let badge2;
let user;

describe("assigned badges model", () => {
  beforeEach(async () => {
    adventurer = await createAdventurer();
    badge = await createBadge();
    assignedBadge = await createAssignedBadge({
      badgeId: badge.id,
      userId: adventurer.id,
    });
  });

  it("can fetch the associated badge", async () => {
    const userBadgeTuple = await AssignedBadge.findOne({
      where: { badgeId: assignedBadge.badgeId, userId: adventurer.id },
    });
    const adventurerBadge = await userBadgeTuple.getBadge();
    expect(adventurerBadge.id).toEqual(badge.id);
  });

  it("can fetch the associated adventurer", async () => {
    const userBadgeTuple = await AssignedBadge.findOne({
      where: { badgeId: assignedBadge.badgeId, userId: adventurer.id },
    });
    const adventurerFromBadge = await userBadgeTuple.getUser();
    expect(adventurerFromBadge.id).toEqual(adventurer.id);
  });
});

describe("For a given user", () => {
  beforeEach(async () => {
    user = await createAdventurer();
    badge = await createBadge();
    badge2 = await createBadge();
    await createAssignedBadge({
      userId: user.id,
      badgeId: badge.id,
    });
    await createAssignedBadge({
      userId: user.id,
      badgeId: badge2.id,
    });
  });

  it("can fetch the associated badges", async () => {
    const userInstance = await User.findByPk(user.id);
    const userBadges = await userInstance.getBadges();
    expect(userBadges.length).toEqual(2);

    const badgeIds = userBadges.map((b) => b.id).sort();
    expect(badgeIds).toEqual([badge.id, badge2.id].sort());
  });
});
