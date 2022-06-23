import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HOME_ROUTE, OAUTH_VERSION_CLIENT, OAUTH_VERSION_SERVER } from '@/constant/route';
import Layout from '@/layout';
import Main from '@/pages/Main';
import OAuthWithClient from '@/pages/OAuthWithClient';
import OAuthWithServer from '@/pages/OAuthWithServer';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={OAUTH_VERSION_SERVER} element={<OAuthWithServer />} />
          <Route path={OAUTH_VERSION_CLIENT} element={<OAuthWithClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
