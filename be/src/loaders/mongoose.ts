import mongoose, { ConnectOptions } from 'mongoose';
import { Db } from 'mongodb';

const mongoUrl = process.env.MONGO_PATH;

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
  return connection.connection.db;
};
