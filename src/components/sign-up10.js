import { Fragment, useState } from 'react';

import PropTypes from 'prop-types'

import './sign-up10.css'
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API;


const SignUp10 = (props) => {


  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage(''); // Hide previous error messages
    document.querySelectorAll('.input-error').forEach((el) => el.classList.remove('input-error'));
    document.getElementById('submit-btn').disabled = true; // Disable the submit button

    // Trim form data
    const trimmedData = trimFormData(formData);

    // Perform client-side validation
    const validationErrors = validateFormData(trimmedData);
    if (validationErrors.length > 0) {
      setErrorMessage('Form validation errors:\n' + validationErrors.join('\n'));
      document.getElementById('submit-btn').disabled = false; // Enable the submit button
      return;
    }

    try {
      const response = await fetch(`${API}/auth/register`, {
        method: 'POST',
        body: new URLSearchParams(trimmedData),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.message) {
          alert(result.message);
          window.location.href = 'login';
        }
      } else {
        const result = await response.json();
        setErrorMessage('Error:\n' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error:\n' + error.message);
    } finally {
      document.getElementById('submit-btn').disabled = false; // Enable the submit button
    }
  };

  const trimFormData = (data) => {
    const trimmedData = {};
    Object.keys(data).forEach((key) => {
      trimmedData[key] = data[key].trim();
    });
    return trimmedData;
  };

  const validateFormData = (data) => {
    const errors = [];

    if (!data.first_name) {
      errors.push('The name field is required.');
      document.querySelector('input[name="first_name"]').classList.add('input-error');
    }

    if (!data.last_name) {
      errors.push('The last name field is required.');
      document.querySelector('input[name="last_name"]').classList.add('input-error');
    }

    if (!data.email) {
      errors.push('The email field is required.');
      document.querySelector('input[name="email"]').classList.add('input-error');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailPattern.test(data.email)) {
      errors.push('Please enter a valid email.');
      document.querySelector('input[name="email"]').classList.add('input-error');
    }

    if (!data.password) {
      errors.push('The password field is required.');
      document.querySelector('input[name="password"]').classList.add('input-error');
    }

    if (data.password && data.password.length < 6) {
      errors.push('The password must be at least 6 characters.');
      document.querySelector('input[name="password"]').classList.add('input-error');
    }

    const uppercasePattern = /[A-Z]/;
    if (data.password && !uppercasePattern.test(data.password)) {
      errors.push('Password must contain at least one uppercase letter.');
      document.querySelector('input[name="password"]').classList.add('input-error');
    }

    const numberPattern = /[0-9]/;
    if (data.password && !numberPattern.test(data.password)) {
      errors.push('Password must contain at least one number.');
      document.querySelector('input[name="password"]').classList.add('input-error');
    }

    return errors;
  };


  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };




  return (
    <div className="sign-up10-container">
      <div className="sign-up10-container1"></div>
      <div className="sign-up10-form-root thq-section-padding">
        <div className="sign-up10-form thq-section-padding">
          <div className="sign-up10-title-root">
            {props.heading1 ? (
              <h2>{props.heading1}</h2>
            ) : (
              <h2 className="sign-up10-text09 thq-heading-2">Sign Up</h2>
            )}
            <p className="sign-up10-text01 thq-body-large">
              <span>
                Already have an account?
                <span dangerouslySetInnerHTML={{ __html: ' ' }} />
              </span>
              <Link className="sign-up10-text03" to="/sign-in">Sign in</Link>
              {/* <Link className="nav-link" to="/my-account">My Account</Link> */}

            </p>
          </div>
          <form id="register-form" className="sign-up10-form1" onSubmit={handleSubmit}>
            <div className="sign-up10-first-name">
              <label htmlFor="first_name" className="sign-up10-text04 thq-body-large">
                First name
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                placeholder="First name"
                className="sign-up10-textinput thq-input thq-body-large"
              />
            </div>
            <div className="sign-up10-last-name">
              <label htmlFor="last_name" className="sign-up10-text04 thq-body-large">
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                placeholder="Last name"
                className="sign-up10-textinput thq-input thq-body-large"
              />
            </div>
            <div className="sign-up10-email">
              <label htmlFor="email" className="sign-up10-text04 thq-body-large">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className="sign-up10-textinput thq-input thq-body-large"
              />
            </div>
            <div className="sign-up10-password">
              <div className="sign-up10-textfield">
                <div className="sign-up10-container2">
                  <label htmlFor="password" className="sign-up10-text05 thq-body-large">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  className="sign-up10-textinput1 thq-input thq-body-large"
                />
              </div>
            </div>
            {errorMessage && (
              <div id="error-message" style={{ color: 'red' }}>
                {errorMessage}
              </div>
            )}
            <button
              type="submit"
              id="submit-btn"
              className="sign-up10-button thq-button-filled"
            >
              {props.action1 ? (
                props.action1
              ) : (
                <span className="sign-up10-text10 thq-body-small">Get Started</span>
              )}
            </button>
          </form>
          
          <div className="sign-up10-divider">
            <div className="sign-up10-divider1"></div>
            <p className="sign-up10-text08 thq-body-large">Or continue with</p>
            <div className="sign-up10-divider2"></div>
          </div>
          <div className="sign-up10-container3">
            <button
              aria-label="Sign up with Google"
              className="sign-up10-button1 thq-button-outline"
            >
              <svg viewBox="0 0 1024 1024" className="sign-up10-icon2">
                <path d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z"></path>
              </svg>
            </button>
            {/* <button
              aria-label="Sign up with Apple"
              className="sign-up10-button2 thq-button-outline"
            >
              <svg
                viewBox="0 0 796.0137142857142 1024"
                className="sign-up10-icon4"
              >
                <path d="M796 694.286c-14.286 45.143-37.143 93.143-70.286 142.857-49.143 74.857-98.286 112-146.857 112-19.429 0-45.714-6.286-80-18.286-33.714-12.571-62.857-18.286-86.286-18.286-22.857 0-50.286 6.286-81.143 18.857-31.429 13.143-56.571 19.429-75.429 19.429-58.857 0-115.429-49.714-172-148-55.429-98.286-84-193.714-84-287.429 0-87.429 21.714-158.286 64.571-213.714 42.857-54.857 96.571-82.286 162.286-82.286 28 0 61.143 5.714 101.143 17.143 39.429 11.429 65.714 17.143 78.857 17.143 16.571 0 44-6.286 81.714-19.429 37.714-12.571 70.857-19.429 98.857-19.429 45.714 0 86.286 12.571 121.714 37.143 20 13.714 40 33.143 59.429 57.143-29.714 25.143-51.429 47.429-65.143 67.429-24.571 35.429-37.143 74.857-37.143 118.286 0 46.857 13.143 89.714 39.429 127.429s56.571 61.714 90.286 72zM581.143 24c0 23.429-5.714 49.714-16.571 77.714-11.429 28.571-29.143 54.857-53.143 78.857-20.571 20.571-41.143 34.286-61.714 41.143-13.143 4-32.571 7.429-59.429 9.714 1.143-56.571 16-105.714 44.571-146.857s76.571-69.143 142.857-84.571c1.143 5.143 2.286 9.143 2.857 12.571 0 4 0.571 7.429 0.571 11.429z"></path>
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

SignUp10.defaultProps = {
  heading1: undefined,
  action1: undefined,
}

SignUp10.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
}

export default SignUp10
