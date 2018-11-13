'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = function () {
  event.preventDefault()
  console.log('It works!')
  $('.box').text('')
}

const onCreateGame = function () {
  console.log('It works!')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

const onUpdateGame = function () {
  $(event.target).trigger('reset')
  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.failure)
}

module.exports = {
  onNewGame,
  onCreateGame,
  onUpdateGame
}
