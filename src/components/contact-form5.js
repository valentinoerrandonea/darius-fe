import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form5.css'

const ContactForm5 = (props) => {
  return (
    <div
      className={`contact-form5-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-column">
        <form className="contact-form5-form thq-flex-column">
          <div className="contact-form5-container1">
            <div className="contact-form5-input10">
              <label
                htmlFor="contact-form-5-first-name"
                className="contact-form5-text10 thq-body-small"
              >
                Report Title *
              </label>
              <input
                type="text"
                id="contact-form-5-first-name"
                required="true"
                placeholder="Report Name"
                className="contact-form5-text-input10 thq-input"
              />
              <div className="contact-form5-input11">
                <label
                  htmlFor="contact-form-5-email"
                  className="contact-form5-text11 thq-body-small"
                >
                  Report Language *
                </label>
                <input
                  type="text"
                  id="contact-form-5-email"
                  required="true"
                  placeholder="Report Language"
                  className="contact-form5-text-input11 thq-input"
                />
              </div>
              <div className="contact-form5-input12">
                <label
                  htmlFor="contact-form-5-email"
                  className="contact-form5-text12 thq-body-small"
                >
                  Company Full Domain *
                </label>
                <input
                  type="text"
                  id="contact-form-5-email"
                  required="true"
                  placeholder="Company full domain"
                  className="contact-form5-text-input12 thq-input"
                />
              </div>
              <div className="contact-form5-input13">
                <label
                  htmlFor="contact-form-5-email"
                  className="contact-form5-text13 thq-body-small"
                >
                  Company URL *
                </label>
                <input
                  type="text"
                  id="contact-form-5-email"
                  required="true"
                  placeholder="Company URL"
                  className="contact-form5-text-input13 thq-input"
                />
              </div>
              <div className="contact-form5-input14">
                <label
                  htmlFor="contact-form-5-email"
                  className="contact-form5-text14 thq-body-small"
                >
                  Company Location (Country) *
                </label>
                <input
                  type="text"
                  id="contact-form-5-email"
                  required="true"
                  placeholder="Contry"
                  className="contact-form5-text-input14 thq-input"
                />
              </div>
              <div className="contact-form5-input15">
                <label
                  htmlFor="contact-form-5-email"
                  className="contact-form5-text15 thq-body-small"
                >
                  Company Main Operations (Product/Service) *
                </label>
                <input
                  type="text"
                  id="contact-form-5-email"
                  required="true"
                  placeholder="Product/services"
                  className="contact-form5-text-input15 thq-input"
                />
              </div>
              <div className="contact-form5-input16">
                <label
                  htmlFor="contact-form-5-email"
                  className="contact-form5-text16 thq-body-small"
                >
                  Company Industry *
                </label>
                <input
                  type="text"
                  id="contact-form-5-email"
                  required="true"
                  placeholder="Company Industry"
                  className="contact-form5-text-input16 thq-input"
                />
              </div>
            </div>
            <div className="contact-form5-input17">
              <label
                htmlFor="contact-form-5-last-name"
                className="contact-form5-text17 thq-body-small"
              >
                Company Detailed Information * 
              </label>
              <input
                type="text"
                id="contact-form-5-last-name"
                required="true"
                placeholder="Company detailed info"
                className="contact-form5-text-input17 thq-input"
              />
              <div className="contact-form5-input18">
                <label
                  htmlFor="contact-form-5-phone"
                  className="contact-form5-text18 thq-body-small"
                >
                  Objetctive of Expansion *
                </label>
                <input
                  type="text"
                  id="contact-form-5-phone"
                  required="true"
                  placeholder="Objective of expansion"
                  className="contact-form5-text-input18 thq-input"
                />
              </div>
              <div className="contact-form5-input19">
                <label
                  htmlFor="contact-form-5-phone"
                  className="contact-form5-text19 thq-body-small"
                >
                  Target Country/ies *
                </label>
                <input
                  type="text"
                  id="contact-form-5-phone"
                  required="true"
                  placeholder="Target Country"
                  className="contact-form5-text-input19 thq-input"
                />
              </div>
              <div className="contact-form5-input20">
                <label
                  htmlFor="contact-form-5-phone"
                  className="contact-form5-text20 thq-body-small"
                >
                  Complementary URL&apos;s
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </label>
                <input
                  type="text"
                  id="contact-form-5-phone"
                  placeholder="Complementary URLs"
                  className="contact-form5-text-input20 thq-input"
                />
              </div>
              <div className="contact-form5-input21">
                <label
                  htmlFor="contact-form-5-phone"
                  className="contact-form5-text21 thq-body-small"
                >
                  Free Form (Text, Links, etc)
                </label>
                <input
                  type="text"
                  id="contact-form-5-phone"
                  placeholder="Freeform"
                  className="contact-form5-text-input21 thq-input"
                />
              </div>
              <div className="contact-form5-input22">
                <label
                  htmlFor="contact-form-5-phone"
                  className="contact-form5-text22 thq-body-small"
                >
                  Suggestions
                </label>
                <input
                  type="text"
                  id="contact-form-5-phone"
                  placeholder="Suggestions"
                  className="contact-form5-text-input22 thq-input"
                />
              </div>
            </div>
          </div>
          <div className="contact-form5-container2"></div>
          <button
            type="submit"
            className="contact-form5-button thq-button-filled"
          >
            <span>
              {props.action ?? (
                <Fragment>
                  <span className="contact-form5-text23 thq-body-small">
                    Run Darius
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

ContactForm5.defaultProps = {
  rootClassName: '',
  imageSrc: '14b62464-ad20-4c5a-83f7-2e101ee9a95d',
  action: undefined,
}

ContactForm5.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  action: PropTypes.element,
}

export default ContactForm5
