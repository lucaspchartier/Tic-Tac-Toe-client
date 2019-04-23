'use strict'

const store = require('./../store.js')
const logic = require('./logic.js')

const createGameSuccess = function (createGameResponse) {
  store.game = createGameResponse.game
  store.player = 'X'
  $('.auth-message').html('New game successfully created!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('.box').empty()
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const failure = function (failureResponse) {
  $('.auth-message').html('Error: Something went wrong.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const getGamesSuccess = function (getGamesResponse) {
  store.data = getGamesResponse.data
  $('.auth-message').html(getGamesResponse.games.length + ' games played.')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const updateGameSuccess = function (updateGameResponse, event, id, player, over) {
  store.game.cells = updateGameResponse.game.cells
  console.log('This is store.game.cells ', store.game.cells)
  console.log('This is store.game.cells[id] ', store.game.cells[id])
  if (store.player === 'X' && store.game.over === false) {
    $(event.target).html('X')
  } else if (store.player === 'O' && store.game.over === false) {
    $(event.target).html('O')
  }
  logic.switchPlayer(store.player)
  logic.gameOver(store.game.cells)
  console.log('This is store.player ', store.player)
}

module.exports = {
  createGameSuccess,
  failure,
  getGamesSuccess,
  updateGameSuccess
}
