const router = require("express").Router();
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

//Still need to npm install cookieSession and bcrypt

router.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

//Helper functions
const { correctPassword } = require('../db/helpers');

module.exports = () => {
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const loginError = "Error: Login credentials invalid. Please try again.";

    if (!email || !password) {
      console.log(loginError);
      res.send(loginError);
    } else {
      correctPassword(email, password)
        .then(passwordMatch => {
          if (passwordMatch) {
            req.session.userId = email;
          }
        });
    }

  });

  router.post('/logout', (req, res) => {
    req.session = null;
  });

  return router;
};