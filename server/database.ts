require("dotenv").config();
import { Sequelize } from "sequelize-typescript";
import Task from "./models/task";

const sequelize = new Sequelize({
  database: process.env.DB,
  dialect: "postgres",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
  host: "localhost",
  models: [Task],
});

module.exports = sequelize;
