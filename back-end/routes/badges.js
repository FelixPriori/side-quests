const express = require("express");
const router = express.Router();

const { allBadges, getBadge } = require("../db/helpers");

module.exports = () => {
  router.get("/badges", (req, res) => {
    allBadges().then((result) => {
      res.send(result);
    });
  });

  router.get("/badges/:id", (req, res) => {
    getBadge(req.params.id).then((result) => {
      res.send(result);
    });
  });

  return router;
};
