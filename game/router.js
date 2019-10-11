const { Router } = require('express')
const Game = require('./model')
const Sse = require('json-sse')
const router = new Router()

const stream = new Sse()
// console.log('stream', stream)

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
  .then(currentBoard => {
    console.log("currentMove", currentBoard)
    res.json(currentBoard)
    return Game.findAll()
  })
  .then(game => {
    console.log('game', game)
    const data = JSON.stringify(game)
    console.log("content in this game is:", data)
    stream.send(data)
  })
  .catch(next)
})

router.put('/game', (req, res, next) => {
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
  .update(game)
  .then(currentBoard => {
    console.log("currentMove", currentBoard)
    res.json(currentBoard)
    return Game.findAll()
  })
  .then(game => {
    console.log('game', game)
    const data = JSON.stringify(game)
    console.log("content in this game is:", data)
    stream.send(data)
  })
  .catch(next)
})

router.get('/stream', async (req, res) => {
  console.log('got a request for a stream')
  const game = await Game.findAll()
  const data = JSON.stringify(game)
  console.log('content in this game is:', data)
  stream.updateInit(data)
  stream.init(req, res)
})

module.exports = router;