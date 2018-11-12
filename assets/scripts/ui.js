'use strict'

const store = require('./store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').html('Sign up successful!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = function (failureResponse) {
  $('#message').html('Error: Something went wrong.')
  $('#message').addClass('error-message')
  $('#message').removeClass('success-message')
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#message').html('Login successful!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('.grid').removeClass('hidden')
  $('#new-game-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').html('Password change successful!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const signOutSuccess = function (signOutResponse) {
  $('#message').html('Logout successful!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const newGameSuccess = function (newGameResponse) {
  $('#message').html('New game successfully created!')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  newGameSuccess
}
