const router = require('express').Router()
const cookieSession = require('cookie-session')
const bcrypt = require('bcrypt')

router.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  })
)

const { checkIfUserExists, addUser } = require('../db/helpers')

module.exports = () => {
  router.post('/register', (req, res) => {
    const {
      username,
      firstName,
      lastName,
      email,
      password,
      accountType
    } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    // console.log(req.body)

    const EMPTY_ERROR = 'Please fill the registration information.'


    if (accountType === 1) {
      accountType = false;
    } else if (accountType === 2) {
      accountType = true;
    }

    if (!username || !email || !password) {
      res.send(EMPTY_ERROR)
    } else {
      checkIfUserExists(email).then(userCheck => {
        if (!userCheck) {
          addUser(
            username,
            firstName,
            lastName,
            email,
            hashedPassword,
            accountType
          ).then()
        } else {
          console.log('Error: User already exists with that email');
        }
      })
    }
  })

  return router;
}
