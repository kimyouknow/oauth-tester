import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link, matchPath, useLocation } from 'react-router-dom';

import { GNB_LINKS } from '@/constant/route';

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function GNB() {
  const routeMatch = useRouteMatch(GNB_LINKS.map(({ url }) => url));
  const currentTab = routeMatch?.pattern?.path;
  return (
    <ul>
      <Tabs value={currentTab}>
        {GNB_LINKS.map(({ label, url }) => (
          <Tab key={url} label={label} value={url} to={url} component={Link} />
        ))}
      </Tabs>
    </ul>
  );
}
