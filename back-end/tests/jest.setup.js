require("../environment");
const {
  testDbConnection,
  syncTestDb,
  closeDbConnection,
} = require("../db/sequelize_helpers");

beforeAll(async (done) => {
  await testDbConnection();
  await syncTestDb();
  done();
});

afterAll(async (done) => {
  await closeDbConnection();
  done();
});
