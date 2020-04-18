const express = require('express');
const router = express.Router();

const { allClasses, getClass, getBadgesByClass } = require('../db/helpers');


module.exports = () => {

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

  router.get("/classes/:id/badges", (req, res) => {
    getBadgesByClass(req.params.id).then(result => {
      res.send(result);
    });
  })

  return router;
}