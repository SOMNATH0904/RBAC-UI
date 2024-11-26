# RBAC-UI - Role-Based Access Control Interface

## Overview
RBAC-UI is a user-friendly interface designed to simplify the management of users, roles, and permissions. It supports the creation, editing, and deletion of users and roles, assigning permissions to roles, and managing the status of users. This project serves as a robust solution for applications that require role-based access control (RBAC).

## Features

### 1. **User Management**
- **View Users**: Display a list of all users.
- **Add Users**: Create new users and assign them initial roles and permissions.
- **Edit Users**: Modify user details such as roles, permissions, and status (active/inactive).
- **Delete Users**: Remove users from the system.
- **Assign Roles**: Assign and update roles for users.
- **User Status**: Change user status (Active/Inactive).

### 2. **Role Management**
- **Create Roles**: Define new roles with specific permissions.
- **Edit Roles**: Modify roles to add or remove permissions.
- **Delete Roles**: Remove roles from the system.

### 3. **Dynamic Permissions**
- **Assign Permissions**: Assign or modify permissions like Read, Write, and Delete to roles.
- **View Permissions**: Display current permissions assigned to each role in an easily understandable format.

### 4. **Mock API Simulation (Optional)**
- Simulate API calls for CRUD operations on users and roles.
- Mock server responses to validate functionality without a backend.

## Requirements

- **Node.js**: Ensure that you have Node.js installed on your machine.
- **npm**: This project uses npm for managing dependencies.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/SOMNATH0904/RBAC-UI.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd RBAC-UI
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.
    
## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For managing navigation between pages.
- **CSS/SCSS**: Styling the components.
- **Axios** (Optional): For making API requests (used in simulation).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to the branch and create a pull request.

## Acknowledgements
- Thanks to the contributors and open-source community for making this project possible.
- The idea is inspired by the need for a simple user interface to manage RBAC in applications.

## Contact
For any questions or issues, please reach out to [SOMNATH0904](https://github.com/SOMNATH0904).

