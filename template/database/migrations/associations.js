/**
 * Different from the others migration files
 * association is an special file that helps us define
 * those columns that have an assoation.
 * 
 * For example we need to define the authorId column in the
 * Books table so we can then associate the Books table with
 * the Authors Table.
 */
'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.addColumn('Books', 'authorId', {
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Authors', // Name of the Table not the Sequelize Model
        key: 'id',
      },
      type: DataTypes.INTEGER,
    });
  },

  down: queryInterface => {
    return queryInterface
      .removeColumn('Books', 'authorid');
  },
};