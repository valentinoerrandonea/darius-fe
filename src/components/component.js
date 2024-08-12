import  { Fragment } from 'react'

import ContactForm5 from './contact-form5'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <ContactForm5
        action={
          <Fragment>
            <span className="app-component-text thq-body-small">
              Run Darius
            </span>
          </Fragment>
        }
      ></ContactForm5>
    </div>
  )
}

export default AppComponent
