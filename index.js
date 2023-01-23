const express = require('express')
const app = express()
const pool = require('./sql/connection')
const userRoutes = require('./routes/users')

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use('/users', userRoutes)



app.listen(PORT, ()=> console.log(`I am listening on port ${PORT}`))