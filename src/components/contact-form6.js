import  { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form6.css'

const ContactForm6 = (props) => {
  return (
    <div className="contact-form6-contact1 thq-section-padding">
      <div className="contact-form6-max-width thq-section-max-width thq-flex-row">
        <form className="contact-form6-form thq-flex-column">
          <div className="contact-form6-container">
            <div className="contact-form6-input">
              <label
                htmlFor="contact-form-6-first-name"
                className="thq-body-small"
              >
                Report Title * 
              </label>
              <input
                type="text"
                id="contact-form-6-first-name"
                placeholder="First Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form6-input1">
              <label
                htmlFor="contact-form-6-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-6-last-name"
                placeholder="Last Name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form6-container1">
            <div className="contact-form6-input2">
              <label htmlFor="contact-form-6-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="email"
                id="contact-form-6-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
              <label htmlFor="contact-form-6-email" className="thq-body-small">
                Email
              </label>
              <input
                type="tel"
                id="contact-form-6-phone"
                placeholder="Phone Number"
                className="thq-input"
              />
            </div>
            <div className="contact-form6-input3"></div>
          </div>
          <div className="contact-form6-checkbox"></div>
          <button
            type="submit"
            className="contact-form6-button thq-button-filled"
          >
            <span>
              {props.action ?? (
                <Fragment>
                  <span className="contact-form6-text4 thq-body-small">
                    Submit
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm6.defaultProps = {
  action: undefined,
}

ContactForm6.propTypes = {
  action: PropTypes.element,
}

export default ContactForm6
