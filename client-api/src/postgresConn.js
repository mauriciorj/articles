import { Pool } from 'pg';
//var connectionString = "postgres://postgres:postgres@localhost:5432/articles";
const postgresConn = new Pool({
  user: 'postgres',
  password: 'change123',
  host: 'localhost',
  port: 5432,
  database: 'articles'
});

export default postgresConn;