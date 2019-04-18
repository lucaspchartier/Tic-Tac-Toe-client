'use strict'

const store = require('../store.js')

const switchPlayer = function (playerTurn) {
  if (store.invalid === true) {
    return
  }
  if (store.invalid === false) {
    const player = playerTurn === 'X' ? 'O' : 'X'
    store.player = player
    $('.game-message').html(`${store.player}'s turn`)
    setTimeout(function () {
      $('.game-message').empty()
    }, 2000)
    return player
  }
}

const gameBoard = function (id, value, over) {
  if (over === true) {
    return
  }
  if (store.game.cells[id] === '') {
    store.game.cells[id] = value
    store.invalid = false
  } else if (store.game.cells[id] === 'X' || 'O') {
    $('.game-message').html('Box already clicked')
    $('.game-message').fadeOut(500)
    store.invalid = true
  }
}

const gameOver = function (cell) {
  if ((cell[0] === 'X' && cell[1] === 'X' && cell[2] === 'X') ||
    (cell[3] === 'X' && cell[4] === 'X' && cell[5] === 'X') ||
    (cell[6] === 'X' && cell[7] === 'X' && cell[8] === 'X') ||
    (cell[0] === 'X' && cell[3] === 'X' && cell[6] === 'X') ||
    (cell[1] === 'X' && cell[4] === 'X' && cell[7] === 'X') ||
    (cell[2] === 'X' && cell[5] === 'X' && cell[8] === 'X') ||
    (cell[0] === 'X' && cell[4] === 'X' && cell[8] === 'X') ||
    (cell[2] === 'X' && cell[4] === 'X' && cell[6] === 'X')) {
    store.game.over = true
    store.player = 'X'
    store.winner = 'X'
    // X wins!
    $('.game-message').html('X wins!')
  } else if ((cell[0] === 'O' && cell[1] === 'O' && cell[2] === 'O') ||
    (cell[3] === 'O' && cell[4] === 'O' && cell[5] === 'O') ||
    (cell[6] === 'O' && cell[7] === 'O' && cell[8] === 'O') ||
    (cell[0] === 'O' && cell[3] === 'O' && cell[6] === 'O') ||
    (cell[1] === 'O' && cell[4] === 'O' && cell[7] === 'O') ||
    (cell[2] === 'O' && cell[5] === 'O' && cell[8] === 'O') ||
    (cell[0] === 'O' && cell[4] === 'O' && cell[8] === 'O') ||
    (cell[2] === 'O' && cell[4] === 'O' && cell[6] === 'O')) {
    store.game.over = true
    store.player = 'X'
    store.winner = 'O'
    // O wins!
    $('.game-message').html('O wins!')
  } else if (cell[0] !== '' && cell[1] !== '' && cell[2] !== '' &&
    cell[3] !== '' && cell[4] !== '' && cell[5] !== '' &&
    cell[6] !== '' && cell[7] !== '' && cell[8] !== '') {
    store.game.over = true
    store.player = 'X'
    store.winner = 'Tie'
    // Tie game.
    $('.game-message').html('It\'s a tie!')
  }
}

module.exports = {
  switchPlayer,
  gameBoard,
  gameOver
}
