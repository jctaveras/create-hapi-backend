import { Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';

import Author from '../../database/models/auhtor';
import Book from '../../database/models/book';

const authorList: ServerRoute = {
  method: 'GET',
  /**
   * This is how you define query parameres with Hapi
   * 
   * This route can handle incomming request to:
   *   *  /author - it will return all the authors in the database
   *   * /author/{authorId} - it will return the specified author by the id if any  
   */
  path: '/author/{id?}',
  async handler(request: Request, h: ResponseToolkit) {
    const where = request.params.id
      ? { id: request.params.id }
      : {};
    const data = await Author.findAll({
      where,
      include: [{ model: Book, as: 'books' }]
    });

    if (!Boolean(data.length)) {
      const message = request.params.id
        ? `No Author Found with ID: ${request.params.id}`
        : 'No Author Found';
      return h
        .response({ message })
        .code(404);
    }

    return { data };
  },
};

export default authorList;