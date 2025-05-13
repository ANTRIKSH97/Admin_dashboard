import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialUsers = [
  { id: 1, name: "Antriksh Dubey", email: "antriksh@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Rahul Sharma", email: "rahul@example.com", role: "Editor", status: "Inactive" },
  { id: 3, name: "Priya Singh", email: "priya@example.com", role: "Viewer", status: "Active" },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleEdit = (id) => {
    console.log("Edit user with ID:", id);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>User Management</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Email</TableCell>
              <TableCell sx={{ color: 'white' }}>Role</TableCell>
              <TableCell sx={{ color: 'white' }}>Status</TableCell>
              <TableCell sx={{ color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Chip
                    label={user.status}
                    color={user.status === "Active" ? "success" : "default"}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user.id)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(user.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">No users found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
