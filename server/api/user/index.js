const express = require('express')

//utils
const passport = require('../utils/auth/local')
const send = require('../utils/send')

const {
  dash,
  verify,
  create,
  logout
} = require('./controller')

const {
  shouldBeLoggedIn,
  shouldBeLoggedOut
} = require('./middlewares')

const userRouter = express.Router();


// homes routes
userRouter.get('/', shouldBeLoggedIn, dash, send)
// verifying user
userRouter.get('/verify', verify, send)
// logouts the user
userRouter.get('/logout', shouldBeLoggedIn, logout, send)

userRouter.post('/register', shouldBeLoggedOut, create, send)
// logs in the user and veries the user in the database
userRouter.post('/login', shouldBeLoggedOut, passport.authenticate('local', {
  successRedirect: '/api/user/verify',
  failureRedirect: '/api/user/verify',
  failureFlash: true
}))



module.exports = userRouter
