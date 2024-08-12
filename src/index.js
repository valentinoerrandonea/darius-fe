import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import './style.css'
import MyReports from './views/my-reports'
import GenerateYourReport from './views/generate-your-report'
import Home from './views/home'
import MyAccount from './views/my-account'
import SignUp from './views/sign-up'
import SignIn from './views/sign-in'
import NotFound from './views/not-found'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MyReports />} exact path="/my-reports" />
        <Route
          element={<GenerateYourReport/>}
          exact
          path="/generate-your-report"
        />
        <Route element={<Home />} exact path="/" />
        <Route element={<MyAccount/>} exact path="/my-account" />
        <Route element={<SignUp/>} exact path="/sign-up" />
        <Route element={<SignIn/>} exact path="/sign-in" />
        <Route component={<NotFound/>} path="**" />
        {/* <Navigate to="**" /> */}

      </Routes>
    </Router>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
