import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const RolesManager = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: 'All Access' },
    { id: 2, name: 'User', permissions: 'Limited Access' },
  ]);
  const [open, setOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  const handleOpen = (role = null) => {
    setCurrentRole(role || { name: '', permissions: '' });
    setOpen(true);
  };

  const handleSave = () => {
    if (currentRole.id) {
      // Update existing role
      setRoles((prevRoles) =>
        prevRoles.map((role) => (role.id === currentRole.id ? currentRole : role))
      );
    } else {
      // Add new role
      setRoles((prevRoles) => [...prevRoles, { ...currentRole, id: Date.now() }]);
    }
    setOpen(false);
  };

  const handleDelete = (id) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleOpen()} sx={{ mb: 2 }}>
        Add Role
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Permissions</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(role)}>
                    <Edit color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(role.id)}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Role Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>{currentRole?.id ? 'Edit Role' : 'Add Role'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={currentRole?.name || ''}
            onChange={(e) => setCurrentRole({ ...currentRole, name: e.target.value })}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Permissions"
            value={currentRole?.permissions || ''}
            onChange={(e) => setCurrentRole({ ...currentRole, permissions: e.target.value })}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RolesManager;
