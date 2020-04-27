const express = require('express');
const router = express.Router();
const { getUserNotifications, viewNotification } = require('../db/helpers');

module.exports = () => {

  router.get('/notifications/user/:userId', (req, res) => {
    getUserNotifications(req.params.userId).then(response => {
      res.json(response);
    })
  });

  router.put('/notifications/:id', (req, res) => {
    viewNotification(req.params.id).then(response => response.send());
  });
  
  return router;
}