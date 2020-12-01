const { Pool } = require("pg");
//var connectionString = "postgres://postgres:postgres@localhost:5432/articles";
const pool = new Pool({
  user: 'postgres',
  password: 'change123',
  host: 'localhost',
  port: 5432,
  database: 'articles'
});

module.exports = pool;