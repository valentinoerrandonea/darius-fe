import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './contact-form51.css';

import { getSessionData } from '../utils/sessionUtils'


const API = process.env.REACT_APP_API;

const ContactForm51 = ({ getUsers, heading1, action }) => {
  const [first_name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const sessionData = getSessionData();
      const token = sessionData.token;

      const res = await fetch(`${API}/profile/create_user`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,  // Incluye el token aquí
                  'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to create user');
      }

      await res.json();

      // Refresh the user list after creating a new user
      getUsers();

      // Reset the form after successful submission
      setName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form51-contact1 thq-section-padding">
      <div className="thq-flex-column thq-section-max-width">
        <div className="contact-form51-section-title thq-flex-column">
          <div className="contact-form51-content">
            {heading1 || (
              <h2 className="contact-form51-text6 thq-heading-2">Contact us</h2>
            )}
          </div>
        </div>
        <form className="contact-form51-form thq-flex-column" onSubmit={handleSubmit}>
          <div className="contact-form51-container">
            <div className="contact-form51-input">
              <label htmlFor="contact-form-5-first-name" className="contact-form51-text1 thq-body-small">
                First name
              </label>
              <input
                type="text"
                id="contact-form-5-first-name"
                placeholder="First Name"
                className="contact-form51-text-input thq-input"
                onChange={(e) => setName(e.target.value)}
                value={first_name}
                required
              />
            </div>
            <div className="contact-form51-input1">
              <label htmlFor="contact-form-5-last-name" className="contact-form51-text2 thq-body-small">
                Last name
              </label>
              <input
                type="text"
                id="contact-form-5-last-name"
                placeholder="Last Name"
                className="contact-form51-text-input1 thq-input"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
                required
              />
            </div>
          </div>
          <div className="contact-form51-container1">
            <div className="contact-form51-input2">
              <label htmlFor="email" className="contact-form51-text3 thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="contact-form51-text-input2 thq-input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="contact-form51-input3">
              <label htmlFor="password" className="contact-form51-text4 thq-body-small">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="contact-form51-text-input3 thq-input"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
          </div>
          <div className="contact-form51-container2">
            <div className="contact-form51-input4">
              <label htmlFor="contact-form-5-options" className="contact-form51-text5 thq-body-small">
                Permissions
              </label>
              <select id="contact-form-5-options" className="thq-select">
                <option value="Customer service">Customer service</option>
                <option value="Finance">Finance</option>
                <option value="Feature request">Feature request</option>
              </select>
            </div>
          </div>
          <button type="submit" className="contact-form51-button thq-button-filled" disabled={loading}>
            {action || (
              <span className="contact-form51-text7 thq-body-small">
                {loading ? 'Creating...' : 'Create User'}
              </span>
            )}
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

ContactForm51.propTypes = {
  getUsers: PropTypes.func.isRequired,
  heading1: PropTypes.element,
  action: PropTypes.element,
};

export default ContactForm51;
