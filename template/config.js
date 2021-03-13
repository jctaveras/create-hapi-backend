const {
  PG_URI,
  PG_DB,
  PG_PASSWORD,
  PG_USER,
  PG_PORT = 5432,
  PG_HOST
} = process.env;

const PG_URL =
  PG_URI ||
  `postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DB}`;

const BASE_CONFIG = {
  dialect: 'postgres',
  url: PG_URL,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};

module.exports = {
  development: BASE_CONFIG,
  test: BASE_CONFIG,
  production: Object.assign({}, BASE_CONFIG, {
    dialectOptions: {
      ssl: { require: true },
    },
    ssl: true,
  }),
};
