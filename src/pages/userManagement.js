import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios here

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios.get('https://jsonplaceholder.typicode.com/users')  // Replace with your API endpoint
      .then(response => {
        setUsers(response.data);  // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role || 'User'}</td>
              <td>{user.status || 'Active'}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
