import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import AddRoleModal from './AddRoleModal';

const RolesManager = () => {
  const [open, setOpen] = useState(false);
  const [editRole, setEditRole] = useState(null);
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: 'Admin',
      permissions: ['Read', 'Write', 'Execute'],
      actions: ['Create', 'Update', 'Delete'],
    },
    {
      id: 2,
      name: 'User',
      permissions: ['Read'],
      actions: ['View'],
    },
  ]);

  // Handle adding a new role
  const addRole = (name, permissions, actions) => {
    const newRole = {
      id: roles.length + 1, // Ensure unique ID
      name,
      permissions,
      actions,
    };
    setRoles([...roles, newRole]);
  };

  // Handle editing a role
  const handleEdit = (role) => {
    setEditRole(role); // Set the role to be edited
    setOpen(true); // Open the modal
  };

  // Handle deleting a role
  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  // Function to update role in the roles state
  const updateRole = (updatedRole) => {
    const updatedRoles = roles.map((role) =>
      role.id === updatedRole.id ? updatedRole : role
    );
    setRoles(updatedRoles);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Role
      </Button>

      {/* Roles Table */}
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role Name</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions.join(', ')}</TableCell>
                <TableCell>{role.actions.join(', ')}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(role)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(role.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Role Modal */}
      <AddRoleModal
        open={open}
        setOpen={setOpen}
        addRole={addRole}
        editRole={editRole}
        setEditRole={setEditRole}
        updateRole={updateRole} // Pass updateRole function to modal
      />
    </div>
  );
};

export default RolesManager;
