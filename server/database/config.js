const Pool = require('pg').Pool
const pool = new Pool({
  user: 'gm',
  host: 'localhost',
  database: 'rockfeller',
  password: 'password',
  port: 5432,
})


  module.exports = pool;