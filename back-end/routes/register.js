const router = require("express").Router();
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }));

const { checkIfUserExists, addUser } = require('../db/helpers')

module.exports = () => {

  router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const EMPTY_ERROR = "Please fill the registration information."

    if (!username || !email || !password) {
      res.send(EMPTY_ERROR);
    } else {
      checkIfUserExists(email)
        .then(userCheck => {
          if (!userCheck) {
            addUser().then()
          } else {
            console.log("Error: User already exists with that email")
          }
        });
    }
  });

  return router;
}
