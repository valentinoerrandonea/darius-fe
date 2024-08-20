import React from 'react'

import { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ContactForm5 from '../components/contact-form5'
import './generate-your-report.css'

const GenerateYourReport = (props) => {
  return (
    <div className="generate-your-report-container">
      <Helmet>
        <title>Generate-your-report - Planical modern template</title>
        <meta
          property="og:title"
          content="Generate-your-report - Planical modern template"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <h1 className="generate-your-report-text">Generate a Report</h1>
      <ContactForm5
        action={
          <Fragment>
            <span className="generate-your-report-text1 thq-body-small">
              Run Darius
            </span>
          </Fragment>
        }
        rootClassName="contact-form5-root-class-name"
      ></ContactForm5>
    </div>
  )
}

export default GenerateYourReport
