const db = require("./index");
const bcrypt = require("bcrypt");

const correctPassword = function (email, password) {
  const queryStr = `
    SELECT *
    FROM users
    WHERE email = $1;
  `;
  return db.query(queryStr, [email]).then((res) => {
    if (res.rows.length !== 0) {
      if (bcrypt.compareSync(password, res.rows[0].password))
        return res.rows[0];
    } else {
      return null;
    }
  });
};

const checkIfUserExists = function (email) {
  const queryStr = `
    SELECT password
    FROM users
    WHERE email = $1;
  `;
  return db.query(queryStr, [email]).then((res) => {
    if (res.rows.length === 0) {
      return false;
    } else {
      return true;
    }
  });
};

const getUserByUsername = function (username) {
  const queryStr = `
  SELECT * 
  FROM users
  WHERE username = $1
  `;
  return db.query(queryStr, [username]).then((res) => res.rows[0]);
};

const classProgressForNewUser = function (userId) {
  const queryStr = `
  INSERT INTO class_progress (class_id, adventurer_id, level, experience_points, quest_count)
  VALUES
  (1, $1, 0, 0, 0),
  (2, $1, 0, 0, 0),
  (3, $1, 0, 0, 0),
  (4, $1, 0, 0, 0),
  (5, $1, 0, 0, 0),
  (6, $1, 0, 0, 0),
  (7, $1, 0, 0, 0)
  `;
  return db.query(queryStr, [userId]).then();
};

const addUser = function (
  username,
  first_name,
  last_name,
  email,
  password,
  adventurer,
  avatar
) {
  const queryStr = `
    INSERT INTO users (username, first_name, last_name, email, password, avatar, adventurer, bio)
    VALUES
    (
      $1, $2, $3, $4, $5, $6, $7, $8
    );
  `;

  return db
    .query(queryStr, [
      username,
      first_name,
      last_name,
      email,
      password,
      avatar,
      adventurer,
      "Edit your profile to add a bio.",
    ])
    .then();
};

const allVillagers = function () {
  const queryStr = `
    SELECT *
    FROM users
    WHERE adventurer = $1
  `;
  return db.query(queryStr, [false]).then((res) => res.rows);
};

const allAdventurers = function () {
  const queryStr = `
    SELECT *
    FROM users
    WHERE adventurer = $1
  `;
  return db.query(queryStr, [true]).then((res) => res.rows);
};

//Functions for front page of app
const checkUserLogin = function (userId) {
  const queryStr = `
    SELECT * 
    FROM users
    WHERE users.id = $1
  `;
  return db.query(queryStr, [userId]).then((res) => res.rows);
};

const checkUserQuests = function (userId) {
  const queryStr = `
    SELECT * 
    FROM quests
    WHERE adventurer_id = $1
  `;
  return db.query(queryStr, [userId]).then((res) => res.rows);
};

const getAllUserClassProgress = function (userId) {
  const queryStr = `
    SELECT * 
    FROM class_progress
    WHERE adventurer_id = $1
  `;
  return db.query(queryStr, [userId]).then((res) => res.rows);
};

const allUsers = function () {
  const queryStr = `
    SELECT * FROM users;
  `;
  return db.query(queryStr, []).then((res) => res.rows);
};

const getUser = function (userId) {
  const queryStr = `
    SELECT * 
    FROM users
    WHERE id = $1;
  `;
  return db.query(queryStr, [userId]).then((res) => res.rows);
};

const allBadges = function () {
  const queryStr = `
    SELECT * 
    FROM badges;
  `;
  return db.query(queryStr, []).then((res) => res.rows);
};

const getBadge = function (badgeId) {
  const queryStr = `
    SELECT * 
    FROM badges 
    WHERE id = $1;
  `;
  return db.query(queryStr, [badgeId]).then((res) => res.rows);
};

const allClasses = function () {
  const queryStr = `
    SELECT * 
    FROM classes;
  `;

  return db.query(queryStr, []).then((res) => res.rows);
};

const getClass = function (classId) {
  const queryStr = `
    SELECT * 
    FROM classes 
    WHERE id = $1;
  `;
  return db.query(queryStr, [classId]).then((res) => res.rows);
};

const allQuests = function () {
  const queryStr = `
    SELECT * 
    FROM quests;
  `;

  return db.query(queryStr, []).then((res) => res.rows);
};

const getQuest = function (questId) {
  const queryStr = `
    SELECT * 
    FROM quests 
    WHERE id = $1;
  `;
  return db.query(queryStr, [questId]).then((res) => res.rows);
};

const createNewQuest = function (
  name,
  description,
  completed,
  city,
  class_id,
  villager_id
) {
  const queryStr = `
    INSERT INTO quests (name, description, completed, city, class_id, villager_id)
    VALUES ($1, $2, $3, $4, $5, $6);
  `;
  return db
    .query(queryStr, [
      name,
      description,
      completed,
      city,
      class_id,
      villager_id,
    ])
    .then();
};

const deleteQuest = function (questId) {
  const queryStr = `
    DELETE FROM quests
    WHERE id = $1;
  `;
  return db.query(queryStr, [questId]).then();
};

const dropQuest = function (questId) {
  const queryStr = `
  UPDATE quests
  SET adventurer_id = null
  WHERE id = $1;
  `;
  return db.query(queryStr, [questId]).then();
};

const editQuest = function (questId, name, description, completed, classId) {
  const queryStr = `
    UPDATE quests 
    SET name = $1, description = $2, completed = $3, class_id = $4
    WHERE quests.id = $5;
  `;
  return db
    .query(queryStr, [name, description, completed, classId, questId])
    .then();
};

const editProfile = function (
  username,
  firstName,
  lastName,
  email,
  password,
  avatar,
  adventurer,
  userId,
  bio
) {
  const queryStr = `
    UPDATE users
    SET username = $1, first_name = $2, last_name = $3, email = $4, password = $5, avatar = $6, adventurer = $7, bio = $8
    WHERE users.id = $9
  `;

  console.log("arguments: ", arguments);
  return db
    .query(queryStr, [
      username,
      firstName,
      lastName,
      email,
      password,
      avatar,
      adventurer,
      bio,
      userId,
    ])
    .then();
};

const getQuestsByVillager = function (villagerId) {
  const queryStr = `
    SELECT * 
    FROM quests
    WHERE villager_id = $1
  `;
  return db.query(queryStr, [villagerId]).then((res) => res.rows);
};

const increaseClassLevel = function (userId, classId, amount) {
  const queryStr = `
    UPDATE class_progress
    SET level = level + $1
    WHERE adventurer_id = $2 AND class_id = $3;
  `;

  return db.query(queryStr, [amount, userId, classId]).then();
};

const setExperiencePoints = function (userId, classId, amount) {
  console.log(arguments);
  const queryStr = `
    UPDATE class_progress
    SET experience_points = $1
    WHERE adventurer_id = $2 AND class_id = $3;
  `;
  return db.query(queryStr, [amount, userId, classId]).then();
};

const getClassProgress = function (userId, classId) {
  const queryStr = `
    SELECT * 
    FROM class_progress
    WHERE adventurer_id = $1 AND class_id = $2;
  `;
  return db.query(queryStr, [userId, classId]).then((res) => res.rows);
};

const getAllBadgesForClass = function (classId) {
  const queryStr = `
    SELECT * 
    FROM badges
    WHERE class_id = $1;
  `;
  return db.query(queryStr, [classId]).then((res) => res.rows);
};

const getUserBadgesByClass = function (userId, classId) {
  return getUserBadges(userId).then((userBadges) => {
    const classBadges = [];
    for (let i = 0; i < userBadges; i++) {
      if (userBadges[i].class_id === classId) {
        classBadges.push(userBadges[i]);
      }
    }
    return classBadges;
  });
};

const unassignedBadgesForClass = function (userId, classId) {
  return getAllBadgesForClass(classId).then((badges) => {
    return getUserBadgesByClass(userId, classId).then((userBadges) => {
      for (let i = 0; i < badges.length; i++) {
        for (let y = 0; y < userBadges.length; y++) {
          if ((badges[i].id = userBadges[y].badge_id)) {
            badges.splice(i, 1);
          }
        }
      }
      return badges;
    });
  });
};

const giveUserBadge = function (userId, badgeId) {
  const queryStr = `
  INSERT INTO assigned_badges (adventurer_id, badge_id)
  VALUES
  ($1, $2);
  `;
  return db.query(queryStr, [userId, badgeId]).then();
};

const badgeForQuestsCheck = function (userId, classId) {
  unassignedBadgesForClass(userId, classId).then((unassignedBadges) => {
    getClassProgress(userId, classId).then((classProgress) => {
      const questBadges = [];

      for (let i = 0; i < unassignedBadges.length; i++) {
        if (unassignedBadges[i].criteria_type === "quest") {
          questBadges.push(unassignedBadges[i]);
        }
      }
      for (let i = 0; i < questBadges; i++) {
        if (questBadges[i].int_requirement <= classProgress.quest_count) {
          //Award the badge!
          giveUserBadge(userId, questBadges[i].id).then();
        }
      }
    });
  });
};

const badgeForLevelsCheck = function (userId, classId) {
  unassignedBadgesForClass(userId, classId).then((unassignedBadges) => {
    getClassProgress(userId, classId).then((classProgress) => {
      const questBadges = [];
      for (let i = 0; i < unassignedBadges.length; i++) {
        if (unassignedBadges[i].criteria_type === "level") {
          questBadges.push(unassignedBadges[i]);
        }
      }
      for (let i = 0; i < questBadges; i++) {
        if (questBadges[i].int_requirement <= classProgress.level) {
          //Award the badge!
          giveUserBadge(userId, questBadges[i].id).then();
        }
      }
    });
  });
};

const badgeCheck = function (userId, classId) {
  //Check for badges requiring quests complete
  badgeForQuestsCheck(userId, classId);
  //Check for badges requiring levels
  badgeForLevelsCheck(userId, classId);
};

const levelUpCheck = function (userId, experiencePoints, classId) {
  //userId is the currently the villager and not the adventurer which it should be
  console.log(arguments);
  const queryStr = `
  SELECT *
  FROM class_progress
  WHERE adventurer_id = $1;
  `;
  return db.query(queryStr, [userId]).then((res) => {
    if (
      res.rows[0].experience_points + experiencePoints >=
      res.rows[0].level * 100
    ) {
      // uncomment if exp varies
      // const extraPoints =
      //   res.rows[0].experience_points
      //   + experiencePoints
      //   - res.rows[0].level * 100
      increaseClassLevel(userId, classId, 1).then(() => {
        setExperiencePoints(userId, classId, 0).then(() => {
          //CHECK FOR BADGES
          badgeCheck(userId, classId);
        });
      });
    } else {
      setExperiencePoints(userId, classId, experiencePoints).then(() => {
        //CHECK FOR BADGES
        badgeCheck(userId, classId);
      });
    }
  });
};

const completeQuest = function (questId, adventurerId, class_id) {
  const queryStr = `
  UPDATE quests
  SET completed = true
  WHERE id = $1;
  `;
  //increase quest count
  return db
    .query(queryStr, [questId])
    .then(() =>
      increaseQuestCount(adventurerId, class_id, 1).then(() =>
        levelUpCheck(adventurerId, 100, class_id)
      )
    );
};

const acceptQuest = function (questId, userId) {
  const queryStr = `
  UPDATE quests
  SET adventurer_id = $1
  WHERE id = $2;
  `;
  return db.query(queryStr, [userId, questId]).then();
};

const getUserBadges = function (userId) {
  const queryStr = `
  SELECT * 
  FROM users 
  JOIN assigned_badges on assigned_badges.adventurer_id = id 
  JOIN badges on badges.id = assigned_badges.badge_id 
  WHERE users.id = $1;
  `;
  return db.query(queryStr, [userId]).then((res) => res.rows);
};

const getBadgesByUser = function (userId) {
  const queryStr = `
    SELECT badges.* 
    FROM badges 
    JOIN assigned_badges on assigned_badges.badge_id = badges.id
    JOIN users on users.id = assigned_badges.adventurer_id
    WHERE users.id = $1;
  `;
  return db.query(queryStr, [userId]).then((res) => res.rows);
};

const getBadgesByClass = function (classId) {
  const queryStr = `
    SELECT *
    FROM badges
    WHERE class_id = $1;
  `;
  return db.query(queryStr, [classId]).then((res) => res.rows);
};

const getQuestsByAdventurer = function (userId) {
  const queryStr = `
    SELECT * 
    FROM quests
    WHERE adventurer_id = $1;
  `;
  return db.query(queryStr, [userId]).then((res) => res.rows);
};

const increaseQuestCount = function (userId, classId, amount) {
  const queryStr = `
  UPDATE class_progress
  SET quest_count = quest_count + $1
  WHERE adventurer_id = $2 AND class_id = $3;
  `;

  return db.query(queryStr, [amount, userId, classId]).then();
};

const getAllClassProgress = function () {
  const queryStr = `
  SELECT * 
  FROM class_progress;
  `;
  return db.query(queryStr, []).then();
};

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
  allBadges,
  getBadge,
  allClasses,
  getClass,
  acceptQuest,
  getBadgesByUser,
  getBadgesByClass,
  getQuestsByAdventurer,
  increaseClassLevel,
  setExperiencePoints,
  increaseQuestCount,
  checkUserLogin,
  checkUserQuests,
  getAllUserClassProgress,
  editProfile,
  allVillagers,
  allAdventurers,
  getQuestsByVillager,
  classProgressForNewUser,
  getUserByUsername,
  dropQuest,
  getAllClassProgress,
};
