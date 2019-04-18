'use strict'

const store = require('./../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const logic = require('./logic.js')

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onGetGames = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.failure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.updateGame(event, store.currentPlayer, store.over)
    .then(ui.updateGameSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateGame,
  onGetGames,
  onUpdateGame
}
