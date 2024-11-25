import React from 'react';
import { Box, AppBar, Toolbar, Typography, Grid, Paper, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RolesManager from './RolesManager';
import PermissionsTable from './PermissionsTable';

const HomePage = () => {
  // Example data for roles and permissions
  const roles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write'], actions: ['Create', 'Update'] },
    { id: 2, name: 'User', permissions: ['Read'], actions: ['View'] },
  ];

  const permissions = [
    { id: 1, name: 'Read' },
    { id: 2, name: 'Write' },
    { id: 3, name: 'Delete' },
  ];

  const handleRoleAdded = () => {
    toast.success('New role added successfully!', { position: 'top-right', autoClose: 3000 });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Role-Based Access Control Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          {/* Roles Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Roles
              </Typography>
              <RolesManager roles={roles} deleteRole={() => {}} updateRole={() => {}} />
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
                onClick={handleRoleAdded}
              >
                Add Role
              </Button>
            </Paper>
          </Grid>

          {/* Permissions Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Permissions
              </Typography>
              <PermissionsTable permissions={permissions} onEdit={() => {}} onDelete={() => {}} />
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Toast Notifications */}
      <ToastContainer />
    </Box>
  );
};

export default HomePage;
