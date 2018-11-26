'use strict'

const store = require('./store.js')

// Game logic
$(() => {
  // Switching between 'X' and 'O'
  const switchPlayer = function () {
    if (store.currentPlayer === 'X') {
      store.currentPlayer = 'O'
    } else {
      store.currentPlayer = 'X'
    }
  }

  // Gameplay code
  $('#0').on('click', function (event) {
    $(event.target).text(store.currentPlayer)
    store.cells[0] = store.currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
    // checkForDraw()
  })
  $('#1').on('click', function (event) {
    $(event.target).text(store.currentPlayer)
    store.cells[1] = store.currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
    // checkForDraw()
  })
  $('#2').on('click', function (event) {
    $(event.target).text(store.currentPlayer)
    store.cells[2] = store.currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
    // checkForDraw()
  })
  $('#3').on('click', function (event) {
    $(event.target).text(store.currentPlayer)
    store.cells[3] = store.currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
    // checkForDraw()
  })
  $('#4').on('click', function (event) {
    $(event.target).text(store.currentPlayer)
    store.cells[4] = store.currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
    // checkForDraw()
  })
  $('#5').on('click', function (event) {
    $(event.target).text(store.currentPlayer)
    store.cells[5] = store.currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
    // checkForDraw()
  })
  $('#6').on('click', function (event) {
    $(event.target).text(store.currentPlayer)
    store.cells[6] = store.currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
    // checkForDraw()
  })
  $('#7').on('click', function (event) {
    $(event.target).text(store.currentPlayer)
    store.cells[7] = store.currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
    // checkForDraw()
  })
  $('#8').on('click', function (event) {
    $(event.target).text(store.currentPlayer)
    store.cells[8] = store.currentPlayer
    switchPlayer()
    checkForXWin()
    checkForOWin()
    // checkForDraw()
  })

  // Check if all store.cells are taken
  // const allCellsTaken = function () {
  // return true if store.cells are taken
  // return (store.cells[0] === 'X' || store.cells[0] === 'O') &&
  // (store.cells[1] === 'X' || store.cells[1] === 'O') &&
  // (store.cells[2] === 'X' || store.cells[2] === 'O') &&
  // (store.cells[3] === 'X' || store.cells[3] === 'O') &&
  // (store.cells[4] === 'X' || store.cells[4] === 'O') &&
  // (store.cells[5] === 'X' || store.cells[5] === 'O') &&
  // (store.cells[6] === 'X' || store.cells[6] === 'O') &&
  // (store.cells[7] === 'X' || store.cells[7] === 'O') &&
  // (store.cells[8] === 'X' || store.cells[8] === 'O')
  // }

  // console.log('Are all the cells taken?', allCellsTaken())

  // Check if X wins.
  const checkForXWin = function () {
    // Horizontal win
    if (store.cells[0] === 'X' && store.cells[1] === 'X' && store.cells[2] === 'X') {
      $('.game-message').html('X WINS!')
    } else if (store.cells[3] === 'X' && store.cells[4] === 'X' && store.cells[5] === 'X') {
      $('.game-message').html('X WINS!')
    } else if (store.cells[6] === 'X' && store.cells[7] === 'X' && store.cells[8] === 'X') {
      $('.game-message').html('X WINS!')
    // Vertical win
    } else if (store.cells[0] === 'X' && store.cells[3] === 'X' && store.cells[6] === 'X') {
      $('.game-message').html('X WINS!')
    } else if (store.cells[1] === 'X' && store.cells[4] === 'X' && store.cells[7] === 'X') {
      $('.game-message').html('X WINS!')
    } else if (store.cells[2] === 'X' && store.cells[5] === 'X' && store.cells[8] === 'X') {
      $('.game-message').html('X WINS!')
    // Diagonal win
    } else if (store.cells[0] === 'X' && store.cells[4] === 'X' && store.cells[8] === 'X') {
      $('.game-message').html('X WINS!')
    } else if (store.cells[2] === 'X' && store.cells[4] === 'X' && store.cells[6] === 'X') {
      $('.game-message').html('X WINS!')
    } else {
      // Display draw after all moves are taken
    }
  }

  // Check if X wins.
  // const checkForXWin = function () {
  // Horizonal win
  // if (store.cells[0] === 'X' && store.cells[1] === 'X' && store.cells[2] === 'X') {
  //  return true
  // } else if (store.cells[3] === 'X' && store.cells[4] === 'X' && store.cells[5] === 'X') {
  //  return true
  // } else if (store.cells[6] === 'X' && store.cells[7] === 'X' && store.cells[8] === 'X') {
  //  return true
  // Vertical win
  // } else if (store.cells[0] === 'X' && store.cells[3] === 'X' && store.cells[6] === 'X') {
  //  return true
  // } else if (store.cells[1] === 'X' && store.cells[4] === 'X' && store.cells[7] === 'X') {
  //  return true
  // } else if (store.cells[2] === 'X' && store.cells[5] === 'X' && store.cells[8] === 'X') {
  //  return true
  // Diagonal win
  // } else if (store.cells[0] === 'X' && store.cells[4] === 'X' && store.cells[8] === 'X') {
  //  return true
  // } else if (store.cells[2] === 'X' && store.cells[4] === 'X' && store.cells[6] === 'X') {
  //  return true
  // } else {
  //  return false
  // }
  // }

  // console.log('Did X win?', checkForXWin())

  // Check if O wins.
  const checkForOWin = function () {
    // Horizontal win
    if (store.cells[0] === 'O' && store.cells[1] === 'O' && store.cells[2] === 'O') {
      $('.game-message').html('O WINS!')
    } else if (store.cells[3] === 'O' && store.cells[4] === 'O' && store.cells[5] === 'O') {
      $('.game-message').html('O WINS!')
    } else if (store.cells[6] === 'O' && store.cells[7] === 'O' && store.cells[8] === 'O') {
      $('.game-message').html('O WINS!')
    // Vertical win
    } else if (store.cells[0] === 'O' && store.cells[3] === 'O' && store.cells[6] === 'O') {
      $('.game-message').html('O WINS!')
    } else if (store.cells[1] === 'O' && store.cells[4] === 'O' && store.cells[7] === 'O') {
      $('.game-message').html('O WINS!')
    } else if (store.cells[2] === 'O' && store.cells[5] === 'O' && store.cells[8] === 'O') {
      $('.game-message').html('O WINS!')
    // Diagonal win
    } else if (store.cells[0] === 'O' && store.cells[4] === 'O' && store.cells[8] === 'O') {
      $('.game-message').html('O WINS!')
    } else if (store.cells[2] === 'O' && store.cells[4] === 'O' && store.cells[6] === 'O') {
      $('.game-message').html('O WINS!')
    } else {
      // Display draw after all moves are taken
    }
  }

  // Check if O wins.
  // const checkForOWin = function () {
  // Horizontal win
  // if (store.cells[0] === 'O' && store.cells[1] === 'O' && store.cells[2] === 'O') {
  //  return true
  // } else if (store.cells[3] === 'O' && store.cells[4] === 'O' && store.cells[5] === 'O') {
  //  return true
  // } else if (store.cells[6] === 'O' && store.cells[7] === 'O' && store.cells[8] === 'O') {
  //  return true
  // Vertical win
  // } else if (store.cells[0] === 'O' && store.cells[3] === 'O' && store.cells[6] === 'O') {
  //  return true
  // } else if (store.cells[1] === 'O' && store.cells[4] === 'O' && store.cells[7] === 'O') {
  //  return true
  // } else if (store.cells[2] === 'O' && store.cells[5] === 'O' && store.cells[8] === 'O') {
  //  return true
  // Diagonal win
  // } else if (store.cells[0] === 'O' && store.cells[4] === 'O' && store.cells[8] === 'O') {
  //  return true
  // } else if (store.cells[2] === 'O' && store.cells[4] === 'O' && store.cells[6] === 'O') {
  //  return true
  // } else {
  //  return false
  // }
  // }

  // console.log('Did O win?', checkForOWin())

  // const checkForDraw = function () {
  // check for draw
  // if (checkForXWin() === false && checkForOWin() === false && allCellsTaken()) {
  //  return true
  // } else {
  //  return false
  // }
  // }

  // console.log('Is there a draw?', checkForDraw())
})
