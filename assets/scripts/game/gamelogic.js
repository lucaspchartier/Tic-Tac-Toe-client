'use strict'
const store = require('../store.js')

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
    // IF store.over is false AND $(event.target).text() equals empty string ''
    // then do all the game stuff as usual
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
    // Check if all cells are taken
    // allCellsTaken()
    // ELSE show a message to user that
    // says invalid turn $('.game-message').html('invalid turn')
  })

  // Check if all store.cells are taken
  // const allCellsTaken = function () {
  //   return (store.cells[0] === 'X' || store.cells[0] === 'O') &&
  //   (store.cells[1] === 'X' || store.cells[1] === 'O') &&
  //   (store.cells[2] === 'X' || store.cells[2] === 'O') &&
  //   (store.cells[3] === 'X' || store.cells[3] === 'O') &&
  //   (store.cells[4] === 'X' || store.cells[4] === 'O') &&
  //   (store.cells[5] === 'X' || store.cells[5] === 'O') &&
  //   (store.cells[6] === 'X' || store.cells[6] === 'O') &&
  //   (store.cells[7] === 'X' || store.cells[7] === 'O') &&
  //   (store.cells[8] === 'X' || store.cells[8] === 'O')
  //   eturn true store.cells are taken
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

// const tie = ['X', 'X', 'O', 'X', 'O', 'O', 'O', 'X', 'X']
//
// const allCellsTaken = function () {
//   // return true if cells are taken
//   // (x == 5 || y == 5)
//   return (tie[0] === 'X' || tie[0] === 'O') &&
//   (tie[1] === 'X' || tie[1] === 'O') &&
//   (tie[2] === 'X' || tie[2] === 'O') &&
//   (tie[3] === 'X' || tie[3] === 'O') &&
//   (tie[4] === 'X' || tie[4] === 'O') &&
//   (tie[5] === 'X' || tie[5] === 'O') &&
//   (tie[6] === 'X' || tie[6] === 'O') &&
//   (tie[7] === 'X' || tie[7] === 'O') &&
//   (tie[8] === 'X' || tie[8] === 'O')
// }
//
// console.log('This cell is taken', allCellsTaken())

module.exports = {
  gameLogic
}
