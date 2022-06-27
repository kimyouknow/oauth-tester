import instance from '@/api/core';
import { AUTH_API } from '@/constant/api';

const authApi = {
  requestGithubOAuth() {
    return instance({
      url: AUTH_API.GITHUB_OAUTH,
      method: 'get',
    });
  },
  requestGithubOAuthVersion2(code: string) {
    return instance({
      url: AUTH_API.GITHUB_OAUTH_VERSION2,
      method: 'post',
      data: {
        code,
      },
    });
  },
};

export default authApi;
