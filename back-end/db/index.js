const { Pool } = require('pg');

const pool = new Pool({
  user: 'hooked',
  password: 'LAS',
  host: 'localhost',
  database: 'midterm'
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  },
}