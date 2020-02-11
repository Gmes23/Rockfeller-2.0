const express = require('express')

let userRouter = express.Router();


userRouter.get('/register', function (req, res) {
    console.log(res, 'this is res from userRouter')
    res.send('hello world')
})

module.exports = userRouter;