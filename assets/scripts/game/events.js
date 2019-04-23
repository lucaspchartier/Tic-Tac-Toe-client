'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
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
  const id = $(event.target).data('cell-index')
  const player = store.player
  const over = store.game.over
  api.updateGame(id, player, over)
    .then(updateGameResponse => ui.updateGameSuccess(updateGameResponse, event, id, player, over))
    .catch(ui.failure)
  logic.gameBoard(id, store.player, store.game.over)
}

module.exports = {
  onCreateGame,
  onGetGames,
  onUpdateGame
}
