import Button from '@mui/material/Button';

const clientId = process.env.REACT_APP_OAUTH_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_OAUTH_GITHUB_CLIENT_SECRET;

export default function OAuthWithCallback() {
  const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000/callback`;
  return (
    <div>
      <Button variant="contained" href={githubOAuthUrl}>
        Github OAuth - callback
      </Button>
    </div>
  );
}
