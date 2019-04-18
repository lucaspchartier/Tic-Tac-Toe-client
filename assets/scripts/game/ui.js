'use strict'

const store = require('./../store.js')

const createGameSuccess = function (createGameResponse) {
  store.game = createGameResponse.game
  // store.games = createGameResponse
  // store.game = createGameResponse.game.id
  // store.game.cells = createGameResponse.game.cells
  store.player = 'X'
  $('.auth-message').html('New game successfully created!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('.box').empty()
  setTimeout(function () {
    $('.auth-message').empty()
  }, 2000)
}

const failure = function (failureResponse) {
  $('.auth-message').html('Error: Something went wrong.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 2000)
}

const getGamesSuccess = function (getGamesResponse) {
  store.data = getGamesResponse.data
  $('.auth-message').html(getGamesResponse.games.length + ' games played.')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 2000)
}

const updateGameSuccess = function (updateGameResponse) {
  console.log('This is updateGameResponse ', updateGameResponse)
  if (store.player === 'X' && store.game.over === false && store.game.cells === '') {
    $(event.target).html('X')
  } else if (store.player === 'O' && store.game.over === false && store.game.cells === '') {
    $(event.target).html('O')
  }
}

module.exports = {
  createGameSuccess,
  failure,
  getGamesSuccess,
  updateGameSuccess
}
