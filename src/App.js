import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import RolesManager from './components/RolesManager';

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: '1200px',
          p: 4,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          RBAC Management Dashboard
        </Typography>
        <RolesManager />
      </Paper>
    </Box>
  );
};

export default App;
