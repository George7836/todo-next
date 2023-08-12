import { Sequelize } from "sequelize-typescript";
import Task from "./models/task";

const sequelize = new Sequelize({
  database: "todos_db",
  dialect: "postgres",
  username: "postgres",
  password: "postgres",
  port: 5432,
  host: "localhost",
  models: [Task],
});

module.exports = sequelize;
