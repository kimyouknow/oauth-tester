import { Application } from 'express';
import expressLoader from './express';
import mongooseLoader from './mongoose';

export default async ({ expressApp }: { expressApp: Application }) => {
  const mongoConnection = await mongooseLoader();
  console.log('✌️ DB loaded and connected!');
  await expressLoader({ app: expressApp });
  console.log('✌️ Express loaded');
};
