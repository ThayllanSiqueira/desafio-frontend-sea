import { setupRoutes } from './routes';
import { errorLogger } from '../middleware/errorLogger';
import { setLanguage } from '../middleware/setTranlation';
import i18next from '../../../locales/translation';

import { handle } from 'i18next-http-middleware';
import express, { Express } from 'express';
import cors from 'cors';
import { resolve } from 'path';

class App {
  readonly app: Express;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errors();
  }

  middlewares() {
    this.app.use(handle(i18next));
    this.app.use(
      cors({
        exposedHeaders: ['Content-Disposition'],
      }),
    );
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(String(process.env.IMAGEUSERSICON))));
  }

  routes() {
    this.app.use(setLanguage);
    setupRoutes(this.app);
  }

  errors() {
    this.app.use(errorLogger);
  }
}

export default new App().app;
