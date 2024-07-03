import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

function Dashboard() {
const navigate=useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
         Welcome to Credmarg!!
        </Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
