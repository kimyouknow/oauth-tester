declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: string;
      MONGO_PATH: string;
      OAUTH_GITHUB_CLIENT_ID_REDIRECT: string;
      OAUTH_GITHUB_CLIENT_SECRET_REDIRECT: string;
      OAUTH_GITHUB_CLIENT_ID_CALLBACK: string;
      OAUTH_GITHUB_CLIENT_SECRET_CALLBACK: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
