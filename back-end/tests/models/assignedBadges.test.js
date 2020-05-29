const {
  createAssignedBadge,
  createAdventurer,
  createBadge,
} = require("../seeds");
const AssignedBadge = require("../../db/models/assignedBadges");
const User = require("../../db/models/users");

let assignedBadge;
let assignedBadge2;
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
      adventurerId: adventurer.id,
    });
  });

  it("can fetch the associated badge", async () => {
    const badgeForAdventurer = await AssignedBadge.findByPk(assignedBadge.id);
    const adventurerBadge = await badgeForAdventurer.getBadge();
    expect(adventurerBadge.id).toEqual(badge.id);
  });

  it("can fetch the associated adventurer", async () => {
    const badgeForAdventurer = await AssignedBadge.findByPk(assignedBadge.id);
    const adventurerFromBadge = await badgeForAdventurer.getAdventurer();
    expect(adventurerFromBadge.id).toEqual(adventurer.id);
  });
});

describe("For a given user", () => {
  beforeEach(async () => {
    user = await createAdventurer();
    badge = await createBadge();
    badge2 = await createBadge();
    assignedBadge = await createAssignedBadge({
      userId: user.id,
      badgeId: badge.id,
    });
    assignedBadge2 = await createAssignedBadge({
      userId: user.id,
      badgeId: badge2.id,
    });
  });

  it.only("can fetch the associated badges", async () => {
    const userInstance = await User.findByPk(user.id);
    const userBadges = await userInstance.getBadges();
    expect(userBadges.length).toEqual(2);

    const badgeIds = userBadges.map((b) => b.id).sort();
    expect(badgeIds).toEqual([badge.id, badge2.id].sort());
    console.log(assignedBadge2); // this is to avoid linter error cause it's declared but not used.
  });
});
