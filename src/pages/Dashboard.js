import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const stats = [
  { title: 'Total Users', value: 3 },
  { title: 'Total Sales', value: '$15,00' },
  { title: 'Total Orders', value: 54 },
];

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">{stat.title}</Typography>
              <Typography variant="h4" color="primary">
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
