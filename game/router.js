const { Router } = require('express')
const Game = require('./model')
const router = new Router()

router.post('/game', (req, res, next) => {
  const game = {
    current: req.body.current
  }
  
  Game
  .create(game)
  .then(currentMove => res.json(currentMove))
  .catch(next)
})

module.exports = router;