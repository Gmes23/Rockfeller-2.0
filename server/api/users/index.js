const express = require('express');
// connects the database(postgreSQL)
const db = require('../../database/config');
let userRouter = express.Router();


userRouter.get('/test', function (req, res) {
    console.log(res, 'this is res from userRouter')
    res.send('hello world')
})

userRouter.post('/register', (req, res, next) => {
    console.log(req.body.userInfo, "this is req.body")
    const values = [req.body.userInfo.username,
    req.body.userInfo.email,
    req.body.userInfo.password]
    db.query(`INSERT INTO users(username, password_digest, email)
                VALUES($1, $2, $3)`,
        values, (q_err, q_res) => {
            if (q_err) return next(q_err);
            res.status(200).json(q_res.rows)
        })
})

module.exports = userRouter;