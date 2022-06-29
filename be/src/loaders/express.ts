import express from 'express';
import cors from 'cors';
import routes from '../api';
import config from '../config';

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

export default ({ app }: { app: express.Application }) => {
  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(config.API.PREFIX, routes());
};
