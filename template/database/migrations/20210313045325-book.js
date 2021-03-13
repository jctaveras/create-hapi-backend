/**
 * Autho generated file afte running 
 * `npx sequelize-cli migration:generate --name book`
 * 
 * The content of this file should be add by the use.
 */

'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      numberOfPages: {
        allowNull: true,
        type: DataTypes.INTEGER,
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
