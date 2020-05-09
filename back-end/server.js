const app = require("./application")();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("side_quests", "quester", "quester", {
  host: "localhost",
  dialect: "postgres",
});

//Test db
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//Note: To close connection use sequelize.close()

// Run when client connects
app.listen(8081);

module.exports = sequelize;
