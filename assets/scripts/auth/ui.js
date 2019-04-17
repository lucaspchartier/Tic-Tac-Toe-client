'use strict'

const store = require('./../store.js')

const signUpSuccess = function (signUpResponse) {
  $('.auth-message').html('Signed up successfully!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('.sign-up-form').slideUp(500)
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

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('.auth-message').html('Logged in successfully!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('.sign-up-form').slideUp(500)
  $('.sign-in-form').slideUp(500)
  $('#change-password-btn').show()
  $('#sign-out-btn').show()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('.game-container').removeClass('hidden')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 2000)
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.auth-message').html('Password change successful!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('#change-password-form').slideUp(500)
  setTimeout(function () {
    $('.auth-message').empty()
  }, 2000)
}

const signOutSuccess = function (signOutResponse) {
  store.over = true
  $('#game-message').html('Logged out successfully!')
  $('#game-message').removeClass('error-message')
  $('#game-message').addClass('success-message')
  $('#change-password-btn').hide()
  $('#change-password-form').slideUp(500)
  $('#sign-out-btn').hide()
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('.game-container').fadeOut(500)
  $('#change-password-form').trigger('reset')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 2000)
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
