import { Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';

import Author from '../../database/models/auhtor';
import Book from '../../database/models/book';

const bookList: ServerRoute = {
  method: 'GET',
  /**
   * This is how you define query parameres with Hapi
   * 
   * This route can handle incomming request to:
   *   *  /book - it will return all the books in the database
   *   * /book/{bookId} - it will return the specified book by the id if any  
   */
  path: '/book/{id?}',
  async handler(request: Request, h: ResponseToolkit) {
    const where = request.params.id
      ? { id: request.params.id }
      : {};
    const data = await Book.findAll({
      where,
      include: [{ model: Author, as: 'author' }]
    });

    if (!Boolean(data.length)) {
      const message = request.params.id
        ? `No Book Found with ID: ${request.params.id}`
        : 'No Book Found';
      return h
        .response({ message })
        .code(404);
    }

    return { data };
  },
};

export default bookList;