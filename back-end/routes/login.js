const router = require("express").Router();
// const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');



//Helper functions
const { correctPassword } = require('../db/helpers');



module.exports = () => {
  router.post(`/login`, (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const loginError = "Error: Login credentials invalid. Please try again.";

    if (!email || !password) {
      console.log(loginError);
      res.status(401).send(loginError)

    } else {
      correctPassword(email, password)
        .then(user => {
          if (user) {
            console.log("Login Successful");
            req.session.userId = user.id;
            req.session.save();
            res.send();
          } else {
            res.status(401).send("Error: Account does not exist.");
            console.log("Error: Account does not exist.")
          }
        });
    }

  });

  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res.status(200).send("Successfully logged out");
  });

  return router;
};
