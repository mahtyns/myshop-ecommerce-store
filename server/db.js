const Pool = require("pg").Pool;

const pool = new Pool ( {
    user: "postgres",
    password: "Aeew!,!L02",
    host: "localhost",
    port: 5432,
    database: "myshopdb"
});

module.exports = pool;