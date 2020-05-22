require("../environment");
const { testDbConnection, syncTestDb } = require("../db/sequelize_helpers");

beforeAll(async (done) => {
  await testDbConnection();
  // sync test db according to sequelize's models
  await syncTestDb();
  done();
});

afterAll(async (done) => {
  done();
});
