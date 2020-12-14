require("dotenv").config();
import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

const basename = path.basename(__filename);
const postgresConn = {};

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASS,
  {
    host: process.env.POSTGRES_HOST,
    dialect: process.env.POSTGRES_DIALECT,
  }
);

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, "/models", file));
    postgresConn[model.name] = model;
  });

Object.keys(postgresConn).forEach((modelName) => {
  if (postgresConn[modelName].associate) {
    postgresConn[modelName].associate(postgresConn);
  }
});

postgresConn.sequelize = sequelize;
postgresConn.Sequelize = Sequelize;

export default postgresConn;
