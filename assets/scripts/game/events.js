'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = function () {
  event.preventDefault()
  $('.box').text('')
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onUpdateGame = function () {
  event.preventDefault()
  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.failure)
}

const onGetGame = function () {
  event.preventDefault()
  $('.box').text('')
  api.gameIndex()
    .then(ui.gameIndexSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  onGetGame
}
