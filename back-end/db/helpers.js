const db = require('./index');
const bcrypt = require('bcrypt');


const correctPassword = function (email, password) {
  const queryStr = `
    SELECT password
    FROM users
    WHERE email = $1
  `
  return db.query(queryStr, [email])
    .then(res => {
      if (res.rows.length !== 0) {
        return bcrypt.compareSync(password, res.rows[0].password)
      } else {
        return false
      }
    })
};

const checkIfUserExists = function (email) {
  const queryStr = `
    SELECT password
    FROM users
    WHERE email = $1
  `
  return db.query(queryStr, [email])
    .then(res => {
      if (res.rows.length === 0) {
        return false
      } else {
        return true
      }
    });

}

const addUser = function (username, first_name, last_name, email, password, avatar, adventurer) {
  const queryStr = `
  INSERT INTO users (username, first_name, last_name, email, password, avatar, adventurer)
  VALUES
  (
    $1, $2, $3, $4, $5, $6, $7
  )
  `
  return db.query(queryStr, [username, first_name, last_name, email, password, avatar, adventurer])
    .then();
}

const allUsers = function () {
  const queryStr = `
    SELECT * FROM users
  `

}

const getUser = function (userId) {

}

const allQuests = function () {

}

const getQuest = function (questId) {

}

const createNewQuest = function (/*input quest info required */) {

}

const deleteQuest = function (questId) {

}

const editQuest = function (/* new quest info */) {

}

const allAchievements = function () {

}

const getAchievement = function (achievementId) {

}

const allBadges = function () {

}

const getBadge = function (badgeId) {

}

const allClasses = function () {

}

const getClass = function (classId) {

}

module.exports = {
  correctPassword,
  checkIfUserExists,
  addUser
}