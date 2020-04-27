// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8081;
const ENV = process.env.ENV || "development";
const http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);

const app = express();
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

const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const editProfileRoutes = require("./routes/editProfile");
const questRoutes = require("./routes/quests");
const userRoutes = require('./routes/users');
const badgeRoutes = require('./routes/badges');
const classRoutes = require('./routes/classes');
const notificationRoutes = require('./routes/notifications');

// Mount all resource routes
app.use("/", registerRoutes());
app.use("/", loginRoutes());
app.use("/", editProfileRoutes());
app.use("/", questRoutes());
app.use("/", userRoutes());
app.use("/", badgeRoutes());
app.use("/", classRoutes());
app.use("/", notificationRoutes());


//Run when client connects
const server = app.listen(8081);



//For socket.io websockets

// const io = require('socket.io').listen(server);

// io.on('connection', socket => {
//   console.log("New WS connection...");

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

//   socket.on('chat message', (msgObj) => {
//     console.log("msgObj:", msgObj);
//     console.log("message: ", msgObj.msg, msgObj.userId);
//     io.emit('chat message', msgObj);
//   });
// });
