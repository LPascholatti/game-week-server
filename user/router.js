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

module.exports = router;