const express = require("express");
const Game = require("../models/game");
const router = express.Router();

router.get("/", (req, res) => {
  Game.find()
    .then(results => {
      console.log(results);
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const newObj = {
    player1: req.body.player1,
    p1Points: req.body.p1Points,
    player2: req.body.player2,
    p2Points: req.body.p2Points,
    year: req.body.year
  };

  return Game.create(newObj)
    .then(results => {
      res.location(`${req.originalUrl}/${results.id}`);
      res.status(201).json(results);
    })

    .catch(err => {
      console.error(`ERROR: ${err.message}`);
      console.error(err);
    });
});

module.exports = router;