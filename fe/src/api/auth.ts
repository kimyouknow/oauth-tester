import instance from '@/api/core';
import { AUTH_API } from '@/constant/api';

const authApi = {
  requestGithubOAuth() {
    return instance({
      url: AUTH_API.GITHUB_OAUTH,
      method: 'get',
    });
  },
};

export default authApi;
