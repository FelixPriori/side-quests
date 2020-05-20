require("../environment");

beforeAll(async (done) => {
  // TODO: create test data for the endpoint tests before enabling this below
  // sync test db from sequelize models (this will remove all data in test db)
  // sequelize.sync({ force: true, match: /_test$/ });
  done();
});

afterAll(async (done) => {
  done();
});
