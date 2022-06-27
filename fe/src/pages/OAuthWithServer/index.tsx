import Button from '@mui/material/Button';

import authApi from '@/api/auth';
import { API_PREFIX, AUTH_API, BASE_API_URL } from '@/constant/api';

export default function OAauthWithServer() {
  const handleGithubOauthClick = async () => {
    try {
      const response = await authApi.requestGithubOAuth();
      // const response = await fetch(BASE_API_URL + API_PREFIX + AUTH_API.GITHUB_OAUTH);
      console.log('response :>> ', response);
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={handleGithubOauthClick}>
        Github OAuth - axios
      </Button>
    </div>
  );
}
