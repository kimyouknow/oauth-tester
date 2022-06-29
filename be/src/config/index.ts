import * as dotenv from 'dotenv';

dotenv.config();

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  SERVER_PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_PATH,
  API: {
    PREFIX: '/api',
  },
  OAUTH: {
    GITHUB: {
      REDIRECT: {
        CLIENT_ID: process.env.OAUTH_GITHUB_CLIENT_ID_REDIRECT,
        SECRET_ID: process.env.OAUTH_GITHUB_CLIENT_SECRET_REDIRECT,
      },
      CALLBACK: {
        CLIENT_ID: process.env.OAUTH_GITHUB_CLIENT_ID_CALLBACK,
        SECRET_ID: process.env.OAUTH_GITHUB_CLIENT_SECRET_CALLBACK,
      },
    },
  },
};
