const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  score: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false,
  tableName: 'users'
})

module.exports = User