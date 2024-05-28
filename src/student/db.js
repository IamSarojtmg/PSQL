const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'daredeviL1',
    port: 5432,
});

module.exports = pool;