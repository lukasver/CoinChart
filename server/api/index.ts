import express, { Application } from 'express';
import os from 'os';
import path from 'path';

const app = express();

const corsOptions = {
  credentials: true,
};

export default class ExpressServer {
  private routes: (app: Application) => void;
  constructor() {
    const root = path.normalize(__dirname + '/..');
    const requestLimit = process.env.REQUEST_LIMIT || '100kb';
    app.set('appPath', root + 'client');
    app.use(express.static(`${root}/public`));
    // app.use(cors(corsOptions));
  }

  router(routes: (app: Application) => void): ExpressServer {
    routes(app);
    // app.use(errorHandler);
    return this;
  }

  listen(port: number, cb: () => Promise<void>): Application {
    const welcome = (p: number) => async (): Promise<void> => {
      if (cb) await cb();
      return console.log(
        `up and running in ${
          process.env.NODE_ENV || 'development'
        } @: ${os.hostname()} on port: ${p}}`
      );
    };

    app.listen(port, welcome(port));

    return app;
  }
}
