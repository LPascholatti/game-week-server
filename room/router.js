const { Router } = require('express')
const Room = require('./model')
const router = new Router()

router.post('/room', (req, res, next) => {
  const room = {
    gameId: req.body.gameId,
    playerOneId: req.body.playerOneId,
    playerTwoId: req.body.playerTwoId
  }
  
  Room
  .create(room)
  .then(newRoom => res.json(newRoom))
  .catch(next)
})

module.exports = router;