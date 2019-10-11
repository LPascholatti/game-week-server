const { Router } = require('express')
const Room = require('./model')
//const auth = require('../auth/middleware')
const router = new Router()
const Sse = require('json-sse')

router.post('/room',  (req, res, next) => {
  const room = {
    gameId: req.body.gameId,
    playerOneId: req.body.playerOneId,
    playerTwoId: req.body.playerTwoId
  }
  
  Room
  .create(room)
  .then(newRoom => {
    console.log('new room', newRoom)
    res.json(newRoom)
    return Room.findAll()
  })
  .then(room => {
    console.log('room', room)
    const data = JSON.stringify(room)
    console.log("content in this room are:", data)
    stream.send(data)
  })
  .catch(next)
})

const stream = new Sse()
// console.log('stream', stream)

router.get('/stream', async (req, res) => {
  console.log('got a request for a stream')
  const room = await Room.findAll()
  const data = JSON.stringify(room)
  console.log("content in this room are:", data)
  stream.updateInit(data)
  stream.init(req, res)
})


module.exports = router;