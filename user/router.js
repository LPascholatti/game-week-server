const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')
const router = new Router()

router.post('/user', (req, res, next) => {
  console.log('req.body.password/email', req.body.email, req.body.password, req.body.username)
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    username: req.body.username,
    userId: req.body.userId
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

router.get('/user/:id', (req, res, next) => {
 User
 .findByPk(req.params.id)
 .then(user => res.status(200).json(user))
 .catch(next)
})

module.exports = router;