const router = require('express').Router();
const bcrypt = require('bcrypt');


const { checkIfUserExists, addUser, classProgressForNewUser, getUserByUsername } = require('../db/helpers');

module.exports = () => {
  router.post('/register', (req, res) => {
    let {
      username,
      firstName,
      lastName,
      email,
      avatar,
      password,
      accountType
    } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const EMPTY_ERROR = 'Please fill the registration information.';


    if (accountType === 1) {
      accountType = false;
    } else if (accountType === 2) {
      accountType = true;
    }
    if (!avatar) {
      avatar = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
    }
    if (!username || !email || !password) {
      res.send(EMPTY_ERROR);
    } else {
      checkIfUserExists(email).then(userCheck => {
        if (!userCheck) {
          return addUser(
            username,
            firstName,
            lastName,
            email,
            hashedPassword,
            accountType,
            avatar
          ).then(() => {
            return getUserByUsername(username).then(user => {
              classProgressForNewUser(user.id).then(() => {
                //Log them in
                req.session.userId = user.id;
                req.session.save();
                res.send();
              });
            });
          });
        } else {
          console.log('Error: User already exists with that email');
        }
      });
    }
  });

  return router;
};
