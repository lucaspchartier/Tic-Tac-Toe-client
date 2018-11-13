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
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // Game events
  $('#create-game-button').on('click', gameEvents.onCreateGame)
  $('#get-game-button').on('click', gameEvents.onGetGame)
})

// Game logic
$(() => {
  // Cells
  const cells = ['', '', '', '', '', '', '', '', '']

  // Player
  let currentPlayer = 'X'

  // Switching between 'X' and 'O'
  const switchPlayer = function () {
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  }
  // Gameplay code
  $('#0').on('click', function (event) {
    $(event.target).text(currentPlayer)
    cells[0] = currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
  })
  $('#1').on('click', function (event) {
    $(event.target).text(currentPlayer)
    cells[1] = currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
  })
  $('#2').on('click', function (event) {
    $(event.target).text(currentPlayer)
    cells[2] = currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
  })
  $('#3').on('click', function (event) {
    $(event.target).text(currentPlayer)
    cells[3] = currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
  })
  $('#4').on('click', function (event) {
    $(event.target).text(currentPlayer)
    cells[4] = currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
  })
  $('#5').on('click', function (event) {
    $(event.target).text(currentPlayer)
    cells[5] = currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
  })
  $('#6').on('click', function (event) {
    $(event.target).text(currentPlayer)
    cells[6] = currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
  })
  $('#7').on('click', function (event) {
    $(event.target).text(currentPlayer)
    cells[7] = currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
  })
  $('#8').on('click', function (event) {
    $(event.target).text(currentPlayer)
    cells[8] = currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
  })

  // Check if X wins
  const checkForXWin = function () {
    // Horizontal win
    if (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') {
      $('#message').html('X WINS!')
    } else if (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') {
      $('#message').html('X WINS!')
    } else if (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') {
      $('#message').html('X WINS!')
    // Vertical win
    } else if (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') {
      $('#message').html('X WINS!')
    } else if (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') {
      $('#message').html('X WINS!')
    } else if (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') {
      $('#message').html('X WINS!')
    // Diagonal win
    } else if (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') {
      $('#message').html('X WINS!')
    } else if (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') {
      $('#message').html('X WINS!')
    } else {
      // Display draw after all moves are taken
    }
  }

  // Check if O wins
  const checkForOWin = function () {
    // Horizontal win
    if (cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') {
      $('#message').html('O WINS!')
    } else if (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') {
      $('#message').html('O WINS!')
    } else if (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') {
      $('#message').html('O WINS!')
    // Vertical win
    } else if (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') {
      $('#message').html('O WINS!')
    } else if (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') {
      $('#message').html('O WINS!')
    } else if (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') {
      $('#message').html('O WINS!')
    // Diagonal win
    } else if (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') {
      $('#message').html('O WINS!')
    } else if (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O') {
      $('#message').html('O WINS!')
    } else {
      // Display draw after all moves are taken
    }
  }
})
