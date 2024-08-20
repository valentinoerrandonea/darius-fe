
import React from 'react'

// import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


import Navbar from '../components/navbar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">Eyes and ears, everywhere</h1>
              </header>
              <span className="home-caption">
                Generate state of the art market reports easily and secure
              </span>
              <div className="home-buttons">
                <Link to="/generate-your-report" className="home-get-started button">
                  
                  <span className="home-text">Run Darius</span>
                </Link>
              </div>
            </main>
            <div className="home-highlight"></div>
          </div>
          <div className="home-image">
            <img
              alt="A logo svg"
              src="/darius-logo-package-icon-red.svg"
              className="home-image1"
            />
          </div>
          {/* <div className="home-image2">
            <img
              alt="image"
              src="/SectionImages/heroimage-1500h.png"
              className="home-image3"
            />
          </div> */}
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-content1">
          <main className="home-main-content">
            <div className="home-content2">
              <header className="home-main1">
                <div className="home-header1">
                  <img
                    alt="image"
                    src="/darius-logo-package-negative.svg"
                    className="home-branding"
                  />
                  <span className="home-text1">Your AI Report Generator</span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories"></header>
            </div>
            <section className="home-copyright">
              <span className="home-text2">
                © 2024 HEROES. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe"></main>
          <section className="home-copyright1">
            <span className="home-text3">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home-container2">
          {/* <Script
          ></Script> */}
        </div>
      </div>
    </div>
  )
}

export default Home
