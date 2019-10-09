const Sequelize = require('sequelize')
const sequelize = require('../db')

const Game = sequelize.define('game', {
  gameId: {
    type: Sequelize.INTEGER
  },
  A1: { type: Sequelize.STRING },
  A2: { type: Sequelize.STRING },
  A3: { type: Sequelize.STRING },
  B1: { type: Sequelize.STRING },
  B2: { type: Sequelize.STRING },
  B3: { type: Sequelize.STRING },
  C1: { type: Sequelize.STRING },
  C2: { type: Sequelize.STRING },
  C3: { type: Sequelize.STRING },
}, 
{
  timestamps: false,
  tableName: 'gameBoard'
})

module.exports = Game 