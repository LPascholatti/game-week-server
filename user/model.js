const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  email: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'users'
})

module.exports = User

// userId: {
//   type: Sequelize.INTEGER,
//   allowNull: false,
//   unique: true
// },