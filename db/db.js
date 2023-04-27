const Pool = require("pg").Pool

const pool= new Pool({
    user: "postgres",
    host: "localhost",
    database: "TerniumDB",
    password: "Rodabla5",
    port: 5432
})

module.exports = pool;