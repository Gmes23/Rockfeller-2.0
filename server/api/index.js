const express = require('express')

const apiRouter = express.Router()

// This is for the user routes, it uses the user folder which contains
// all the utils for the user route 
apiRouter.use('/user', require('./user'));


module.exports = apiRouter
