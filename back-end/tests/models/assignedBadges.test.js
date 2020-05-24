const {
  createAssignedBadges,
  createAdventurer,
  createBadge,
} = require("../seeds");
const AssignedBadges = require("../../db/models/classProgress");

let assignedBadges;
let adventurer;
let badge;

describe("assigned badges model", () => {
  beforeEach(async () => {
    adventurer = await createAdventurer();
    badge = await createBadge();
    assignedBadges = await createAssignedBadges({
      badge_id: badge.id,
      adventurer_id: adventurer.id,
    });
  });
  it("can fetch the associated badge", async () => {
    const badgeForAdventurer = await AssignedBadges.findByPk(assignedBadges.id);
    const adventurerBadge = await badgeForAdventurer.getBadge();
    expect(adventurerBadge.id).toEqual(badge.id);
  });
});
