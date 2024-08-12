import  { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignUp10 from '../components/sign-up10'
import './sign-up.css'


const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-Up - Planical modern template</title>
        <meta
          property="og:title"
          content="Sign-Up - Planical modern template"
        />
      </Helmet>
      <SignUp10
        heading1={
          <Fragment>
            <h2 className="sign-up-text thq-heading-2">Sign Up</h2>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="sign-up-text1 thq-body-small">Get Started</span>
          </Fragment>
        }
      ></SignUp10>
    </div>
  )
}

export default SignUp
