const { Pool } = require('pg');

const pool = new Pool({
  user: 'quester',
  password: 'quester',
  host: 'localhost',
  database: 'side_quests'
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  },
}