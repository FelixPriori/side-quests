// load .env data into process.env
require("dotenv").config();

// Web server config
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);
app.use(express.static("public"));
app.use(
  session({
    secret: "hfdgaskghsdfkljlgdfgskkhjriwu3h",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Separated Routes for each Resource
const registerRoutes = require("./src/routes/register");
const loginRoutes = require("./src/routes/login");
const editProfileRoutes = require("./src/routes/editProfile");
const questRoutes = require("./src/routes/quests");
const userRoutes = require("./src/routes/users");
const badgeRoutes = require("./src/routes/badges");
const classRoutes = require("./src/routes/classes");

// Mount all resource routes
app.use("/", registerRoutes());
app.use("/", loginRoutes());
app.use("/", editProfileRoutes());
app.use("/", questRoutes());
app.use("/", userRoutes());
app.use("/", badgeRoutes());
app.use("/", classRoutes());

// Run when client connects
app.listen(8081);
