'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')

// document on ready
$(() => {
  // JS ajax code
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-button').on('click', events.onSignOut)
})

$(() => {
  // JS game code
  $('#0').on('click', function (event) {
    $(event.target).text()
  })
  $('#1').on('click', function (event) {
    $(event.target).text()
  })
  $('#2').on('click', function (event) {
    $(event.target).text()
  })
  $('#3').on('click', function (event) {
    $(event.target).text()
  })
  $('#4').on('click', function (event) {
    $(event.target).text()
  })
  $('#5').on('click', function (event) {
    $(event.target).text()
  })
  $('#6').on('click', function (event) {
    $(event.target).text()
  })
  $('#7').on('click', function (event) {
    $(event.target).text()
  })
  $('#8').on('click', function (event) {
    $(event.target).text()
  })
})
