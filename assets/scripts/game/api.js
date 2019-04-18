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

const getGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(data)
  })
}

const updateGame = function (index, value, over) {
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
            'index': $(event.target).attr('data-cell-index'),
            'value': store.player
          },
          'over': store.game.over
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
