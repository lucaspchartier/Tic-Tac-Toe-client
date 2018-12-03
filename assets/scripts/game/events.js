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

const onUpdateGame = function (index) {
  // updates API
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
