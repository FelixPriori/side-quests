const express = require('express');
const router = express.Router();

const { allUsers, checkUserLogin, checkUserQuests, getAllUserClassProgress, getUser, getBadgesByUser, allVillagers, allAdventurers } = require('../db/helpers');



module.exports = () => {

  router.get("/users", (req, res) => {
    allUsers().then(result => {
      res.json(result);
    });
  });

  router.get("/checkSession", (req, res) => {
    if (req.session.userId) {
      checkUserLogin(req.session.userId).then(result => {
        res.json(result);
      });

    } else {
      const result = [];
      res.json(result);
    }
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

  router.get("/users/:id", (req, res) => {
    getUser(req.params.id).then(result => {
      res.send(result);
    });
  })

  router.get("/users/:id/badges", (req, res) => {
    getBadgesByUser(req.params.id).then(result => {
      res.send(result);
    });
  });


  router.get("/villagers", (req, res) => {
    allVillagers().then(result => {
      res.json(result);
    })
  });

  router.get('/adventurers', (req, res) => {
    allAdventurers().then(result => {
      res.json(result);
    })
  });



  return router;
}