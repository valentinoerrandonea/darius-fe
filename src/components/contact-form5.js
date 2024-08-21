
import React, { useState, useRef, Fragment } from 'react';

import PropTypes from 'prop-types'
import { getSessionData } from '../utils/sessionUtils'

import './contact-form5.css'

const API = process.env.REACT_APP_API;


const ContactForm5 = (props) => {
  const [formData, setFormData] = useState({
    report_title: '',
    language: '',
    company_domain: '',
    company_web: '',
    company_country: '',
    company_description: '',
    industry: '',
    objective_of_expansion: '',
    target_countries: '',
    complementary_urls: '',
    company_resources_strategy: '',
    free_form: '',
    suggestions: '',
    // Add any other necessary fields
  });

  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value.trim(),
    });
  };
  // handleResetReportForm
  const handleResetForm = () => {
    setFormData({
      report_title: '',
      language: '',
      company_domain: '',
      company_web: '',
      company_country: '',
      company_description: '',
      industry: '',
      objective_of_expansion: '',
      target_countries: '',
      complementary_urls: '',
      company_resources_strategy: '',
      free_form: '',
      suggestions: '',
      // Reset any other necessary fields
    });
  };

  
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      setErrorMessage('Form validation errors:\n' + validationErrors.join('\n'));
      return;
    }

    const reportId = formData.report_id;
    const url = reportId 
      ? `${API}/report/edit_report/${reportId}` 
      : `${API}/report/save_report`;

    const method = reportId ? 'PUT' : 'POST';
    const sessionData = getSessionData();
    const token = sessionData.token;
    console.log(formData)
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Authorization': `Bearer ${token}`,  // Incluye el token aquí
          'Content-Type': 'application/json',
        },
        // body: new URLSearchParams(formData),
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message || 'Success!');
        handleResetForm();
        // await searchReports();
      } else {
        const err = await response.json();
        console.log(err)
        setErrorMessage(`Error: ${err.error}`);
      }
    } catch (error) {
      console.log(error)

      setErrorMessage(`Error: ${error.message}`);
    }
  };

  const validateFormData = (data) => {
    let errors = [];

    if (!data.report_title) errors.push('Report Title is required.');
    if (!data.language) errors.push('Report Language is required.');
    if (!data.company_domain) errors.push('Company Full Domain is required.');
    if (!data.company_web) errors.push('Company URL is required.');
    if (!data.company_country) errors.push('Company Location (Country) is required.');
    if (!data.objective_of_expansion) errors.push('Objective of Expansion is required.');
    if (!data.target_countries) errors.push('Target Countries are required.');

    return errors;
  };




  return (
    <div
      className={`contact-form5-contact1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width thq-flex-column">
        <form 
          className="contact-form5-form thq-flex-column"
          ref={formRef}
          onSubmit={handleSubmitForm}
        >
          <div className="contact-form5-container1">
            <div className="contact-form5-input10">
              <label
                htmlFor="report_title"
                className="contact-form5-text10 thq-body-small"
              >
                Report Title *
              </label>
              <input
                type="text"
                id="report_title"
                required
                value={formData.report_title}
                onChange={handleInputChange}
                placeholder="Report Name"
                className="contact-form5-text-input10 thq-input"
              />
              <div className="contact-form5-input11">
                <label
                  htmlFor="language"
                  className="contact-form5-text11 thq-body-small"
                >
                  Report Language *
                </label>
                <input
                  type="text"
                  id="language"
                  required
                  value={formData.language}
                  onChange={handleInputChange}
                  placeholder="Report Language"
                  className="contact-form5-text-input11 thq-input"
                />
              </div>
              <div className="contact-form5-input12">
                <label
                  htmlFor="company_domain"
                  className="contact-form5-text12 thq-body-small"
                >
                  Company Full Domain *
                </label>
                <input
                  type="text"
                  id="company_domain"
                  required
                  value={formData.company_domain}
                  onChange={handleInputChange}
                  placeholder="Company full domain"
                  className="contact-form5-text-input12 thq-input"
                />
              </div>
              <div className="contact-form5-input13">
                <label
                  htmlFor="company_web"
                  className="contact-form5-text13 thq-body-small"
                >
                  Company URL *
                </label>
                <input
                  type="text"
                  id="company_web"
                  required
                  value={formData.company_web}
                  onChange={handleInputChange}
                  placeholder="Company URL"
                  className="contact-form5-text-input13 thq-input"
                />
              </div>
              <div className="contact-form5-input14">
                <label
                  htmlFor="company_country"
                  className="contact-form5-text14 thq-body-small"
                >
                  Company Location (Country) *
                </label>
                <input
                  type="text"
                  id="company_country"
                  required
                  value={formData.company_country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="contact-form5-text-input14 thq-input"
                />
              </div>
              <div className="contact-form5-input15">
                <label
                  htmlFor="company_description"
                  className="contact-form5-text15 thq-body-small"
                >
                  Company Main Operations (Product/Service) *
                </label>
                <input
                  type="text"
                  id="company_description"
                  required
                  value={formData.company_description}
                  onChange={handleInputChange}
                  placeholder="Product/services"
                  className="contact-form5-text-input14 thq-input"
                />
              </div>
              <div className="contact-form5-input16">
                <label
                  htmlFor="industry"
                  className="contact-form5-text16 thq-body-small"
                >
                  Company Industry *
                </label>
                <input
                  type="text"
                  id="industry"
                  required
                  value={formData.industry}
                  onChange={handleInputChange}
                  
                  placeholder="Company Industry"
                  className="contact-form5-text-input16 thq-input"
                />
              </div>
            </div>
            <div className="contact-form5-input17">
              <label
                htmlFor="company_resources_strategy"
                className="contact-form5-text17 thq-body-small"
              >
                Company's detailed information relevant for achieving objective on target. 
              </label>
              <input
                type="text"
                id="company_resources_strategy"
                required
                value={formData.company_resources_strategy}
                onChange={handleInputChange}
                placeholder="Company detailed info"
                className="contact-form5-text-input17 thq-input"
              />
              <div className="contact-form5-input18">
                <label
                  htmlFor="objective_of_expansion"
                  className="contact-form5-text18 thq-body-small"
                >
                  Objetctive of Expansion *
                </label>
                <input
                  type="text"
                  id="objective_of_expansion"
                  required
                  value={formData.objective_of_expansion}
                  onChange={handleInputChange}
                  placeholder="Expansion objective"
                  className="contact-form5-text-input18 thq-input"
                />
              </div>
              <div className="contact-form5-input19">
                <label
                  htmlFor="target_countries"
                  className="contact-form5-text19 thq-body-small"
                >
                  Target Country
                </label>
                <input
                  type="text"
                  id="target_countries"
                  required
                  value={formData.target_countries}
                  onChange={handleInputChange}
                  placeholder="Target Country"
                  className="contact-form5-text-input19 thq-input"
                />
              </div>
              <div className="contact-form5-input20">
                <label
                  htmlFor="complementary_urls"
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
                  id="complementary_urls"
                  value={formData.complementary_urls}
                  onChange={handleInputChange}
                  placeholder="Complementary URLs"
                  className="contact-form5-text-input20 thq-input"
                />
              </div>
              <div className="contact-form5-input21">
                <label
                  htmlFor="free_form"
                  className="contact-form5-text21 thq-body-small"
                >
                  Free Form (Text, Links, etc)
                </label>
                <input
                  type="text"
                  id="free_form"
                  value={formData.free_form}
                  onChange={handleInputChange}
                  placeholder="Freeform"
                  className="contact-form5-text-input21 thq-input"
                />
              </div>
              <div className="contact-form5-input22">
                <label
                  htmlFor="suggestions"
                  className="contact-form5-text22 thq-body-small"
                >
                  Suggestions
                </label>
                <input
                  type="text"
                  id="suggestions"
                  value={formData.suggestions}
                  onChange={handleInputChange}
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
        <div id="error-message" style={{ display: errorMessage ? 'block' : 'none' }}>
          {errorMessage}
        </div>
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
