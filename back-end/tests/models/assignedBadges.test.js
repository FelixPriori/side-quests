const {
  createAssignedBadge,
  createAdventurer,
  createBadge,
} = require("../seeds");
const AssignedBadge = require("../../db/models/assignedBadges");

let assignedBadge;
let adventurer;
let badge;

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
