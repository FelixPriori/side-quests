const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

// router.use(cookieSession({
//   name: 'session',
//   keys: ['hummus', 'pen', 'working'],
//   maxAge: 24 * 60 * 60 * 1000
// }));


const { myPosts, postComments, findUsernameBasedOnId, howManyPeopleLike, incrementLikes, decreaseLikes, addComment, rateTheHook, avgRatings } = require('../db/helpers');

module.exports = () => {

  router.get("/user/:userid/achievements", (req, res) => {
    myPosts(req.params.userid).then(result => {
      res.send(result);
    });
  });

  router.get("/user/:userid/newPost", (req, res) => {
    newPost(req.params.userid).then(result => {
      res.send(result);
    });
  })

  router.get("/user/:postId/comments", (req, res) => {
    postComments(req.params.postId).then(result => {
      res.send(result);
    })
  });

  router.get("/user/:userId", (req, res) => {
    findUsernameBasedOnId(req.params.userId).then(result => {
      res.send(result);
    })
  });

  router.get("/:postId/likes", (req, res) => {
    howManyPeopleLike(req.params.postId).then(result => res.send(result));
  });

  router.post("/posts/:postId/rating/:ratingNumber", (req, res) => {

    rateTheHook(req.params.postId, req.params.ratingNumber).then(result => {
      res.send(result);
    }
    );
  });

  router.get("/posts/:postId/rating", (req, res) => {
    avgRatings(req.params.postId).then(result => {
      res.send(result);
    });

  });



  router.post("/:postId/increaseLikes", (req, res) => {
    incrementLikes(req.session.userId.id, req.params.postId).then(result => {
      res.send(result);

    });
  });

  // router.post("/:postId/decreaseLikes", (req, res) => {
  //   decreaseLikes(req.session.userId.id, req.params.postId).then(result => {
  //     res.send(result);
  //     // getPostInfo(req.params.postId).then( postInfo => {
  //     // });
  //   });
  // });

  router.post("/user/:postId/comments/:commentContent", (req, res) => {
    console.log("content", req.params.commentContent);
    console.log("userid", req.session.userId.id);
    console.log("postId", req.params.postId);

    addComment(req.params.commentContent, req.session.userId.id, req.params.postId).then(result => {
      res.send(result);
    });
  });



  return router;
}