const sequelize = require("./sequelize");
require("./models/relationships");

// sync test db according to sequelize's models
const syncTestDb = async () =>
  await sequelize.sync({ force: true, match: /_tests$/ });

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Connection to '${process.env.DB_NAME}' db has been established successfully.`
    );
  } catch (error) {
    console.error(
      `Unable to connect to the '${process.env.DB_NAME}' db.`,
      error
    );
  }
};

const closeDbConnection = async () => sequelize.close();

module.exports = { testDbConnection, syncTestDb, closeDbConnection };
