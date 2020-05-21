require("../environment");
const { testDbConnection } = require("../db/test_db_connection");

beforeAll(async (done) => {
  await testDbConnection();
  // TODO: create test data for the endpoint tests before enabling this below
  // sync test db from sequelize models (this will remove all data in test db)
  // sequelize.sync({ force: true, match: /_test$/ });
  done();
});

afterAll(async (done) => {
  done();
});
