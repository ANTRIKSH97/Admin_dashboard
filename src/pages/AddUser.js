import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper
} from '@mui/material';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "Name is required";
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid";
    temp.password = formData.password.length >= 6 ? "" : "Password must be 6+ characters";
    temp.role = formData.role ? "" : "Role is required";
    setErrors(temp);
    return Object.values(temp).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("User Added:", formData);
      // Clear form
      setFormData({
        name: '',
        email: '',
        password: '',
        role: ''
      });
      alert("User added successfully!");
    }
  };

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
        <Typography variant="h5" gutterBottom>Add New User</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            select
            label="Role"
            name="role"
            fullWidth
            margin="normal"
            value={formData.role}
            onChange={handleChange}
            error={!!errors.role}
            helperText={errors.role}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="editor">Editor</MenuItem>
            <MenuItem value="viewer">Viewer</MenuItem>
          </TextField>
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
            Add User
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddUser;
