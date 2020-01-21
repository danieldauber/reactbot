import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'express-async-errors';
import Youch from 'youch';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(bodyParser.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      const errors = await new Youch(err, req).toJSON();
      return res.status(500).json(errors);
      // if (process.env.NODE_ENV === 'development') {
      //   const errors = await new Youch(err, req).toJSON();
      //   return res.status(500).json(errors);
      // }
      // return res.status(500).json({ errors: 'Internal server error' });
    });
  }
}

export default new App().server;
