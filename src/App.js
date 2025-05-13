import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/Users';
import AddUser from './pages/AddUser';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />

        <div style={{ flex: 1 }}>
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
