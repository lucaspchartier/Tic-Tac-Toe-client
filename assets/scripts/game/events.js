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
  console.log('It works!')
  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.failure)
}

const onShowGame = function () {
  console.log('It works!')
  api.showGame()
    .then(ui.showGameSuccess)
    .catch(ui.failure)
}

const onGameIndex = function () {
  console.log('It works!')
  api.gameIndex()
    .then(ui.gameIndexSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  onShowGame,
  onGameIndex
}
