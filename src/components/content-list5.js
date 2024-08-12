import  { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import ContactForm51 from './contact-form51'
import './content-list5.css'


const ContentList5 = (props) => {
  console.log(props.setUsers)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  return (
    <div className="content-list5-container thq-section-padding">
      <div className="content-list5-max-width thq-flex-column thq-section-max-width">
        {/* <div className="content-list5-container1 thq-section-max-width thq-flex-row">
          {isTermsVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsPrivacyVisible(false)
                setIsTermsVisible(true)
              }}
              className="content-list5-button thq-button-filled"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="content-list5-text10">User Settings</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isTermsVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsTermsVisible(true)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="content-list5-text10">User Settings</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isPrivacyVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsRefundVisible(false)
                setIsPrivacyVisible(true)
              }}
              className="content-list5-button2 thq-button-outline"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="content-list5-text08">
                      Company Settings
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsPrivacyVisible(true)
                setIsRefundVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="content-list5-text08">
                      Company Settings
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isRefundVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(true)
                setIsTermsVisible(false)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="content-list5-text22">Contact Us</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="content-list5-container2 thq-flex-column">
          {isTermsVisible && <div className="content-list5-container3"></div>}
          {isPrivacyVisible && (
            <div className="content-list5-container4">
              <ul className="thq-flex-column">
                <li className="content-list5-li list-item thq-flex-column">
                  <h1>
                    {props.heading1 ?? (
                      <Fragment>
                        <h1 className="content-list5-text09 thq-heading-2">
                          AI Report Generator for Market Reports
                        </h1>
                      </Fragment>
                    )}
                  </h1>
                  <span>
                    {props.content1 ?? (
                      <Fragment>
                        <span className="content-list5-text21 thq-body-small">
                          Generate professional market reports using advanced AI
                          technology.
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list5-ul1 thq-flex-column">
                    <li className="list-item">
                      <h1>
                        {props.heading2 ?? (
                          <Fragment>
                            <h1 className="content-list5-text29 thq-heading-3">
                              Features
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content2 ?? (
                          <Fragment>
                            <p className="content-list5-text15 thq-body-small">
                              Customize your reports with various templates and
                              data visualization options.
                            </p>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading3 ?? (
                          <Fragment>
                            <h1 className="content-list5-text16 thq-heading-3">
                              Pricing
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content3 ?? (
                          <Fragment>
                            <span className="content-list5-text28 thq-body-small">
                              Choose a plan that fits your needs and budget.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading4 ?? (
                          <Fragment>
                            <h1 className="content-list5-text27 thq-heading-3">
                              Contact Us
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content4 ?? (
                          <Fragment>
                            <span className="content-list5-text23 thq-body-small">
                              Have questions or need assistance? Reach out to
                              our support team.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading5 ?? (
                          <Fragment>
                            <h1 className="content-list5-text20 thq-heading-3">
                              Campaign tracking
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content5 ?? (
                          <Fragment>
                            <span className="content-list5-text19 thq-body-small">
                              Lorem ipsum dolor sit amet. Ut cumque cupiditate
                              eos perferendis tempora et ullam quis qui fugiat
                              necessitatibus qui quia dolorem 33 earum
                              reprehenderit eum rerum blanditiis. Et vitae
                              distinctio 33 magni ratione ut odit rerum est
                              nihil error et minus dolor quo harum fugiat. Eos
                              quam assumenda id fugit optio aut magni sunt! Ut
                              iure aliquam vel velit modi sit voluptatibus atque
                              ut corporis sint sit omnis enim a pariatur
                              officiis aut nulla voluptate. In facere incidunt
                              aut sapiente maxime qui quibusdam facilis non
                              officia consectetur sit laboriosam libero aut
                              cupiditate possimus ut sunt reiciendis. Et
                              repudiandae magnam aut quaerat ipsam aut repellat
                              laboriosam. Ab facilis deleniti ut voluptas
                              molestiae sed omnis maiores ut aliquid culpa vel
                              nesciunt saepe. Aut placeat aspernatur aut alias
                              nihil vel neque recusandae et corrupti accusantium
                              ab quod temporibus ut nulla eaque et magnam nemo.
                              Ad sunt minus rem earum delectus hic officia iste
                              qui sunt quos non officiis illo vel doloribus
                              perspiciatis. Ab soluta eius sed quidem dolores
                              rem necessitatibus minus 33 minus commodi. Nam
                              repudiandae libero non laboriosam voluptate et
                              saepe fuga vel repudiandae pariatur aut assumenda
                              illo.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading6 ?? (
                          <Fragment>
                            <h1 className="content-list5-text07 thq-heading-3">
                              Cookies
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content6 ?? (
                          <Fragment>
                            <span className="content-list5-text26 thq-body-small">
                              Ut doloremque aliquam qui veniam deserunt sit
                              voluptates iusto et unde quod ut quam unde ut nemo
                              eius! Ut saepe consequuntur non quibusdam soluta
                              aut maiores eaque et rerum error nam incidunt
                              saepe aut nihil voluptatem. 33 nulla quaerat est
                              doloremque voluptatem ut libero magnam id placeat
                              aliquid. Ea minus totam est inventore minus sed
                              temporibus aperiam At ratione maiores eum libero
                              consequatur aut laborum exercitationem.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isRefundVisible && (
            <div className="content-list5-container5">
              <ul className="thq-flex-column">
                <li className="content-list5-li06 list-item thq-flex-column">
                  <h1>
                    {props.heading10 ?? (
                      <Fragment>
                        <h1 className="content-list5-text17 thq-heading-2">
                          Refund Policy
                        </h1>
                      </Fragment>
                    )}
                  </h1>
                  <span>
                    {props.content10 ?? (
                      <Fragment>
                        <span className="content-list5-text25 thq-body-small">
                          Lorem ipsum dolor sit amet. Vel dolores illum est
                          aperiam quis nam voluptatem quia et omnis autem qui
                          dolore ullam sed fugiat cumque! Qui accusamus
                          assumenda et molestias eius et error sunt. Id
                          recusandae nostrum ea officiis voluptatem in nisi
                          consequatur sed quia tenetur sit alias molestias qui
                          illum soluta. Est nesciunt perferendis eum sint rerum
                          33 cupiditate dolorem id corrupti laboriosam ut
                          debitis veniam ut ipsam fugit vel sunt consequatur. Et
                          nobis quasi et cumque adipisci aut molestiae eligendi
                          quo inventore dicta ea suscipit sequi sed veritatis
                          nemo.
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list5-ul3 thq-flex-column">
                    <li className="list-item">
                      <h1>
                        {props.heading11 ?? (
                          <Fragment>
                            <h1 className="content-list5-text12 thq-heading-3">
                              General
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content11 ?? (
                          <Fragment>
                            <span className="content-list5-text13 thq-body-small">
                              Lorem ipsum dolor sit amet. Nam nihil facilis sit
                              consequuntur internos qui minima rerum ut
                              molestias laudantium aut iusto deserunt. Aut
                              voluptatibus excepturi qui officia laudantium est
                              repellendus tempore hic sunt debitis. Ut galisum
                              tempore in enim fugit eum pariatur possimus est
                              tenetur nemo et sint sint et dolores Quis. Aut
                              illum perspiciatis rem architecto culpa et fuga
                              aliquid. Est omnis praesentium ut nisi internos
                              rem quod totam et similique quis. Est tempore
                              cumque aut recusandae labore qui error molestiae
                              et possimus quia! Eum Quis asperiores non nihil
                              tempora qui quia voluptatem aut aspernatur
                              aspernatur aut asperiores labore et sapiente
                              quaerat qui suscipit quia. Ea nesciunt iste aut
                              temporibus culpa sit dignissimos quaerat eum
                              architecto voluptatum et nemo velit At harum
                              harum.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading12 ?? (
                          <Fragment>
                            <h1 className="content-list5-text11 thq-heading-3">
                              Damages and issues
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content12 ?? (
                          <Fragment>
                            <span className="content-list5-text14 thq-body-small">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1>
                        {props.heading13 ?? (
                          <Fragment>
                            <h1 className="content-list5-text18 thq-heading-3">
                              Refunds
                            </h1>
                          </Fragment>
                        )}
                      </h1>
                      <span>
                        {props.content13 ?? (
                          <Fragment>
                            <span className="content-list5-text24 thq-body-small">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div> */}
        <ContactForm51
          heading1={
            <Fragment>
              <h2 className="content-list5-text05 thq-heading-2">
                Create new user
              </h2>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="content-list5-text06 thq-body-small">
                Create User
              </span>
            </Fragment>
          }
          setUsers={props.setUsers}
          getUsers={props.getUsers}
        ></ContactForm51>
      </div>
    </div>
  )
}

ContentList5.defaultProps = {
  heading6: undefined,
  button1: undefined,
  heading1: undefined,
  button: undefined,
  heading12: undefined,
  heading11: undefined,
  content11: undefined,
  content12: undefined,
  content2: undefined,
  heading3: undefined,
  heading10: undefined,
  heading13: undefined,
  content5: undefined,
  heading5: undefined,
  content1: undefined,
  button2: undefined,
  content4: undefined,
  content13: undefined,
  content10: undefined,
  content6: undefined,
  heading4: undefined,
  content3: undefined,
  heading2: undefined,
}

ContentList5.propTypes = {
  heading6: PropTypes.element,
  button1: PropTypes.element,
  heading1: PropTypes.element,
  button: PropTypes.element,
  heading12: PropTypes.element,
  heading11: PropTypes.element,
  content11: PropTypes.element,
  content12: PropTypes.element,
  content2: PropTypes.element,
  heading3: PropTypes.element,
  heading10: PropTypes.element,
  heading13: PropTypes.element,
  content5: PropTypes.element,
  heading5: PropTypes.element,
  content1: PropTypes.element,
  button2: PropTypes.element,
  content4: PropTypes.element,
  content13: PropTypes.element,
  content10: PropTypes.element,
  content6: PropTypes.element,
  heading4: PropTypes.element,
  content3: PropTypes.element,
  heading2: PropTypes.element,
}

export default ContentList5
