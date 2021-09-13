import { sequelize, Sequelize } from '../';
import Price from './Price.model';
import Token from './Token.model';

export interface DB {
  sequelize;
  Sequelize;
  Token;
  Price;
}

// Create all models...
const db: DB = {
  sequelize,
  Sequelize,
  Token: Token(sequelize),
  Price: Price(sequelize),
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
