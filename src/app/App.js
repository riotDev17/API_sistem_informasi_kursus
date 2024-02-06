import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import * as path from 'path';
import swaggerDocs from '../utils/Swagger.js';
import cookieParser from 'cookie-parser';
import { Auth } from '../routes/Auth.js';
import { Router } from '../routes/Router.js';
import { ErrorMiddleware } from '../middleware/ErrorMiddleware.js';

export const app = express();
swaggerDocs(app, 3000);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join('assets')));
app.use(Auth);
app.use(Router);
app.use(ErrorMiddleware);
