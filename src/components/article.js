import { Fragment } from 'react'

import PropTypes from 'prop-types'

import './article.css'

const Article = (props) => {
  return (
    <section className={`article-card ${props.rootClassName} `}>
      <main className="article-content">
        <header className="article-header">
          <h1 className="article-header1">{props.header}</h1>
        </header>
        <div className="article-container">
          <span>
            {props.text ?? (
              <Fragment>
                <span className="article-text07">Status:</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="article-container1">
          <span>
            {props.text2 ?? (
              <Fragment>
                <span className="article-text06">Date:</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="article-container2">
          <span>
            {props.text21 ?? (
              <Fragment>
                <span className="article-text17">Target Country:</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="article-button">
          <p>
            {props.text3 ?? (
              <Fragment>
                <a
                  href={props.ce31105c7c2b4bf18d619d6ba8c97e6b}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="article-text11">
                    <br></br>
                    <span>Read Full report</span>
                  </p>
                </a>
              </Fragment>
            )}
          </p>
          {/* <p>
            {props.text31 ?? (
              <Fragment>
                <a
                  href={props.ce31105c7c2b4bf18d619d6ba8c97e6b}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="article-text08">
                    <span>View sections</span>
                    <br></br>
                  </p>
                </a>
              </Fragment>
            )}
          </p> */}
          <p>
            {props.text311 ?? (
              <Fragment>
                <a
                  href={props.ce31105c7c2b4bf18d619d6ba8c97e6b}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="article-text14">
                    <span>Download PDF</span>
                    <br></br>
                  </p>
                </a>
              </Fragment>
            )}
          </p>
        </div>
      </main>
    </section>
  )
}

Article.defaultProps = {
  text2: undefined,
  text: undefined,
  text31: undefined,
  text3: undefined,
  text311: undefined,
  text21: undefined,
  rootClassName: '',
  header: 'Report Name',
}

Article.propTypes = {
  text2: PropTypes.element,
  text: PropTypes.element,
  text31: PropTypes.element,
  text3: PropTypes.element,
  text311: PropTypes.element,
  text21: PropTypes.element,
  rootClassName: PropTypes.string,
  header: PropTypes.string,
}

export default Article
