'use strict'

const store = require('./../store.js')

const createGameSuccess = function (createGameResponse) {
  store.game = createGameResponse.game
  store.currentPlayer = 'X'
  store.cells = ['', '', '', '', '', '', '', '', '']
  $('.auth-message').html('New game successfully created!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
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
  console.log('This is updateGameSuccess ', updateGameSuccess)
  // store.user = updateGameResponse.data
}

module.exports = {
  createGameSuccess,
  failure,
  getGamesSuccess,
  updateGameSuccess
}
