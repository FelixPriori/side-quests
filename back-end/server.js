// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8081;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require('morgan');
const session = require('express-session');


// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(session({
  secret: 'hfdgaskghsdfkljlgdfgskkhjriwu3h',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const apiRoutes = require("./routes/api");
// const usersRoutes = require("./routes/users");



// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/", registerRoutes());
app.use("/", loginRoutes());
app.use("/", apiRoutes());
// Note: mount other resources here, using the same pattern above


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

