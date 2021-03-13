/**
 * Autho generated file afte running 
 * `npx sequelize-cli migration:generate --name author`
 * 
 * The content of this file should be add by the use.
 */

'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('Books');
  }
};