'use strict'

const store = require('./../store.js')

const createGameSuccess = function (createGameResponse) {
  // Stores game in store object created by API
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

const updateGameSuccess = function (updateGameResponse) {
  // store.user = updateGameResponse.data
}

const getGameSuccess = function (getGameResponse) {
  store.data = getGameResponse.data
  $('.auth-message').html(getGameResponse.games.length + ' games played.')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 2000)
}

module.exports = {
  createGameSuccess,
  failure,
  updateGameSuccess,
  getGameSuccess
}
