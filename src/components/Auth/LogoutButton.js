import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearSessionData } from '../../utils/sessionUtils';
const API = process.env.REACT_APP_API;


const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API}/auth/logout`, {
        method: 'POST',
        credentials: 'include',  // This is essential for sending cookies with the request
      });
  
      if (response.ok) {
        clearSessionData();  // Clear session data on the frontend
        navigate('/sign-in');  // Redirect to the login page
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
