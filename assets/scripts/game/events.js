'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const index = event.target.id // if elements have id = 0
  // console.log('store.currentPlayer is ', store.currentPlayer)
  // console.log('store.over is ', store.over)
  api.updateGame(index, store.currentPlayer, store.over)
    .then(ui.updateGameSuccess)
    .catch(ui.failure)
}

const onGetGame = function () {
  event.preventDefault()
  api.getGame()
    .then(ui.getGameSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  onGetGame
}
