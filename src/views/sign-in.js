import  { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn4 from '../components/sign-in4'
import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Sign-In - Planical modern template</title>
        <meta
          property="og:title"
          content="Sign-In - Planical modern template"
        />
      </Helmet>
      <SignIn4
        action1={
          <Fragment>
            <span className="sign-in-text thq-body-small">Sign In</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="sign-in-text1 thq-heading-2">
              <span>
                Log in to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="sign-in-text3">Darius</span>
            </h2>
          </Fragment>
        }
      ></SignIn4>
    </div>
  )
}

export default SignIn
