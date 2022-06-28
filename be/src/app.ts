/* eslint-disable @typescript-eslint/no-var-requires */
import 'dotenv/config';
import express from 'express';
import loaders from './loaders';

const PORT = process.env.PORT;

async function startServer() {
  const app = express();

  loaders({ expressApp: app });

  app
    .listen(PORT, () => {
      console.log(`
      ################################################
      🛡️  Server listening on port: ${PORT} 🛡️
      ################################################
    `);
    })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
}

startServer();
