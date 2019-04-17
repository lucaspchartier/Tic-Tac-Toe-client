'use strict'

const tie = ['X', 'X', 'O', 'X', 'O', 'O', 'O', 'X', 'X']

const allCellsTaken = function () {
  // return true if cells are taken
  // (x == 5 || y == 5)
  return (tie[0] === 'X' || tie[0] === 'O') &&
  (tie[1] === 'X' || tie[1] === 'O') &&
  (tie[2] === 'X' || tie[2] === 'O') &&
  (tie[3] === 'X' || tie[3] === 'O') &&
  (tie[4] === 'X' || tie[4] === 'O') &&
  (tie[5] === 'X' || tie[5] === 'O') &&
  (tie[6] === 'X' || tie[6] === 'O') &&
  (tie[7] === 'X' || tie[7] === 'O') &&
  (tie[8] === 'X' || tie[8] === 'O')
}

console.log('This cell is taken', allCellsTaken())
