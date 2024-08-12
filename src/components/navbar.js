

import PropTypes from 'prop-types'

import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <header className={`navbar-navbar ${props.rootClassName} `}>
      <Link to="/">
        <img
          alt={props.imageAlt2}
          src={props.imageSrc2}
          className="navbar-image"
        />
      </Link>
      
      <div className="navbar-nav-content">
        <div className="navbar-nav-links">
          <Link className="navbar-link nav-link" to="/my-reports">My reports</Link>
          <Link className="nav-link" to="/my-account">My Account</Link>
        </div>
        <Link to="/generate-your-report" className="navbar-get-started get-started">
          <span className="navbar-text" to="/generate-your-report">Generate Report</span>
        </Link>
        {/* <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-image1"
          />
        </div> */}
      </div>
      {/* <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-branding">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="navbar-image2"
          />
          <div id="close-mobile-menu" className="navbar-container">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
        </div>
        <div className="navbar-nav-links1">
          <span className="nav-link">Features</span>
          <span className="nav-link">Why us</span>
          <span className="nav-link">Prices</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="get-started">
          <span className="navbar-text1">Get started</span>
        </div>
      </div> */}
      {/* <div>
        <div className="navbar-container2">
          ELIMINAR ESTE MENU
        </div>
      </div> */}
    </header>
  )
}

Navbar.defaultProps = {
  imageSrc2: '/darius-logo-package-negative1.svg',
  imageAlt2: 'image',
  imageAlt: 'image',
  imageSrc1: '/Branding/planical7012-ttpb.svg',
  imageSrc: '/Icons/hamburger-200h.png',
  imageAlt1: 'image',
  rootClassName: '',
}

Navbar.propTypes = {
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
