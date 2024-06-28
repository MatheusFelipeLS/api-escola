import dotenv from 'dotenv';

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';
import delay from 'express-delay';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunosRoutes from './routes/alunosRoutes';
import fotoRoutes from './routes/fotoRoutes';

const allowedList = [
  'http://192.168.0.118:82',
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if(allowedList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet({
      crossOriginEmbedderPolicy: false,
    }));
    this.app.use(delay(2000));
    this.app.use(express.urlencoded({ extended: true} ));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunosRoutes);
    this.app.use('/foto/', fotoRoutes);
  }
}

export default new App().app;