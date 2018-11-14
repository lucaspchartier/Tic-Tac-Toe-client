'use strict'

const store = require('./../store.js')

const createGameSuccess = function (createGameResponse) {
  $('.auth-message').html('New game successfully created!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
}

const failure = function (failureResponse) {
  $('.auth-message').html('Error: Something went wrong.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
}

const gameIndexSuccess = function (gameIndexResponse) {
  store.data = gameIndexResponse.data
  $('.auth-message').html(gameIndexResponse.games.length + ' games played.')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
}

module.exports = {
  createGameSuccess,
  failure,
  gameIndexSuccess
}
