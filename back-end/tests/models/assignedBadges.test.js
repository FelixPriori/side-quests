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
