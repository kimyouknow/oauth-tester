import 'dotenv/config';
import express from 'express';
import config from './config';
import loaders from './loaders';

const PORT = config.SERVER_PORT;

async function startServer() {
  const app = express();

  loaders({ expressApp: app });

  app
    .listen(PORT, () => {
      console.log(`✅  Server listening on port: ${PORT}`);
    })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
}

startServer();
