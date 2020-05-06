const app = require("./application")("development");

// Run when client connects
if (process.env.NODE_ENV !== "test") {
  app.listen(8081);
}
