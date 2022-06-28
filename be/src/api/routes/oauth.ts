import axios from 'axios';
import { Router, Request, Response, NextFunction } from 'express';

const clientId = process.env.OAUTH_GITHUB_CLIENT_ID_REDIRECT;
const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET_REDIRECT;

const cliendIdWithCallback = process.env.OAUTH_GITHUB_CLIENT_ID_CALLBACK;
const cliendSecretWithCallback = process.env.OAUTH_GITHUB_CLIENT_SECRET_CALLBACK;

const route = Router();

export default (app: Router) => {
  // app.use('/oauth', route);

  route.get('/oauth/github', (req, res) => {
    res.json({ url: `https://github.com/login/oauth/authorize?client_id=${clientId}` });
  });

  route.get('/auth/github', (req, res) => {
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
        res.redirect('http://localhost:3000/');
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  });

  route.post('/oauth/github/callback', (req, res) => {
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
};
