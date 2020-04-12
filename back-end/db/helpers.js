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
  return db.query(queryStr, [])
    .then(res => res.rows);

}

const getUser = function (userId) {
  const queryStr = `
    SELECT * 
    FROM users
    WHERE id = $1
  `
  return db.query(queryStr, [userId])
    .then(res => res.rows);

}

const allQuests = function () {
  const queryStr = `
    SELECT * 
    FROM quests
  `

  return db.query(queryStr, [])
    .then(res => res.rows);
}

const getQuest = function (questId) {
  const queryStr = `
    SELECT * 
    FROM quests 
    WHERE id = $1
  `
  return db.query(queryStr, [questId])
    .then(res => res.rows);
}

const createNewQuest = function (name, description, completed, latitude, longitude, class_id) {
  const queryStr = `
  INSERT INTO quests (name, description, completed, latitude, longitude, class_id)
  VALUES
    ($1, $2, $3, $4, $5, $6)
  `
  return db.query(queryStr, [name, description, completed, latitude, longitude, class_id]).then()
}

const deleteQuest = function (questId) {
  const queryStr = `
  DELETE FROM quests
  WHERE id = $1 
  `
  return db.query(queryStr, [questId]).then()
}

const editQuest = function (questId, name, description, completed, latitude, longitude, class_id) {
  const queryStr = `
  
  `
}

const completeQuest = function (questId) {
  const queryStr = `
  UPDATE quests
  SET completed = true
  WHERE id = $1
  `


  return db.query(queryStr, [questId]).then()
}

const allAchievements = function () {
  const queryStr = `
  SELECT * 
  FROM achievements
  `
  return db.query(queryStr, [])
    .then(res => res.rows);
}

const getAchievement = function (achievementId) {
  const queryStr = `
  SELECT * 
  FROM achievements
  WHERE id = $1
  `
  return db.query(queryStr, [achievementId])
    .then(res => res.rows);
}

const allBadges = function () {
  const queryStr = `
  SELECT * 
  FROM badges
  `
  return db.query(queryStr, [])
    .then(res => res.rows);
}

const getBadge = function (badgeId) {
  const queryStr = `
  SELECT * 
  FROM badges 
  WHERE id = $1
  `
  return db.query(queryStr, [badgeId])
    .then(res => res.rows);
}

const allClasses = function () {
  const queryStr = `
  SELECT * 
  FROM classes
  `

  return db.query(queryStr, [])
    .then(res => res.rows)
}

const getClass = function (classId) {
  const queryStr = `
  SELECT * 
  FROM classes 
  WHERE id = $1
  `
  return db.query(queryStr, [classId])
    .then(res => res.rows)
}

const acceptQuest = function (questId, userId) {
  const queryStr = `
  UPDATE quests
  SET adventurer_id = $1
  WHERE id = $2
  `
  return db.query(queryStr, [userId, questId]).then()

}

const getUserBadges = function (userId) {
  const queryStr = `
  SELECT * 
  FROM users 
  JOIN assigned_badges on assigned_badges.adventurer_id = id 
  JOIN badges on badges.id = assigned_badges.badge_id 
  WHERE users.id = $1;
  `

  return db.query(queryStr, [userId])
    .then(res => res.rows);
}

const getUserAchievements = function (userId) {
  const queryStr = `
  SELECT *
  FROM users
  JOIN unlocked_achievements on unlocked_achievements.adventurer_id = id
  JOIN achievements on achievements.id = unlocked_achievements.achievement_id
  WHERE users.id = $1;
  `

  return db.query(queryStr, [userId])
    .then(res => res.rows);
}

const getBadgesByClass = function (classId) {
  const queryStr = `
    SELECT *
    FROM badges
    WHERE class_id = $1;
  `;

  return db.query(queryStr, [class_id])
    .then(res => res.rows);
}

const getQuestsByUser = function (userId) {
  const queryStr = `
    SELECT * 
    FROM quests
    WHERE adventurer_id = $1;
  `
  return db.query(queryStr, [userId])
    .then(res => res.rows);
}

const increaseClassLevel = function (userId, classId, amount) {
  const queryStr = `
  UPDATE class_progress
  SET quest_count = quest_count + $1
  WHERE adventurer_id = $2 AND class_id = $3
  `
  return db.query(queryStr, [amount, userId, classId])
    .then();
}

const setExperiencePoints = function (userId, classId, amount) {
  const queryStr = `
  UPDATE class_progress
  SET experience_points = $1
  WHERE adventurer_id = $2 AND class_id = $3
  `
  return db.query(queryStr, [amount, userId, classId])
    .then()

}

const increaseQuestCount = function (userId, classId, amount) {
  const queryStr = `
  UPDATE class_progress
  SET quest_count = quest_count + $1
  WHERE adventurer_id = $2 AND class_id = $3
  `

  return db.query(queryStr, [amount, userId, classId])
    .then();
}

module.exports = {
  correctPassword,
  checkIfUserExists,
  addUser,
  allUsers,
  getUser,
  allQuests,
  getQuest,
  createNewQuest,
  deleteQuest,
  editQuest,
  completeQuest,
  allAchievements,
  getAchievement,
  allBadges,
  getBadge,
  allClasses,
  getClass,
  acceptQuest,
  getUserBadges,
  getUserAchievements,
  getBadgesByClass,
  getQuestsByUser,
  increaseClassLevel,
  setExperiencePoints,
  increaseQuestCount
}