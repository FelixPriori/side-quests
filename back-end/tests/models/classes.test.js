const { createClass, createBadge } = require("../seeds");
const Class = require("../../db/models/classes");

let classInstance;
let badge1;
let badge2;

describe("class model", () => {
  beforeEach(async () => {
    classInstance = await createClass();
    badge1 = await createBadge({ classId: classInstance.id });
    badge2 = await createBadge({ classId: classInstance.id });
  });

  it("can fetch the associated badges", async () => {
    const classObject = await Class.findByPk(classInstance.id);
    const classBadges = await classObject.getBadges();
    expect(classBadges.length).toEqual(2);

    const badgeIds = classBadges.map((b) => b.id).sort();
    expect(badgeIds).toEqual([badge1.id, badge2.id].sort());
  });
});
