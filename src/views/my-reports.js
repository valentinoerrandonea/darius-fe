import { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Article from '../components/article'
import './my-reports.css'

const MyReports = (props) => {
  return (
    <div className="my-reports-container">
      <Helmet>
        <title>My-reports - Planical modern template</title>
        <meta
          property="og:title"
          content="My-reports - Planical modern template"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <section className="my-reports-section">
        <header className="my-reports-header">
          <span className="my-reports-section1 section-head">darius</span>
          <h2 className="my-reports-heading section-heading">My Reports</h2>
        </header>
        <main className="my-reports-cards">
          <Article
            text={
              <Fragment>
                <span className="my-reports-text">Status:</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="my-reports-text01">Date:</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <p className="my-reports-text02">
                  <span>Read Full Report</span>
                  <br></br>
                </p>
              </Fragment>
            }
            button="Read -&gt;"
            header="Report Name"
            text21={
              <Fragment>
                <span className="my-reports-text05">Target Country:</span>
              </Fragment>
            }
            // text31={
            //   <Fragment>
            //     <p className="my-reports-text06">
            //       <span>View sections</span>
            //       <br></br>
            //     </p>
            //   </Fragment>
            // }
            text311={
              <Fragment>
                <p className="my-reports-text09">
                  <span>Download PDF</span>
                  <br></br>
                </p>
              </Fragment>
            }
            rootClassName="article-root-class-name6"
          ></Article>
          <Article
            text={
              <Fragment>
                <span className="my-reports-text12">Status:</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="my-reports-text13">Date:</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <p className="my-reports-text14">
                  <br></br>
                  <span>Read Full report</span>
                </p>
              </Fragment>
            }
            header="Report Name"
            text21={
              <Fragment>
                <span className="my-reports-text17">Target Country:</span>
              </Fragment>
            }
            // text31={
            //   <Fragment>
            //     <p className="my-reports-text18">
            //       <span>View sections</span>
            //       <br></br>
            //     </p>
            //   </Fragment>
            // }
            text311={
              <Fragment>
                <p className="my-reports-text21">
                  <span>Download PDF</span>
                  <br></br>
                </p>
              </Fragment>
            }
            specialHeader="eu"
            rootClassName="article-root-class-name7"
          ></Article>
          <Article
            text={
              <Fragment>
                <span className="my-reports-text24">Status:</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="my-reports-text25">Date:</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <p className="my-reports-text26">
                  <span>Read Full report</span>
                  <br></br>
                </p>
              </Fragment>
            }
            header="Report Name"
            text21={
              <Fragment>
                <span className="my-reports-text29">Target Country:</span>
              </Fragment>
            }
            // text31={
            //   <Fragment>
            //     <p className="my-reports-text30">
            //       <span>View sections</span>
            //       <br></br>
            //     </p>
            //   </Fragment>
            // }
            text311={
              <Fragment>
                <p className="my-reports-text33">
                  <span>Download PDF</span>
                  <br></br>
                </p>
              </Fragment>
            }
            rootClassName="article-root-class-name8"
          ></Article>
        </main>
      </section>
    </div>
  )
}

export default MyReports
