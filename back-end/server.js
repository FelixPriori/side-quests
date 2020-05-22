const app = require("./application")();
const { testDbConnection } = require("./db/test_db_connection");

testDbConnection().then(() => {
  // Run when client connects
  app.listen(8081);
});
