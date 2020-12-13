//import { Pool } from 'pg';
//var connectionString = "postgres://postgres:postgres@localhost:5432/articles";

import { Sequelize } from "sequelize";

// const postgresConn = new Pool({
//   user: 'postgres',
//   password: 'change123',
//   host: 'localhost',
//   port: 5432,
//   database: 'articles'
// });

const postgresConn = new Sequelize("articles", "postgres", "change123", {
  host: "localhost",
  dialect: "postgres",
});

export default postgresConn;
