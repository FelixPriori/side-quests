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
      adventurerId: adventurer.id,
      classId: classInstance.id,
    });
  });

  it("should have default values upon creation", async () => {
    const newProgress = await ClassProgress.findByPk(classProgress.id);
    expect(newProgress.level).toEqual(1);
    expect(newProgress.experience_points).toEqual(0);
    expect(newProgress.quest_count).toEqual(0);
  });

  it("can fetch associated adventurer", async () => {
    const progressForAdventurer = await ClassProgress.findByPk(
      classProgress.id
    );
    const progressAdventurer = await progressForAdventurer.getAdventurer();
    expect(progressAdventurer.id).toEqual(adventurer.id);
  });

  it("can fetch associated class", async () => {
    const progressForAdventurer = await ClassProgress.findByPk(
      classProgress.id
    );
    const progressClass = await progressForAdventurer.getClass();
    expect(progressClass.id).toEqual(classInstance.id);
  });
});
