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
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('.grid').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
