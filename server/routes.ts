import { Application } from 'express';

import mainRouter from './api/controllers/routes';

export default function routes(app: Application): void {
  app.use('/', mainRouter);
}
