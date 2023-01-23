const pool = require('../sql/connection')


const list = (req, res) => {
    pool.query("SELECT * FROM users", (err, rows, fields)=> {
        res.json(rows)
    })
}

const show = (req, res) => {
    const {id} = req.params
    pool.query(`SELECT * FROM users WHERE id = ${id}`, (err, rows, fields)=> {
        res.json(rows)
    })
}

const create = (req, res) => {
    const { name, email, password, perfectTemp } = req.body
    pool.query('INSERT INTO users (id, name, email, password, perfectTemp) VALUES (?, ?, ?, ?, ?)',
    [null, name, email, password, perfectTemp],
    (err, results, fields) => {
        res.json(results)
    })
}

const update = (req, res) => {
    const { id } = req.params
    pool.query(`UPDATE users SET ? WHERE id = ?`,
    [req.body, id],
    (err, results, fields) => {
        res.json(results)
    })
}

const remove = (req, res) => {
    const { id } = req.params
    pool.query(`DELETE FROM users WHERE id = ?`,
    [id],
    (err, results, fields) => {
        res.json(results)
    })
}

module.exports = {
    list,
    show,
    create,
    update,
    remove
}