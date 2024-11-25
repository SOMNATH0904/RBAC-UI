import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Autocomplete, Checkbox, ListItemText, Slide } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';  // Corrected import for ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toastify

const availablePermissions = [
  'Read', 'Write', 'Execute', 'Delete'
];

const availableActions = [
  'Create', 'Update', 'Delete', 'View'
];

// Slide transition for smoother modal appearance
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddRoleModal = ({ open, setOpen, addRole, editRole, setEditRole, updateRole }) => {
  const [roleName, setRoleName] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [selectedActions, setSelectedActions] = useState([]);

  useEffect(() => {
    if (editRole) {
      setRoleName(editRole.name);
      setSelectedPermissions(editRole.permissions || []);
      setSelectedActions(editRole.actions || []);
    }
  }, [editRole]);

  const handleSubmit = () => {
    if (roleName) {
      const roleData = {
        id: editRole ? editRole.id : Date.now(),
        name: roleName,
        permissions: selectedPermissions,
        actions: selectedActions,
      };

      if (editRole) {
        updateRole(roleData);
      } else {
        addRole(roleData.name, roleData.permissions, roleData.actions);
        toast.success('Role added successfully!');  // Show success message
      }

      setRoleName('');
      setSelectedPermissions([]);
      setSelectedActions([]);
      setOpen(false);
      setEditRole(null);
    } else {
      alert('Please enter a valid role name');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setEditRole(null);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>{editRole ? 'Edit Role' : 'Add Role'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Role Name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Autocomplete
            multiple
            options={availablePermissions}
            value={selectedPermissions}
            onChange={(e, newValue) => setSelectedPermissions(newValue)}
            renderInput={(params) => <TextField {...params} label="Permissions" />}
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox checked={selected} />
                <ListItemText primary={option} />
              </li>
            )}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Autocomplete
            multiple
            options={availableActions}
            value={selectedActions}
            onChange={(e, newValue) => setSelectedActions(newValue)}
            renderInput={(params) => <TextField {...params} label="Actions" />}
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox checked={selected} />
                <ListItemText primary={option} />
              </li>
            )}
            fullWidth
            sx={{ mb: 2 }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            {editRole ? 'Update Role' : 'Add Role'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast container should be placed outside the dialog component */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop />
    </>
  );
};

export default AddRoleModal;
