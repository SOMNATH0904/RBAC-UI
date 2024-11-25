// Mock API functions to get roles and permissions (can be replaced with real API calls)
export const getRoles = () => {
    return Promise.resolve([
      { id: 1, name: 'Admin' },
      { id: 2, name: 'Editor' },
    ]);
  };
  
  export const getPermissions = () => {
    return Promise.resolve([
      { id: 1, permission: 'Create User' },
      { id: 2, permission: 'Delete User' },
    ]);
  };
  