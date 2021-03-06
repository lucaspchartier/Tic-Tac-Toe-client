'use strict'

const store = require('./../store.js')
const logic = require('./logic.js')

const createGameSuccess = createGameResponse => {
  store.game = createGameResponse.game
  store.player = 'X'
  $('.auth-message').html('New game successfully created!')
  $('.game-message').html(`${store.player}'s turn`).show()
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('.box').empty()
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const failure = () => {
  $('.auth-message').html('Error: Something went wrong.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const getGamesSuccess = getGamesResponse => {
  store.data = getGamesResponse.data
  $('.game-message').html(getGamesResponse.games.length + ' games played.')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const updateGameSuccess = (updateGameResponse, event, id, player, over) => {
  store.game.cells = updateGameResponse.game.cells
  if (store.player === 'X' && store.game.over === false) {
    $(event.target).html('X')
  } else if (store.player === 'O' && store.game.over === false) {
    $(event.target).html('O')
  }
  logic.switchPlayer(store.player)
  logic.gameOver(store.game.cells)
}

module.exports = {
  createGameSuccess,
  failure,
  getGamesSuccess,
  updateGameSuccess
}
