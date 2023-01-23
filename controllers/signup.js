const pool = require('../sql/connection')
const bcrypt = require('bcrypt')

const create = async (req, res) => {
    const { name, email, password, perfectTemp } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    pool.query('INSERT INTO users (id, name, email, password, perfectTemp) VALUES (?, ?, ?, ?, ?)',
    [null, name, email, hashedPassword, perfectTemp],
    (err, results, fields) => {
        res.json(results)
    })
}

module.exports = {create}