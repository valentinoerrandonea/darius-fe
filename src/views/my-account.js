import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar';
import TableUsers from '../components/table-users';
import ContactForm51 from '../components/contact-form51';
import useUsers from '../hooks/useUsers';  // Assuming your hook is in a hooks directory
import './my-account.css';

const MyAccount = () => {
  const API = process.env.REACT_APP_API;
  const { users, getUsers } = useUsers(API); // Use the custom hook here

  return (
    <div className="my-account-container">
      <Helmet>
        <title>My-account - Planical modern template</title>
        <meta property="og:title" content="My-account - Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <div className="my-account-container1">
        <div className="my-account-container2">
          <ContactForm51 getUsers={getUsers} />
          <TableUsers users={users} getUsers={getUsers} />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
