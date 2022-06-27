import Button from '@mui/material/Button';

import authApi from '@/api/auth';

export default function OAauthWithServer() {
  const handleGithubOauthClick = async () => {
    try {
      const response = await authApi.requestGithubOAuth();
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
        Github OAuth - server redirect
      </Button>
    </div>
  );
}
