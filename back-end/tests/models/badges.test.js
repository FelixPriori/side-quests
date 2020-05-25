const { createClass, createBadge } = require("../seeds");
const Badge = require("../../db/models/badges");

let classInstance;
let badge;

describe("badges model", () => {
  beforeEach(async () => {
    classInstance = await createClass();
    badge = await createBadge({ class_id: classInstance.id });
  });

  it("can fetch associated class", async () => {
    const badgeForClass = await Badge.findByPk(badge.id);
    const classForBadge = await badgeForClass.getClass();
    expect(classForBadge.id).toEqual(badge.class_id);
  });
});
