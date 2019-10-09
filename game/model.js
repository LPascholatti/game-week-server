const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game = sequelize.define('game', {
  current: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
}, {
  timestamps: false,
  tableName: 'gameMoves'
})

module.exports = Game