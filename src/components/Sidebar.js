import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Tooltip,
} from '@mui/material';

import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  PersonAdd as AddUserIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

const drawerWidth = 200;

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Users', icon: <UsersIcon />, path: '/users' },
    { text: 'Add User', icon: <AddUserIcon />, path: '/add-user' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : 60,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
        },
      }}
    >
      <div style={{ display: 'flex', justifyContent: open ? 'flex-end' : 'center', padding: 8 }}>
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Tooltip title={!open ? item.text : ''} placement="right" key={item.text}>
            <ListItem button component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
