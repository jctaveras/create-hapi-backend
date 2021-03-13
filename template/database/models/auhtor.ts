/**
 * Example model: Author
 * 
 * This is just an example to guide you through the creation
 * of your Sequelize Models.
 * 
 * If you want to learn more about: How to set up Sequelize
 * and Typescript you can read the followin article
 * 
 * https://dev.to/jctaveras/sequelize-typescript-what-you-need-to-know-41mj
 */

import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '.';
import Book from './book';

interface AuthorAtts {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};
 
interface AuthorCreationAtts extends Optional<AuthorAtts, 'id'> {}
 
interface AuthorInstance extends Model<AuthorAtts, AuthorCreationAtts>, AuthorAtts {
  createdAt?: Date;
  updatedAt?: Date;
}

const Author = sequelize.define<AuthorInstance>(
  'Author',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    lastName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    email: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  }
);

/**
 * Association Example
 * 
 * Associaiton Type: One-To-Many
 */

Author.hasMany(Book, {
  /**
   * The shourceKey is a totally optional field,
   * but if you want to be explicit you add the primaryKey
   * of the Author Model.
   */
  sourceKey: 'id',
  foreignKey: 'authorId',
  as: 'books'
});

/**
 * Totaly optional belongsTo association.
 * We declare it if we want to query the author data based
 * on a book.
 */
Book.belongsTo(Author, {
  foreignKey: 'authorId',
  as: 'author'
});

export default Author;
