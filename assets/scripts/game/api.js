'use strict'

const config = require('./../config.js')
const store = require('./../store.js')

const createGame = function (inputData) {
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

const getGames = function (inputData) {
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

const updateGame = function (index, value) {
  console.log('This is value', value)
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

module.exports = {
  createGame,
  getGames,
  updateGame
}
