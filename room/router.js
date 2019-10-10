const { Router } = require('express')
const Room = require('./model')
const auth = require('../auth/middleware')
const router = new Router()

router.post('/room', auth, (req, res, next) => {
  const room = {
    gameId: req.body.gameId,
    playerOneId: req.body.playerOneId,
    playerTwoId: req.body.playerTwoId
  }
  
  Room
  .create(room)
  .then(newRoom => res.json(newRoom))
  // .then(newBoard => {
  //   console.log("maybe is", newBoard)
  //   Game.create({gameId: newBoard})
  // })
  .catch(next)
})

module.exports = router;