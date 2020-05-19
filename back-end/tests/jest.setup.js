require("../environment");

beforeAll(async (done) => {
  console.log("beforeAll() in Jest setup");
  // TODO: create test data for the endpoint tests before enabling this below
  // sync test db from sequelize models (this will remove all data in test db)
  // sequelize.sync({ force: true, match: /_test$/ });
  done();
});

afterAll(async (done) => {
  console.log("afterAll() in Jest setup");
  done();
});
