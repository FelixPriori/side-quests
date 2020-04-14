const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');



const { editProfile } = require('../db/helpers');

module.exports = () => {

  router.post('/users/:id/edit', (req, res) => {
    const {
      username,
      firstName,
      lastName,
      email,
      avatar,
      password,
      accountType
    } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    editProfile(req.params.id, username, firstName, lastName, email, hashedPassword, avatar, accountType).then();
  });


  return router;
}