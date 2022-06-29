import axios from 'axios';
import { Router, Request, Response, NextFunction } from 'express';
import config from '../../config';

const {
  GITHUB: {
    REDIRECT: { CLIENT_ID: clientId, SECRET_ID: clientSecret },
    CALLBACK: { CLIENT_ID: cliendIdWithCallback, SECRET_ID: cliendSecretWithCallback },
  },
} = config.OAUTH;

const route = Router();

export default (app: Router) => {
  app.use('/oauth', route);

  route.get('/github', (req, res) => {
    res.json({ url: `https://github.com/login/oauth/authorize?client_id=${clientId}` });
  });

  route.get('/github/callback', (req, res) => {
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
        res.cookie('token-redirect', token, { httpOnly: true });
        res.redirect('http://localhost:3000/');
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  });

  route.post('/github/callback', async (req, res) => {
    const body = {
      client_id: cliendIdWithCallback,
      client_secret: cliendSecretWithCallback,
      code: req.body.code,
    };
    const opts = { headers: { accept: 'application/json' } };
    try {
      const response = await axios.post(`https://github.com/login/oauth/access_token`, body, opts);
      const token = response.data['access_token'];
      console.log('My token:', token);
      res.cookie('token-callback', token, { httpOnly: true });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error });
    }
  });
};
