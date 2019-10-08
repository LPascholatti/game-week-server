const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors = require('cors')
const corsMiddleware = cors()
const userRouter = require('./user/router')
const authRouter = require('./auth/router')
const Sse = require('json-sse')

const stream = new Sse()
console.log('stream', stream)

app.use(corsMiddleware)
app.use(jsonParser)
app.use(authRouter)
app.use(userRouter)

app.get('/stream', async (req, res) => {
  console.log('got a request for a stream')
  const room = await User.findAll()
  const data = JSON.stringify(room)
  console.log("messages in this room are:", data)

  stream.updateInit(data)
  stream.init(req, res)
})

function onListen() {
  console.log(`Server running on port ${port}`)
}

app.listen(port, onListen)