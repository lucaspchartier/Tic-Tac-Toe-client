'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createGame = function (inputData) {
  console.log('Game created')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const updateGame = function (index, value, over) {
  console.log('This is index', index)
  console.log('This is value', value)
  console.log('This is over', over)
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'game': {
          'cell': {
            'index': 0,
            'value': 'x'
          },
          'over': true
        }
      }
    )
  })
}

const getGame = function (inputData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

module.exports = {
  createGame,
  updateGame,
  getGame
}
