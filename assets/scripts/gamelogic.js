'use strict'
const store = require('./store.js')
// Game logic
const gameLogic = () => {
  // Switching between 'X' and 'O'
  const switchPlayer = function () {
    if (store.currentPlayer === 'X') {
      store.currentPlayer = 'O'
    } else {
      store.currentPlayer = 'X'
    }
    console.log('In switchPlayer: This is player ', store.currentPlayer)
  }
  // Gameplay code
  $('.box').on('click', function (event) {
    // Adds current player to board in DOM
    $(event.target).text(store.currentPlayer)
    // Gets the index player clicked on
    const index = event.target.id // get index from the div's id="" attribute
    // Adds currentPlayer to the board array
    store.cells[index] = store.currentPlayer
    // Switching players
    switchPlayer()
    // Checking for wins
    checkForXWin()
    checkForOWin()
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
    console.log('This is what store is', store)
    if (store.cells[0] === 'X' && store.cells[1] === 'X' && store.cells[2] === 'X') {
      $('.game-message').html('X WINS!')
      store.over = true
    } else if (store.cells[3] === 'X' && store.cells[4] === 'X' && store.cells[5] === 'X') {
      $('.game-message').html('X WINS!')
      store.over = true
    } else if (store.cells[6] === 'X' && store.cells[7] === 'X' && store.cells[8] === 'X') {
      $('.game-message').html('X WINS!')
      store.over = true
    // Vertical win
    } else if (store.cells[0] === 'X' && store.cells[3] === 'X' && store.cells[6] === 'X') {
      $('.game-message').html('X WINS!')
      store.over = true
    } else if (store.cells[1] === 'X' && store.cells[4] === 'X' && store.cells[7] === 'X') {
      $('.game-message').html('X WINS!')
      store.over = true
    } else if (store.cells[2] === 'X' && store.cells[5] === 'X' && store.cells[8] === 'X') {
      $('.game-message').html('X WINS!')
      store.over = true
    // Diagonal win
    } else if (store.cells[0] === 'X' && store.cells[4] === 'X' && store.cells[8] === 'X') {
      $('.game-message').html('X WINS!')
      store.over = true
    } else if (store.cells[2] === 'X' && store.cells[4] === 'X' && store.cells[6] === 'X') {
      $('.game-message').html('X WINS!')
      store.over = true
    } else {
      // Display draw after all moves are taken
    }
  }
  // Check if O wins.
  const checkForOWin = function () {
    // Horizontal win
    if (store.cells[0] === 'O' && store.cells[1] === 'O' && store.cells[2] === 'O') {
      $('.game-message').html('O WINS!')
      store.over = true
    } else if (store.cells[3] === 'O' && store.cells[4] === 'O' && store.cells[5] === 'O') {
      $('.game-message').html('O WINS!')
      store.over = true
    } else if (store.cells[6] === 'O' && store.cells[7] === 'O' && store.cells[8] === 'O') {
      $('.game-message').html('O WINS!')
      store.over = true
    // Vertical win
    } else if (store.cells[0] === 'O' && store.cells[3] === 'O' && store.cells[6] === 'O') {
      $('.game-message').html('O WINS!')
      store.over = true
    } else if (store.cells[1] === 'O' && store.cells[4] === 'O' && store.cells[7] === 'O') {
      $('.game-message').html('O WINS!')
      store.over = true
    } else if (store.cells[2] === 'O' && store.cells[5] === 'O' && store.cells[8] === 'O') {
      $('.game-message').html('O WINS!')
      store.over = true
    // Diagonal win
    } else if (store.cells[0] === 'O' && store.cells[4] === 'O' && store.cells[8] === 'O') {
      $('.game-message').html('O WINS!')
      store.over = true
    } else if (store.cells[2] === 'O' && store.cells[4] === 'O' && store.cells[6] === 'O') {
      $('.game-message').html('O WINS!')
      store.over = true
    } else {
    // Display draw after all moves are taken
    }
  }
}

module.exports = {
  gameLogic
}
