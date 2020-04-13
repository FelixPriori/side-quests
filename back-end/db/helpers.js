const db = require('./index')
const bcrypt = require('bcrypt')

const correctPassword = function (email, password) {
  const queryStr = `
    SELECT password
    FROM users
    WHERE email = $1;
  `
  return db.query(queryStr, [email]).then(res => {
    if (res.rows.length !== 0) {
      return bcrypt.compareSync(password, res.rows[0].password)
    } else {
      return false
    }
  })
}

const checkIfUserExists = function (email) {
  const queryStr = `
    SELECT password
    FROM users
    WHERE email = $1;
  `
  return db.query(queryStr, [email]).then(res => {
    if (res.rows.length === 0) {
      return false
    } else {
      return true
    }
  })
}

const addUser = function (
  username,
  first_name,
  last_name,
  email,
  password,
  adventurer
) {
  const queryStr = `
  INSERT INTO users (username, first_name, last_name, email, password, avatar, adventurer)
  VALUES
  (
    $1, $2, $3, $4, $5, $6, $7
  );
  `
  const avatar = null;
  
  return db
    .query(queryStr, [
      username,
      first_name,
      last_name,
      email,
      password,
      avatar,
      adventurer
    ])
    .then()
}

const allUsers = function () {
  const queryStr = `
    SELECT * FROM users;
  `
  return db.query(queryStr, []).then(res => res.rows)
}

const getUser = function (userId) {
  const queryStr = `
    SELECT * 
    FROM users
    WHERE id = $1;
  `
  return db.query(queryStr, [userId]).then(res => res.rows)
}

const allAchievements = function () {
  const queryStr = `
  SELECT * 
  FROM achievements;
  `
  return db.query(queryStr, []).then(res => res.rows)
}

const getAchievement = function (achievementId) {
  const queryStr = `
  SELECT * 
  FROM achievements
  WHERE id = $1;
  `
  return db.query(queryStr, [achievementId]).then(res => res.rows)
}

const allBadges = function () {
  const queryStr = `
  SELECT * 
  FROM badges;
  `
  return db.query(queryStr, []).then(res => res.rows)
}

const getBadge = function (badgeId) {
  const queryStr = `
  SELECT * 
  FROM badges 
  WHERE id = $1;
  `
  return db.query(queryStr, [badgeId]).then(res => res.rows)
}

const allClasses = function () {
  const queryStr = `
  SELECT * 
  FROM classes;
  `

  return db.query(queryStr, []).then(res => res.rows)
}

const getClass = function (classId) {
  const queryStr = `
  SELECT * 
  FROM classes 
  WHERE id = $1;
  `
  return db.query(queryStr, [classId]).then(res => res.rows)
}

const allQuests = function () {
  const queryStr = `
    SELECT * 
    FROM quests;
  `

  return db.query(queryStr, []).then(res => res.rows)
}

const getQuest = function (questId) {
  const queryStr = `
    SELECT * 
    FROM quests 
    WHERE id = $1;
  `
  return db.query(queryStr, [questId]).then(res => res.rows)
}

const createNewQuest = function (
  name,
  description,
  completed,
  latitude,
  longitude,
  class_id
) {
  const queryStr = `
  INSERT INTO quests (name, description, completed, latitude, longitude, class_id)
  VALUES
    ($1, $2, $3, $4, $5, $6);
  `
  return db
    .query(queryStr, [
      name,
      description,
      completed,
      latitude,
      longitude,
      class_id
    ])
    .then()
}

const deleteQuest = function (questId) {
  const queryStr = `
  DELETE FROM quests
  WHERE id = $1;
  `
  return db.query(queryStr, [questId]).then()
}

const editQuest = function (
  questId,
  name,
  description,
  completed,
  latitude,
  longitude,
  class_id
) {
  const queryStr = `
  UPDATE quests 
  SET name = $1 AND description = $2 AND completed = $3 AND latitude = $4 AND longitude = $5 AND class_id = $6
  WHERE quests.id = $7;
  `
  return db
    .query(
      queryStr,
      description,
      completed,
      latitude,
      longitude,
      class_id[(name, questId)]
    )
    .then()
}

const increaseClassLevel = function (userId, classId, amount) {
  const queryStr = `
  UPDATE class_progress
  SET quest_count = quest_count + $1
  WHERE adventurer_id = $2 AND class_id = $3;
  `
  return db.query(queryStr, [amount, userId, classId]).then()
}

const setExperiencePoints = function (userId, classId, amount) {
  const queryStr = `
  UPDATE class_progress
  SET experience_points = $1
  WHERE adventurer_id = $2 AND class_id = $3;
  `
  return db.query(queryStr, [amount, userId, classId]).then()
}

const getClassProgress = function (userId, classId) {
  const queryStr = `
  SELECT * 
  FROM class_progress
  WHERE adventurer_id = $1 AND class_id = $2;
  `
  return db.query(queryStr, [userId, classId]).then(res => res.rows)
}

const getAllBadgesForClass = function (classId) {
  const queryStr = `
  SELECT * 
  FROM badges
  WHERE class_id = $1;
  `
  return db.query(queryStr, [classId]).then(res => res.rows)
}

const getUserBadgesByClass = function (userId, classId) {
  const classBadges = []

  getUserBadges(userId).then(userBadges => {
    for (let i = 0; i < userBadges; i++) {
      if (userBadges[i].class_id === classId) {
        classBadges.push(userBadges[i])
      }
    }
    return classBadges
  })
}

const unassignedBadgesForClass = function (userId, classId) {
  getAllBadgesForClass(classId).then(badges => {
    getUserBadgesByClass(userId, classId).then(userBadges => {
      for (let i = 0; i < badges.length; i++) {
        for (let y = 0; y < userBadges.length; y++) {
          if ((badges[i].id = userBadges[y].badge_id)) {
            badges.splice(i, 1)
          }
        }
      }
      return badges
    })
  })
}

const giveUserBadge = function (userId, badgeId) {
  const queryStr = `
  INSERT INTO assigned_badges (adventurer_id, badge_id)
  VALUES
  ($1, $2);
  `
  return db.query(queryStr, [userId, badgeId]).then()
}

const badgeForQuestsCheck = function (userId, classId) {
  unassignedBadgesForClass(userId, classId).then(unassignedBadges => {
    getClassProgress(userId, classId).then(classProgress => {
      const questBadges = []

      for (let i = 0; i < unassignedBadges.length; i++) {
        if (unassignedBadges[i].criteria_type === 'quest') {
          questBadges.push(unassignedBadges[i])
        }
      }
      for (let i = 0; i < questBadges; i++) {
        if (questBadges[i].int_requirement <= classProgress.quest_count) {
          //Award the badge!
          giveUserBadge(userId, questBadges[i].id).then()
        }
      }
    })
  })
}

const badgeForLevelsCheck = function (userId, classId) {
  unassignedBadgesForClass(userId, classId).then(unassignedBadges => {
    getClassProgress(userId, classId).then(classProgress => {
      const questBadges = []

      for (let i = 0; i < unassignedBadges.length; i++) {
        if (unassignedBadges[i].criteria_type === 'level') {
          questBadges.push(unassignedBadges[i])
        }
      }
      for (let i = 0; i < questBadges; i++) {
        if (questBadges[i].int_requirement <= classProgress.level) {
          //Award the badge!
          giveUserBadge(userId, questBadges[i].id).then()
        }
      }
    })
  })
}

const giveUserAchievement = function (userId, achievementId) {
  const queryStr = `
  INSERT INTO unlocked_achievements (adventurer_id, achievement_id)
  VALUES
  ($1, $2);
  `
  return db.query(queryStr, [userId, achievementId]).then()
}

const achievementAndBadgeCheck = function (userId, classId) {
  //Check for badges requiring quests complete
  badgeForQuestsCheck(userId, classId)
  //Check for badges requiring levels
  badgeForLevelsCheck(userId, classId)
  //IMPLEMENT CHECK FOR ACHIEVEMENTS
}

const levelUpCheck = function (userId, experiencePoints, classId) {
  const queryStr = `
  SELECT *
  FROM class_progress
  WHERE adventurer_id = $1;
  `
  return db.query(queryStr, [userId]).then(res => {
    if (
      res.rows[0].experience_points + experiencePoints >=
      res.rows[0].level * 100
    ) {
      const extraPoints =
        res.rows[0].experience_points +
        experiencePoints -
        res.rows[0].level * 100
      increaseClassLevel(userId, classId, 1).then(() => {
        setExperiencePoints(userId, classId, extraPoints).then(() => {
          //CHECK FOR BADGES AND ACHIEVEMENTS
          achievementAndBadgeCheck(userId, classId)
        })
      })
    } else {
      setExperiencePoints(userId, classId, experiencePoints).then(() => {
        //CHECK FOR BADGES AND ACHIEVEMENTS
        achievementAndBadgeCheck(userId, classId)
      })
    }
  })
}

const completeQuest = function (questId, userId, class_id) {
  const queryStr = `
  UPDATE quests
  SET completed = true
  WHERE id = $1;
  `

  return db
    .query(queryStr, [questId])
    .then(res => levelUpCheck(userId, 100, class_id))
}

const acceptQuest = function (questId, userId) {
  const queryStr = `
  UPDATE quests
  SET adventurer_id = $1
  WHERE id = $2;
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

  return db.query(queryStr, [userId]).then(res => res.rows)
}

const getUserAchievements = function (userId) {
  const queryStr = `
  SELECT *
  FROM users
  JOIN unlocked_achievements on unlocked_achievements.adventurer_id = id
  JOIN achievements on achievements.id = unlocked_achievements.achievement_id
  WHERE users.id = $1;
  `

  return db.query(queryStr, [userId]).then(res => res.rows)
}

const getBadgesByClass = function (classId) {
  const queryStr = `
    SELECT *
    FROM badges
    WHERE class_id = $1;
  `

  return db.query(queryStr, [class_id]).then(res => res.rows)
}

const getQuestsByUser = function (userId) {
  const queryStr = `
    SELECT * 
    FROM quests
    WHERE adventurer_id = $1;
  `
  return db.query(queryStr, [userId]).then(res => res.rows)
}

const increaseQuestCount = function (userId, classId, amount) {
  const queryStr = `
  UPDATE class_progress
  SET quest_count = quest_count + $1
  WHERE adventurer_id = $2 AND class_id = $3;
  `

  return db.query(queryStr, [amount, userId, classId]).then()
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
