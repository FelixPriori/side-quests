const app = require("./application")();
const sequelize = require("./db/sequelize");

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//Note: To close connection use sequelize.close()

// Run when client connects
app.listen(8081);

// module.exports = sequelize;
