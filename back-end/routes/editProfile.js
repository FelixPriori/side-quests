const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const { editProfile, correctPassword } = require('../db/helpers');

module.exports = () => {

  router.post('/users/edit', (req, res) => {
    let { email, password, confirmPassword, confirmChangePassword, firstName, lastName, username, avatar, accountType } = req.body;
    console.log("Email", email);
    console.log('First name', firstName);
    console.log("ConfirmChangePassword", confirmChangePassword);
    console.log("Changed password:", password);
    console.log(req.body);
    if (!confirmChangePassword) {
      console.log("Please input your password to change your account settings.");
      res.status(401).send("Please input your password to change your account settings.")
    } else {
      correctPassword(email, confirmChangePassword).then(user => {
        if (user) {
          if (password) {
            if (password === confirmPassword) {
              const hashedPassword = bcrypt.hashSync(password, 10);
              editProfile(username, firstName, lastName, email, hashedPassword, avatar, accountType, req.session.userId)
                .then(() => {
                  res.send();
                });
            } else {
              console.log("New password does not match the confirm password.");
              res.status(401).send("New password does not match the confirm password.");
            }
          } else {
            const hashedPassword = bcrypt.hashSync(confirmChangePassword, 10);
            editProfile(username, firstName, lastName, email, hashedPassword, avatar, accountType, req.session.userId)
              .then(() => {
                res.send();
              });
          }

        } else {
          console.log("Incorrect password entered. Please try again.");
          res.status(401).send("Incorrect password entered. Please try again.");
        }

      });
    }


  });


  return router;
}