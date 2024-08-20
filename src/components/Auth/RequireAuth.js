import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/sessionUtils';

const RequireAuth = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/sign-in" />;
};

export default RequireAuth;
