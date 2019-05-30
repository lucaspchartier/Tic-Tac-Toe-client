'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

// document on ready
$(() => {
  // Auth events
  authEvents.addHandlers()
  // Game events
  gameEvents.addHandlers()
  // Form toggles
  $('#sign-up-btn').click(function () {
    $('.sign-up-form').slideDown(300)
    $('.sign-in-form').slideUp(500)
  })
  $('#sign-in-btn').click(function () {
    $('.sign-in-form').slideDown(300)
    $('.sign-up-form').slideUp(500)
  })
  $('#change-password-btn').click(function () {
    $('.change-password-form').slideDown(500)
  })
})
