'use strict'

const store = require('./../store.js')

const signUpSuccess = function (signUpResponse) {
  $('.auth-message').html('Sign up successful!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
}

const failure = function (failureResponse) {
  $('.auth-message').html('Error: Something went wrong.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('.auth-message').html('Login successful!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('.grid').removeClass('hidden')
  $('#new-game-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#create-game-button').removeClass('hidden')
  $('#get-game-button').removeClass('hidden')
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.auth-message').html('Password change successful!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
}

const signOutSuccess = function (signOutResponse) {
  $('.auth-message').html('Logout successful!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('.grid').addClass('hidden')
  $('#new-game-button').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#create-game-button').addClass('hidden')
  $('#get-game-button').addClass('hidden')
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
