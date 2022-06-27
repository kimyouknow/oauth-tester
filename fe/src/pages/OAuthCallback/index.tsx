import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import authApi from '@/api/auth';

const CODE = 'code';

export default function OAuthCallback() {
  const [searchParams] = useSearchParams();

  const getToken = async () => {
    const code = searchParams.get(CODE);
    try {
      if (!code) return;
      const response = await authApi.requestGithubOAuthVersion2(code);
      console.log('response :>> ', response);
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
