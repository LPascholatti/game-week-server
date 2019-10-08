const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')
const router = new Router()

router.post('/user', (req, res, next) => {
  console.log('req.body.password/email', req.body.email, req.body.password, req.body.username)
  const user = {
    email: bcrypt.hashSync(req.body.email, 10),
    password: bcrypt.hashSync(req.body.password, 10),
    username: req.body.username
  }

  User
    .create(user)
    .then(newUser => res.json(newUser))
    .catch(next)
})

router.get('/user', (req, res, next) => {
  User
  .findAll()
  .then(user => res.json(user))
  .catch(next)
})

router.get('/', (request, response )=>{
  console.log("got an get request on /")
  response.status(200)
  response.send("hello world")
})

module.exports = router;