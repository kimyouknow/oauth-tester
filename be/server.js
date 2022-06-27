import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

const clientId = process.env.OAUTH_GITHUB_CLIENT_ID_VERSION1;
const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET_VERSION1;
const redirect_uri = 'api/auth/github';

const cliendIdWithCallback = process.env.OAUTH_GITHUB_CLIENT_ID_VERSION2;
const cliendSecretWithCallback = process.env.OAUTH_GITHUB_CLIENT_SECRET_VERSION2;

const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// http://localhost:8081/api/oauth/github
app.get('/api/oauth/github', (req, res) => {
  res.json({ url: `https://github.com/login/oauth/authorize?client_id=${clientId}` });
});

app.get('/api/auth/github', (req, res) => {
  const body = {
    client_id: clientId,
    client_secret: clientSecret,
    code: req.query.code,
  };
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((res) => res.data['access_token'])
    .then((token) => {
      console.log('My token:', token);
      res.json({ token });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

app.post('/api/auth/github/version2', (req, res) => {
  const body = {
    client_id: cliendIdWithCallback,
    client_secret: cliendSecretWithCallback,
    code: req.body.code,
  };
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((res) => res.data['access_token'])
    .then((token) => {
      console.log('My token:', token);
      res.json({ token });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

export default app;
