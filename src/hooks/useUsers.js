import { useState, useEffect } from 'react';

const useUsers = (API) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token not found');
      }

      const res = await fetch(`${API}/profile/search_users`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (!res.ok) {
        throw new Error('Error fetching users');
      }

      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, getUsers };
};

export default useUsers;
