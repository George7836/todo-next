"use strict";

import { QueryInterface } from "sequelize";
import { DataType } from "sequelize-typescript";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable("tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },
      content: {
        type: DataType.TEXT,
      },
      done: {
        type: DataType.BOOLEAN,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable("tasks");
  },
};
