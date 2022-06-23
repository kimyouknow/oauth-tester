import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
const clientSecret = process.env.OAUTH_GITHUB_CLIENT_ID;
const redirect_uri = 'api/auth/github';

const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/oauth/github', (req, res) => {
  // res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
  res.status(302).location(`https://github.com/login/oauth/authorize?client_id=${clientId}`).end();
});

let token = null;
app.get('/api/auth/github', (req, res) => {
  const body = {
    client_id: clientId,
    client_secret: clientSecret,
    code: req.query.code,
  };
  const opts = { headers: { accept: 'application/json' } };
  console.log('body', body);
  axios
    .post(`https://github.com/login/oauth/access_token`, body, opts)
    .then((res) => res.data['access_token'])
    .then((_token) => {
      console.log('My token:', token);
      token = _token;
      res.redirect('http://localhost:3000/');
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

export default app;
