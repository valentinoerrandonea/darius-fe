// sessionUtils.js

// Function to get session data
  export const getSessionData = () => {
    return {
      user_id: localStorage.getItem('user_id'),
      email: localStorage.getItem('email'),
      first_name: localStorage.getItem('first_name'),
      admin_type: localStorage.getItem('admin_type'),
      token: localStorage.getItem('token')

    };
  };
  
  // Function to clear session data
  export const clearSessionData = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('email');
    localStorage.removeItem('first_name');
    localStorage.removeItem('admin_type');
    localStorage.removeItem('token');
  };
  
  // Function to set session data
  export const setSessionData = (data) => {
    localStorage.setItem('user_id', data.user_id);
    localStorage.setItem('email', data.email);
    localStorage.setItem('first_name', data.first_name);
    localStorage.setItem('admin_type', data.admin_type);
    localStorage.setItem('token', data.token);
  };

  export const isLoggedIn = () => {
    const sessionData = getSessionData();
    return !!sessionData.user_id;
  };
  