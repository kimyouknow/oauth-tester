import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

import GNB from '@/components/GNB';

export default function Layout() {
  return (
    <Box maxWidth="sm">
      <GNB />
      <Outlet />
    </Box>
  );
}
