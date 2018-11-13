'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

// document on ready
$(() => {
  // auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // game events
  $('#new-game-button').on('click', gameEvents.onNewGame)
})

// game cells
const cells = ['0', '1', '2', '3', '4', '5', '6', '7', '8']

// players
let currentPlayer = 'X'

// switching between 'X' and 'O'
const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

// const newTurn = function (switchPlayer) {
//
// }

// number of games played
// const gamesPlayed = []
// playerOne always goes first

// const checkForWinner = function () {
//  if ()
// }

$(() => {
  // JS game code
  $('#0').on('click', function (event) {
    $(event.target).text(currentPlayer)
    switchPlayer()
  })
  $('#1').on('click', function (event) {
    $(event.target).text(currentPlayer)
    switchPlayer()
  })
  $('#2').on('click', function (event) {
    $(event.target).text(currentPlayer)
    switchPlayer()
  })
  $('#3').on('click', function (event) {
    $(event.target).text(currentPlayer)
    switchPlayer()
  })
  $('#4').on('click', function (event) {
    $(event.target).text(currentPlayer)
    switchPlayer()
  })
  $('#5').on('click', function (event) {
    $(event.target).text(currentPlayer)
    switchPlayer()
  })
  $('#6').on('click', function (event) {
    $(event.target).text(currentPlayer)
    switchPlayer()
  })
  $('#7').on('click', function (event) {
    $(event.target).text(currentPlayer)
    switchPlayer()
  })
  $('#8').on('click', function (event) {
    $(event.target).text(currentPlayer)
    switchPlayer()
  })
})
