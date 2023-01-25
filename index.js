const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('./sql/connection')
const userRoutes = require('./routes/users')
const signupRoutes = require('./routes/signup')
const signinRoutes = require('./routes/signin')

const PORT = process.env.PORT || 5000

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) return res.sendStatus(401)

    jwt.verify(token, "fragments", (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.use(express.json());
app.use('/users', authenticateToken, userRoutes)
app.use('/signup', signupRoutes)
app.use('/signin', signinRoutes)

app.get("/", (req, res)=> {
    res.json({
        message: "Welcome to the wthr backend!"
    })
})


app.listen(PORT, ()=> console.log(`I am listening on port ${PORT}`))