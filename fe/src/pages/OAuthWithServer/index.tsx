import Button from '@mui/material/Button';

import authApi from '@/api/auth';
import { API_PREFIX, AUTH_API, BASE_API_URL } from '@/constant/api';

export default function OAauthWithServer() {
  const handleGithubOauthClick = async () => {
    try {
      const response = await authApi.requestGithubOAuth();
      console.log('response :>> ', response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={handleGithubOauthClick}>
        모든 처리를 서버에서하는 Github OAuth - axios
      </Button>
      <Button variant="contained" href={BASE_API_URL + API_PREFIX + AUTH_API.GITHUB_OAUTH}>
        모든 처리를 서버에서하는 Github OAuth - href
      </Button>
    </div>
  );
}
