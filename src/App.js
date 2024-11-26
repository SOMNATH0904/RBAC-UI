import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import RolesManager from "./components/RolesManager";
import UsersManager from "./components/UsersManager";

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: "1200px",
          p: 4,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          RBAC Management Dashboard
        </Typography>

        {/* Two Management Sections: Roles and Users */}
        <Grid container spacing={4}>
          {/* Roles Management */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                mb: 2,
                fontWeight: "bold",
                color: "text.primary",
              }}
            >
              Role Management
            </Typography>
            <RolesManager />
          </Grid>

          {/* Users Management */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                mb: 2,
                fontWeight: "bold",
                color: "text.primary",
              }}
            >
              User Management
            </Typography>
            <UsersManager />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default App;
