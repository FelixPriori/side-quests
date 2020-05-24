const { createProgress, createAdventurer, createClass } = require("../seeds");
const ClassProgress = require("../../db/models/classProgress");

// test data
let classInstance;
let adventurer;
let classProgress;

describe("class progress model", () => {
  beforeEach(async () => {
    classInstance = await createClass();
    adventurer = await createAdventurer();
    classProgress = await createProgress({
      adventurer_id: adventurer.id,
      class_id: classInstance.id,
    });
  });
  it("should have default values upon creation", async () => {
    const newProgress = await ClassProgress.findByPk(classProgress.id);
    expect(newProgress.level).toEqual(1);
    expect(newProgress.experience_points).toEqual(0);
    expect(newProgress.quest_count).toEqual(0);
  });
});
