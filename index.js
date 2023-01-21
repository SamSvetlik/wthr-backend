const express = require('express')
const app = express()
const pool = require('./sql/connection')

const PORT = process.env.PORT || 5000

app.use(express.json());

app.get('/users', (req, res) => {
    pool.query("SELECT * FROM users", (err, rows, fields)=> {
        res.json(rows)
    })
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params
    pool.query(`SELECT * FROM users WHERE id = ${id}`, (err, rows, fields)=> {
        res.json(rows)
    })
})

app.post('/users', (req, res) => {
    const { name, email, password } = req.body
    pool.query('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
    [null, name, email, password],
    (err, results, fields) => {
        res.json(results)
    })
})

app.put('/users/:id', (req, res) => {
    const { id } = req.params
    pool.query(`UPDATE users SET ? WHERE id = ?`,
    [req.body, id],
    (err, results, fields) => {
        res.json(results)
    })
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    pool.query(`DELETE FROM users WHERE id = ?`,
    [id],
    (err, results, fields) => {
        res.json(results)
    })
})

app.listen(PORT, ()=> console.log(`I am listening on port ${PORT}`))