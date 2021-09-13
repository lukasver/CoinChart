import { Sequelize } from 'sequelize';

import * as config from './config';

const { DB_LOGGING = false } = process.env;

// set up Sequelize connection
const sequelize = new Sequelize(config.url, {
  define: {
    underscored: true,
  },
  logging: console.log,
});

export { sequelize, Sequelize };
