import mongoose, { ConnectOptions } from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
  } as ConnectOptions);
  return connection.connection.db;
};
