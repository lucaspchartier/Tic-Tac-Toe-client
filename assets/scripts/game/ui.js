'use strict'

const store = require('./../store.js')

const createGameSuccess = function (createGameResponse) {
  $('#message').html('New game successfully created!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = function (failureResponse) {
  $('#message').html('Error: Something went wrong.')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
}

module.exports = {
  createGameSuccess,
  failure
}
