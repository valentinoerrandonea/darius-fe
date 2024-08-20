import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
 

import './style.css'

import MyReports from './views/my-reports'
import GenerateYourReport from './views/generate-your-report'
import Home from './views/home'
import MyAccount from './views/my-account'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
import NotFound from './views/not-found'
import RequireAuth from './components/Auth/RequireAuth';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/my-reports"
          element={
            <RequireAuth>
              <MyReports />
            </RequireAuth>
          } 
          />
        <Route
          path="/generate-your-report"
          element={
            <RequireAuth>
              <GenerateYourReport />
            </RequireAuth>
          }
        />
        <Route 
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route 
          path="/my-account"
          element={
            <RequireAuth>
              <MyAccount />
            </RequireAuth>
          }
        />

        <Route element={<SignUp/>} exact path="/sign-up" />
        <Route element={<SignIn/>} exact path="/sign-in" />
        <Route element={<NotFound/>} path="**" />
        {/* <Navigate to="**" /> */}

      </Routes>
    </Router>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
