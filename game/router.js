const { Router } = require('express')
const Game = require('./model')
const router = new Router()

router.post('/game', (req, res, next) => {
  console.log("req from post  /game ", req.body)
  console.log("req body array", req.body.array[1])
  const game = {
    A1: req.body.array[0],
    A2: req.body.array[1],
    A3: req.body.array[2],
    B1: req.body.array[3],
    B2: req.body.array[4],
    B3: req.body.array[5],
    C1: req.body.array[6],
    C2: req.body.array[7],
    C3: req.body.array[8],
    gameId: req.body.gameId
  }
  
  Game
  .create(game)
  .then(currentMove => res.json(currentMove))
  .catch(next)
})

module.exports = router;