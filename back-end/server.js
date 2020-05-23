const app = require("./application")();
const { testDbConnection } = require("./db/sequelize_helpers");

testDbConnection().then(() => {
  // Run when client connects
  app.listen(8081);
});
