// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8081;
const ENV = process.env.ENV || "development";
const http = require('http');

const express = require("express");
const socketio = require("socket.io");
const bodyParser = require("body-parser");

//Maybe delete this
const sass = require("node-sass-middleware");
const cors = require('cors');
const app = express();




const morgan = require('morgan');
const session = require('express-session');


// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();
app.use(morgan('dev'));
app.use(cors());
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

const server = http.createServer(app);
const io = socketio(server);

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/", registerRoutes());
app.use("/", loginRoutes());
app.use("/", apiRoutes());
// Note: mount other resources here, using the same pattern above


//Run when client connects
io.on('connection', socket => {
  console.log("New WS connection...");
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

