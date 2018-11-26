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

const updateGameSuccess = function (updateGameResponse) {
  store.user = updateGameResponse.data
  console.log(store.player)
}

const getGameSuccess = function (getGameResponse) {
  store.data = getGameResponse.data
  $('.auth-message').html(getGameResponse.games.length + ' games played.')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
}

module.exports = {
  createGameSuccess,
  failure,
  updateGameSuccess,
  getGameSuccess
}
