const Sequelize = require('sequelize')
const sequelize = require('../db')

const Room = sequelize.define('room', {
  gameId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  playerOneId: {
    type: Sequelize.INTEGER
  },
  playerTwoId: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false,
  tableName: 'rooms'
})

module.exports = Room