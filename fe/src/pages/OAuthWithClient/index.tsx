import Button from '@mui/material/Button';

import { API_PREFIX, AUTH_API, BASE_API_URL } from '@/constant/api';

export default function OAuthWithClient() {
  return (
    <div>
      <Button variant="contained" href={BASE_API_URL + API_PREFIX + AUTH_API.GITHUB_OAUTH}>
        Github OAuth - href
      </Button>
    </div>
  );
}
