import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  CALLBACK,
  HOME_ROUTE,
  OAUTH_VERSION_CALLBACK,
  OAUTH_VERSION_SERVER,
} from '@/constant/route';
import Layout from '@/layout';
import Main from '@/pages/Main';
import OAuthCallback from '@/pages/OAuthCallback';
import OAuthWithCallback from '@/pages/OAuthWithCallback';
import OAuthWithServer from '@/pages/OAuthWithServer';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={OAUTH_VERSION_SERVER} element={<OAuthWithServer />} />
          <Route path={OAUTH_VERSION_CALLBACK} element={<OAuthWithCallback />} />
        </Route>
        <Route path={CALLBACK} element={<OAuthCallback />} />
      </Routes>
    </BrowserRouter>
  );
}
