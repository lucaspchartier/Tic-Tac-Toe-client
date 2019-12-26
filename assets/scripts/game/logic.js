'use strict'

const store = require('../store.js')

const switchPlayer = () => {
  if (store.invalid) { return }
  store.player = store.player === 'X' ? 'O' : 'X'
  $('.game-message').html(`${store.player}'s turn`).show()
}

const gameBoard = (id, value, over) => {
  if (store.game.over === true) {
    return
  }
  if (store.game.cells[id] === '') {
    store.game.cells[id] = value
    store.invalid = false
  } else if (store.game.cells[id] === 'X' || 'O') {
    $('.game-message').html('Cell has already been taken.')
    store.invalid = true
  }
}

const gameOver = cell => {
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
    store.player = 'O'
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
