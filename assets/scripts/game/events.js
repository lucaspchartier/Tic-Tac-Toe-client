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
  const data = $(event.target).data().cellIndex
  const player = store.player
  const over = store.game.over
  api.updateGame(data, player)
    .then(ui.updateGameSuccess)
    .catch(ui.failure)
  logic.gameBoard(data, player, over)
  logic.switchPlayer(player)
  logic.gameOver(store.game.cells)
}

module.exports = {
  onCreateGame,
  onGetGames,
  onUpdateGame
}
