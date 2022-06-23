import Button from '@mui/material/Button';

import { OAUTH_GITHUB_CLIENT_ID } from '@/constant/env';

export default function OAuthWithClient() {
  return (
    <div>
      <Button
        variant="contained"
        href={`https://github.com/login/oauth/authorize?client_id=${OAUTH_GITHUB_CLIENT_ID}`}
      >
        클라이언트에서 callback하는 Github OAuth
      </Button>
    </div>
  );
}
