const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');



const { allVillagers, getAllUserClassProgress, checkUserQuests, allUsers, getUser, allQuests, getQuest, createNewQuest, deleteQuest, editQuest, completeQuest, allAchievements, getAchievement, allBadges, getBadge, allClasses, getClass, checkUserLogin } = require('../db/helpers');

module.exports = () => {

  router.get("/users", (req, res) => {
    allUsers().then(result => {
      res.json(result);
    });
  });

  //Information for front page

  router.get("/checkSession", (req, res) => {
    console.log(req.session);
    console.log(req.session.userId);
    if (req.session.userId) {
      checkUserLogin(req.session.userId).then(result => {
        res.json(result);
      });

    } else {
      const result = [];
      res.json(result);
    }
  });

  router.get("/villagers", (req, res) => {
    allVillagers().then(result => {
      res.json(result);
    })
  });

  router.get("/userQuests", (req, res) => {
    checkUserQuests(req.session.userId).then(result => {
      res.json(result);
    });
  });

  router.get("/userClassProgress", (req, res) => {
    getAllUserClassProgress(req.session.userId).then(result => {
      res.json(result);
    });
  });
  ////////////////////////////////

  router.get("/users/:id", (req, res) => {
    getUser(req.params.id).then(result => {
      res.send(result);
    });
  })

  router.get("/quests", (req, res) => {
    allQuests().then(result => {
      res.send(result);
    })
  });

  router.get("/quests/:id", (req, res) => {
    getQuest(req.params.id).then(result => {
      res.send(result);
    })
  });

  //Can't know the ID before it is created change this
  router.post("/quests/:id/new", (req, res) => {
    createNewQuest(req.params.id).then(result => res.send(result));
  });

  router.delete("/quests/:id/delete", (req, res) => {

    deleteQuest(req.params.id).then(result => {
      res.send(result);
    }
    );
  });

  router.put("/quests/:id/edit", (req, res) => {
    editQuest(req.params.id).then(result => {
      res.send(result);
    });

  });

  router.get("/achievements", (req, res) => {
    allAchievements().then(result => {
      res.send(result);

    });
  });

  router.get("/achievements/:id", (req, res) => {

    getAchievement(req.params.id).then(result => {
      res.send(result);
    });
  });

  router.get("/badges", (req, res) => {

    allBadges().then(result => {
      res.send(result);
    });
  });

  router.get("/badges/:id", (req, res) => {

    getBadge(req.params.id).then(result => {
      res.send(result);
    });
  });

  router.get("/classes", (req, res) => {

    allClasses().then(result => {
      res.send(result);
    });
  });

  router.get("/classes/:id", (req, res) => {

    getClass(req.params.id).then(result => {
      res.send(result);
    });
  });


  return router;
}