const sequelize = require("./sequelize");

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

//Note: To close connection use sequelize.close()

module.exports.testDbConnection = testDbConnection;
