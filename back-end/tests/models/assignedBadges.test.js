const {
  createAssignedBadge,
  createAdventurer,
  createBadge,
} = require("../seeds");
const AssignedBadge = require("../../db/models/classProgress");

let assignedBadges;
let adventurer;
let badge;

describe("assigned badges model", () => {
  beforeEach(async () => {
    adventurer = await createAdventurer();
    badge = await createBadge();
    assignedBadges = await createAssignedBadge({
      badge_id: badge.id,
      adventurer_id: adventurer.id,
    });
  });
  it("can fetch the associated badge", async () => {
    const badgeForAdventurer = await AssignedBadge.findByPk(assignedBadges.id);
    const adventurerBadge = await badgeForAdventurer.getBadge();
    expect(adventurerBadge.id).toEqual(badge.id);
  });
  it("can fetch the associated adventurer", async () => {
    const badgeForAdventurer = await AssignedBadge.findByPk(assignedBadges.id);
    const adventurerFromBadge = await badgeForAdventurer.getAdventurer();
    expect(adventurerFromBadge.id).toEqual(adventurer.id);
  });
});
