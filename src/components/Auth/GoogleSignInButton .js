import React from 'react';
const API = process.env.REACT_APP_API;

const GoogleSignInButton = () => {
  const handleGoogleLogin = () => {
    // Redirige al backend para iniciar el proceso de login con Google
    window.location.href = `${API}/auth/login_google`;
  };

  return (
    <button
      id="google-login-btn"
      className="sign-in4-button thq-button-outline"
      onClick={handleGoogleLogin}
    >
      <svg viewBox="0 0 860.0137142857142 1024" className="sign-in4-icon">
        <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
      </svg>
      <span className="sign-in4-text04 thq-body-small">
        Continue with Google
      </span>
    </button>
  );
};

export default GoogleSignInButton;
