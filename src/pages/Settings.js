import React from 'react';
import { Box, Typography, Paper, Switch, FormControlLabel, Divider } from '@mui/material';

const Settings = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Preferences</Typography>
        <Divider sx={{ my: 2 }} />
        <FormControlLabel control={<Switch />} label="Enable Notifications" />
        <FormControlLabel control={<Switch />} label="Dark Mode" />
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6">Account Settings</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>Email: antriksh@example.com</Typography>
        <Typography>Password: ********</Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          (This is placeholder data)
        </Typography>
      </Paper>
    </Box>
  );
};

export default Settings;
