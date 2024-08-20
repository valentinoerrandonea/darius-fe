import React from 'react'

import { useState, Fragment } from 'react'

// import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
// import ContentList5 from '../components/content-list5'
import '../components/content-list5.css'

import TableUsers from '../components/table-users'


import ContactForm51 from '../components/contact-form51'

import './my-account.css'
const API = process.env.REACT_APP_API;


const MyAccount = (props) => {

  
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const res = await fetch(`${API}/profile/search_users`);
      if (!res.ok) {
        throw new Error('Error fetching users');
      }
      const data = await res.json();
      console.log(data);
      setUsers(data); // Actualiza la lista de usuarios en el componente padre
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  return (
    <div className="my-account-container">
      <Helmet>
        <title>My-account - Planical modern template</title>
        <meta
          property="og:title"
          content="My-account - Planical modern template"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      {/* <ContentList5
        heading6={
          <Fragment>
            <h1 className="my-account-text thq-heading-3">Cookies</h1>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="my-account-text01">Company Settings</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="my-account-text02 thq-heading-2">
              AI Report Generator for Market Reports
            </h1>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="my-account-text03">User Settings</span>
          </Fragment>
        }
        heading12={
          <Fragment>
            <h1 className="my-account-text04 thq-heading-3">
              Damages and issues
            </h1>
          </Fragment>
        }
        heading11={
          <Fragment>
            <h1 className="my-account-text05 thq-heading-3">General</h1>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="my-account-text06 thq-body-small">
              Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur
              internos qui minima rerum ut molestias laudantium aut iusto
              deserunt. Aut voluptatibus excepturi qui officia laudantium est
              repellendus tempore hic sunt debitis. Ut galisum tempore in enim
              fugit eum pariatur possimus est tenetur nemo et sint sint et
              dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga
              aliquid. Est omnis praesentium ut nisi internos rem quod totam et
              similique quis. Est tempore cumque aut recusandae labore qui error
              molestiae et possimus quia! Eum Quis asperiores non nihil tempora
              qui quia voluptatem aut aspernatur aspernatur aut asperiores
              labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut
              temporibus culpa sit dignissimos quaerat eum architecto voluptatum
              et nemo velit At harum harum.
            </span>
          </Fragment>
        }
        content12={
          <Fragment>
            <span className="my-account-text07 thq-body-small">
              Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
              tempore aut ipsam iusto in sunt repellat ex voluptatum inventore
              ab facilis galisum ea consequatur consequuntur. Ab voluptas
              voluptatem eum consequatur aspernatur non laboriosam atque est
              labore asperiores a neque quos. Ea nemo modi hic dicta saepe et
              veritatis maiores At praesentium aliquid. Sed dolores architecto
              non doloribus quia eos consectetur commodi non tenetur vitae est
              neque omnis. Non perspiciatis velit At aliquam rerum ut officiis
              ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores
              tempora in officiis sunt eum voluptatem tenetur sit iste
              reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut
              esse sunt ad saepe maiores vel perferendis veritatis. Ex magni
              fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora
              doloribus sed accusantium nobis eum praesentium quod.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="my-account-text08 thq-body-small">
              Customize your reports with various templates and data
              visualization options.
            </p>
          </Fragment>
        }
        heading3={
          <Fragment>
            <h1 className="my-account-text09 thq-heading-3">Pricing</h1>
          </Fragment>
        }
        heading10={
          <Fragment>
            <h1 className="my-account-text10 thq-heading-2">Refund Policy</h1>
          </Fragment>
        }
        heading13={
          <Fragment>
            <h1 className="my-account-text11 thq-heading-3">Refunds</h1>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="my-account-text12 thq-body-small">
              Lorem ipsum dolor sit amet. Ut cumque cupiditate eos perferendis
              tempora et ullam quis qui fugiat necessitatibus qui quia dolorem
              33 earum reprehenderit eum rerum blanditiis. Et vitae distinctio
              33 magni ratione ut odit rerum est nihil error et minus dolor quo
              harum fugiat. Eos quam assumenda id fugit optio aut magni sunt! Ut
              iure aliquam vel velit modi sit voluptatibus atque ut corporis
              sint sit omnis enim a pariatur officiis aut nulla voluptate. In
              facere incidunt aut sapiente maxime qui quibusdam facilis non
              officia consectetur sit laboriosam libero aut cupiditate possimus
              ut sunt reiciendis. Et repudiandae magnam aut quaerat ipsam aut
              repellat laboriosam. Ab facilis deleniti ut voluptas molestiae sed
              omnis maiores ut aliquid culpa vel nesciunt saepe. Aut placeat
              aspernatur aut alias nihil vel neque recusandae et corrupti
              accusantium ab quod temporibus ut nulla eaque et magnam nemo. Ad
              sunt minus rem earum delectus hic officia iste qui sunt quos non
              officiis illo vel doloribus perspiciatis. Ab soluta eius sed
              quidem dolores rem necessitatibus minus 33 minus commodi. Nam
              repudiandae libero non laboriosam voluptate et saepe fuga vel
              repudiandae pariatur aut assumenda illo.
            </span>
          </Fragment>
        }
        heading5={
          <Fragment>
            <h1 className="my-account-text13 thq-heading-3">
              Campaign tracking
            </h1>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="my-account-text14 thq-body-small">
              Generate professional market reports using advanced AI technology.
            </span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="my-account-text15">Contact Us</span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="my-account-text16 thq-body-small">
              Have questions or need assistance? Reach out to our support team.
            </span>
          </Fragment>
        }
        content13={
          <Fragment>
            <span className="my-account-text17 thq-body-small">
              Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam
              tempore aut ipsam iusto in sunt repellat ex voluptatum inventore
              ab facilis galisum ea consequatur consequuntur. Ab voluptas
              voluptatem eum consequatur aspernatur non laboriosam atque est
              labore asperiores a neque quos. Ea nemo modi hic dicta saepe et
              veritatis maiores At praesentium aliquid. Sed dolores architecto
              non doloribus quia eos consectetur commodi non tenetur vitae est
              neque omnis. Non perspiciatis velit At aliquam rerum ut officiis
              ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores
              tempora in officiis sunt eum voluptatem tenetur sit iste
              reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut
              esse sunt ad saepe maiores vel perferendis veritatis. Ex magni
              fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora
              doloribus sed accusantium nobis eum praesentium quod.
            </span>
          </Fragment>
        }
        content10={
          <Fragment>
            <span className="my-account-text18 thq-body-small">
              Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam
              voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque!
              Qui accusamus assumenda et molestias eius et error sunt. Id
              recusandae nostrum ea officiis voluptatem in nisi consequatur sed
              quia tenetur sit alias molestias qui illum soluta. Est nesciunt
              perferendis eum sint rerum 33 cupiditate dolorem id corrupti
              laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur.
              Et nobis quasi et cumque adipisci aut molestiae eligendi quo
              inventore dicta ea suscipit sequi sed veritatis nemo.
            </span>
          </Fragment>
        }
        content6={
          <Fragment>
            <span className="my-account-text19 thq-body-small">
              Ut doloremque aliquam qui veniam deserunt sit voluptates iusto et
              unde quod ut quam unde ut nemo eius! Ut saepe consequuntur non
              quibusdam soluta aut maiores eaque et rerum error nam incidunt
              saepe aut nihil voluptatem. 33 nulla quaerat est doloremque
              voluptatem ut libero magnam id placeat aliquid. Ea minus totam est
              inventore minus sed temporibus aperiam At ratione maiores eum
              libero consequatur aut laborum exercitationem.
            </span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <h1 className="my-account-text20 thq-heading-3">Contact Us</h1>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="my-account-text21 thq-body-small">
              Choose a plan that fits your needs and budget.
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <h1 className="my-account-text22 thq-heading-3">Features</h1>
          </Fragment>
        }
        setUsers={setUsers}
        getUsers={getUsers}
      >
    </ContentList5> */}
      <div className="my-account-container1">
        <div className="my-account-container2">
          {/* <Script
            html={`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Admin Panel</title>
                    
                </head>
                <body>
                    
                </body>
                </html>`}
          ></Script> */}
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
          setUsers={setUsers}
          getUsers={getUsers}
        ></ContactForm51>
        <TableUsers getUsers={getUsers} users={users } />
        </div>
      </div>
    </div>
  )
}

export default MyAccount
