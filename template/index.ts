import { Server } from '@hapi/hapi';

import routes from './routes';

async function init() {
  const server = new Server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  });
  const API_PREFIX = '/api'

  await server.start();

  server.route(routes.map(route => (Object.assign(route, {
    path: `${API_PREFIX}${route.path}`
  }))));

  console.log(`🏗 Server Running on: ${server.info.uri}`);
}

process.on('unhandledRejection', (error) => {
  console.log(error);
  process.exit(1);
});

init();
