const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const { editProfile, correctPassword } = require('../db/helpers');

module.exports = () => {

  router.post('/users/edit', (req, res) => {
    let { email, password, firstName, lastName, username, avatar, accountType } = req.body;

    console.log(req.body);
    if (!password) {
      console.log("Please input your password to change your account settings.");
      res.status(401).send("Please input your password to change your account settings.")
    } else {
      correctPassword(email, password).then(user => {

        if (user) {
          const hashedPassword = bcrypt.hashSync(password, 10);
          editProfile(username, firstName, lastName, email, hashedPassword, avatar, accountType, req.session.userId)
            .then(() => {
              res.send();
            });

        } else {
          console.log("Incorrect password entered. Please try again.");
          res.status(401).send("Incorrect password entered. Please try again.");
        }

      });
    }


  });


  return router;
}