const Sequelize = require('sequelize')
const sequelize = require('../db')

const Room = sequelize.define('room', {
  roomId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  playerOneId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  playerTwoId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'rooms'
})

module.exports = Room