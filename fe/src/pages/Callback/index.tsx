import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import authApi from '@/api/auth';
import { HOME_ROUTE } from '@/constant/route';

const CODE = 'code';

export default function OAuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getToken = async () => {
    const code = searchParams.get(CODE);
    try {
      if (!code) return;
      const response = await authApi.requestGithubOAuthWithCallbackUrl(code);
      if (response.data.token) {
        navigate(HOME_ROUTE);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <div>
      OAuthCallback <h1>loading...</h1>
    </div>
  );
}
