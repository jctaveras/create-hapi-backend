
import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '.';

interface BookAtts {
  id: number;
  title: string;
  numberOfPages: number;
  authorId: number;
}

interface BookCreationAtts extends Optional<BookAtts, 'id'> {}

interface BookInstance extends Model<BookAtts, BookCreationAtts>, BookAtts {
  createdAt?: Date;
  updatedAt?: Date;
}

const Book = sequelize.define<BookInstance>(
  'Book',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    numberOfPages: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    authorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }
);

export default Book;