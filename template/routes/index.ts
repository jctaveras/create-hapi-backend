import { ServerRoute } from '@hapi/hapi';

import authors from './authors';
import books from './books'

const routes: ServerRoute[] = [
  ...authors,
  ...books,
];

export default routes;
