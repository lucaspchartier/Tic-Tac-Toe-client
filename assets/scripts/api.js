'use strict'

const store = require('./store.js')

const signUp = function (inputData) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-up',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = function (inputData) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-in',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const changePassword = function (inputData) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signOut = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: ''
  })
}

// const updateGame = function () {
//  return $.ajax({
//    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/:id',
//    method: 'PATCH',
//    headers: {
//      Authorization: `Token token=${store.user.token}`
//    },
//    data: ,
//      cell: ,
//        index: ${index},
//        value: ${value}
//  })
// }

// const updateMove = function () {
//  return $.ajax({
//    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/:id',
//    method: 'PATCH',
//    headers: {
//      Authorization: `Token token=${store.user.token}`
//    },
//    data:
//      game {}
//  })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame
}
