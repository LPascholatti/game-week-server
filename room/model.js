const Sequelize = require('sequelize')
const sequelize = require('../db')

const Room = sequelize.define('room', {
  gameId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  playerOneId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  playerTwoId: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'rooms'
})

module.exports = Room