const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

// router.use(cookieSession({
//   name: 'session',
//   keys: ['hummus', 'pen', 'working'],
//   maxAge: 24 * 60 * 60 * 1000
// }));


const { allUsers, getUser, allQuests, getQuest } = require('../db/helpers');

module.exports = () => {

  router.get("/users", (req, res) => {
    allUsers(req.params.userid).then(result => {
      res.send(result);
    });
  });

  router.get("/users/:id", (req, res) => {
    getUser(req.params.userid).then(result => {
      res.send(result);
    });
  })

  router.get("/quests", (req, res) => {
    allQuests(req.params.postId).then(result => {
      res.send(result);
    })
  });

  router.get("/quests/:id", (req, res) => {
    getQuest(req.params.userId).then(result => {
      res.send(result);
    })
  });

  router.post("/quests/:id/new", (req, res) => {
    createNewQuest(req.params.postId).then(result => res.send(result));
  });

  router.delete("/quests/:id/delete", (req, res) => {

    deleteQuest(req.params.postId, req.params.ratingNumber).then(result => {
      res.send(result);
    }
    );
  });

  router.put("/quests/:id/edit", (req, res) => {
    editQuest(req.params.postId).then(result => {
      res.send(result);
    });

  });

  router.get("/achievements", (req, res) => {
    allAchievements(req.session.userId.id, req.params.postId).then(result => {
      res.send(result);

    });
  });

  router.get("/achievements/:id", (req, res) => {

    getAchievement(req.params.commentContent, req.session.userId.id, req.params.postId).then(result => {
      res.send(result);
    });
  });

  router.get("/badges", (req, res) => {

    allBadges(req.params.commentContent, req.session.userId.id, req.params.postId).then(result => {
      res.send(result);
    });
  });

  router.get("/badges/:id", (req, res) => {

    getBadge(req.params.commentContent, req.session.userId.id, req.params.postId).then(result => {
      res.send(result);
    });
  });

  router.get("/classes", (req, res) => {

    allClasses(req.params.commentContent, req.session.userId.id, req.params.postId).then(result => {
      res.send(result);
    });
  });

  router.get("/classes/:id", (req, res) => {

    getClass(req.params.commentContent, req.session.userId.id, req.params.postId).then(result => {
      res.send(result);
    });
  });


  return router;
}