import Button from '@mui/material/Button';

import { OAUTH_GITHUB_CLIENT_ID_CALLBACK } from '@/constant/env';

export default function OAuthWithCallback() {
  const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${OAUTH_GITHUB_CLIENT_ID_CALLBACK}`;
  return (
    <div>
      <Button variant="contained" href={githubOAuthUrl}>
        Github OAuth - callback
      </Button>
    </div>
  );
}
