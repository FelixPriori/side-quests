const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const { dropQuest, createNewQuest, acceptQuest, completeQuest, deleteQuest, editQuest, getQuestsByVillager, allQuests, getQuest, getQuestsByAdventurer } = require('../db/helpers');


module.exports = () => {

  router.post("/quests/new", (req, res) => {
    const { questType, name, description } = req.body;
    const createError = "All fields must be filled out"
    if (!questType || !name || !description) {
      res.status(401).send(createError);
    } else {
      createNewQuest(name, description, false, 0, 0, questType, req.session.userId)
        .then(() => {
          res.send()
        });
    }
  });

  router.post("/quests/:id/acceptQuest", (req, res) => {
    acceptQuest(req.params.id, req.session.userId)
      .then(() => {
        res.send();
      });
  });

  router.post("/quests/:id/drop", (req, res) => {
    dropQuest(req.params.id).then(() => res.send());
  });

  router.post("/quests/:id/completeQuest/:classId", (req, res) => {

    completeQuest(req.params.id, req.body.adventurerId, req.params.classId).then(() => {
      res.send();
    });
  });

  router.delete("/quests/:id/delete", (req, res) => {

    deleteQuest(req.params.id).then(() => {
      res.send();
    });
  });

  router.put("/quests/:id/edit", (req, res) => {
    editQuest(req.params.id).then(result => {
      res.send(result);
    });
  });

  router.get("/quests", (req, res) => {
    allQuests().then(result => {
      res.send(result);
    })
  });

  router.get("/quests/:id", (req, res) => {
    getQuest(req.params.id).then(result => {
      res.send(result);
    });
  });


  router.get("/users/:villagerId/quests", (req, res) => {
    getQuestsByVillager(req.params.villagerId).then(result => {
      res.send(result);
    });
  });


  router.get("/users/adventurer/:adventurerId/quests", (req, res) => {
    getQuestsByAdventurer(req.params.adventurerId).then(result => {
      res.send(result);
    });
  });


  return router;
}