import React, { Fragment, useState, useEffect  } from 'react';

import { useNavigate } from 'react-router-dom';
import { isLoggedIn, setSessionData } from '../../utils/sessionUtils';

import PropTypes from 'prop-types';
import './sign-in4.css';
const API = process.env.REACT_APP_API;

// AnotherComponent.js


const SignIn4 = (props) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      console.log("FUNCIONA")
      // If the user is already logged in, redirect them to the home page or dashboard
      navigate('/');
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateFormData = (email, password) => {
    const errors = [];

    if (!email) {
      errors.push('Email is required.');
      document.querySelector('input[name="email"]').classList.add('input-error');
    } else if (!isValidEmail(email)) {
      errors.push('Please enter a valid email address.');
      document.querySelector('input[name="email"]').classList.add('input-error');
    }

    if (!password) {
      errors.push('Password is required.');
      document.querySelector('input[name="password"]').classList.add('input-error');
    }

    // You can add more password validation here if needed

    return errors;
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Remove previous error highlights
    document.querySelectorAll('.input-error').forEach((el) => el.classList.remove('input-error'));
    setErrorMessage('');
    document.getElementById('login-btn').disabled = true; // Disable the submit button

    const { email, password } = formData;
    const errors = validateFormData(email, password);

    if (errors.length > 0) {
      alert('Please fix the following errors:\n' + errors.join('\n'));
      document.getElementById('login-btn').disabled = false; // Enable the submit button
      return;
    }

    const formBody = new URLSearchParams();
    formBody.append('email', email);
    formBody.append('password', password);

    try {
      let response = await fetch(`${API}/auth/login`, {
        method: 'POST',
        body: formBody,
      });

      if (!response.ok) {
        let err = await response.json();
        throw new Error(err.error || 'Something went wrong with the request');
      }

      let data = await response.json();

      if (data.message) {
        // Store user data in localStorage or sessionStorage
        // localStorage.setItem('user_id', data.user_id);
        // localStorage.setItem('email', data.email);
        // localStorage.setItem('first_name', data.first_name);
        // localStorage.setItem('admin_type', data.admin_type);

        const userData = {
          user_id: data.user_id,
          email: data.email,
          first_name: data.first_name,
          admin_type: data.admin_type
        };
        
        // Store this data in localStorage
        setSessionData(userData);
        
          // IMPROVE MESSAGE VIEW
        alert(data.message);

        window.location.href = '/';

        // POSSIBLE SWICH TO ADMIN USERS VIEWS
        // switch (data.admin_type) {
        //   case 1: // superAdmin
        //     window.location.href = '/admin/dashboard';
        //     break;
        //   case 2: // admin
        //     window.location.href = '/admin/home';
        //     break;
        //   case 3: // reporter
        //     window.location.href = '/reporter/home';
        //     break;
        //   case 4: // reader
        //     window.location.href = '/';
        //     break;
        //   default:
        //     window.location.href = '/';
        //     break;
        // }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      document.getElementById('login-btn').disabled = false; // Enable the submit button
    }
  };
  

  return (
    <div className="sign-in4-container thq-section-padding">
      <div className="sign-in4-max-width thq-section-padding thq-section-max-width">
        <div className="sign-in4-form-root">
          <div className="sign-in4-form">
            <div className="sign-in4-container1">
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="sign-in4-text11 thq-heading-2">
                    <span>
                      Log in to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="sign-in4-text13">Darius</span>
                  </h2>
                </Fragment>
              )}
              <p className="sign-in4-text01 thq-body-large">
                <span>
                  Don&apos;t have an account?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="sign-in4-text03">Sign up</span>
              </p>
            </div>
            <div className="sign-in4-container2">
              <button className="sign-in4-button thq-button-outline">
                <svg viewBox="0 0 860.0137142857142 1024" className="sign-in4-icon">
                  <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
                </svg>
                <span className="sign-in4-text04 thq-body-small">
                  Continue with Google
                </span>
              </button>
            </div>
            <div className="sign-in4-divider">
              <div className="sign-in4-divider1"></div>
              <p className="sign-in4-text05 thq-body-large">OR</p>
              <div className="sign-in4-divider2"></div>
            </div>
            <form className="sign-in4-form1" onSubmit={handleSubmit}>
              <div className="sign-in4-email">
                <label
                  htmlFor="email"
                  className="sign-in4-text06 thq-body-large"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  className="sign-in4-textinput thq-input thq-body-large"
                />
              </div>
              <div className="sign-in4-password">
                <div className="sign-in4-container3">
                  <label
                    htmlFor="password"
                    className="sign-in4-text07 thq-body-large"
                  >
                    Password
                  </label>
                  <div className="sign-in4-hide-password">
                    <svg viewBox="0 0 1024 1024" className="sign-in4-icon2">
                      <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                    </svg>
                    <span className="sign-in4-text08 thq-body-small">Hide</span>
                  </div>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  className="sign-in4-textinput1 thq-input thq-body-large"
                />
                <div className="sign-in4-container4">
                  <a
                    href="https://teleporthq.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sign-in4-link thq-body-small"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="sign-in4-container5">
                <button
                  type="submit"
                  id="login-btn"
                  className="sign-in4-button1 thq-button-filled"
                >
                  {props.action1 ?? (
                    <Fragment>
                      <span className="sign-in4-text10 thq-body-small">
                        Sign In
                      </span>
                    </Fragment>
                  )}
                </button>
              </div>
            </form>
            
            {errorMessage && (
              <div id="error-message" style={{ color: 'red', marginTop: '10px' }}>
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sign-in4-container6"></div>
    </div>
  );
};

SignIn4.defaultProps = {
  action1: undefined,
  heading1: undefined,
};

SignIn4.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
};

export default SignIn4;
