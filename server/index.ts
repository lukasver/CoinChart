import './common/env';
import Server from './api';
import routes from './routes';
import setupDB from './common/setupDB';
import db from './db/models';
import tokens from './crawler/tokens';

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

export default new Server().router(routes).listen(port, async () => {
  await setupDB();
  await db.Token.bulkCreate(tokens);
});
