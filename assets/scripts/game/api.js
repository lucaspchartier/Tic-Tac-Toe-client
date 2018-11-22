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
    data: JSON.stringify(inputData)
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'game': {
          'cell': {
            'index': index,
            'value': value
          },
          'over': over
        }
      }
    )
  })
}

const getGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGame
}
