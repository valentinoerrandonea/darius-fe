import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './style.css';
import RequireAuth from './components/Auth/RequireAuth';

const MyReports = lazy(() => import('./views/my-reports'));
const GenerateYourReport = lazy(() => import('./views/generate-your-report'));
const Home = lazy(() => import('./views/home'));
const MyAccount = lazy(() => import('./views/my-account'));
const SignUp = lazy(() => import('./views/sign-up'));
const SignIn = lazy(() => import('./views/sign-in'));
const NotFound = lazy(() => import('./views/not-found'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route element={<SignUp />} exact path="/sign-up" />
          <Route element={<SignIn />} exact path="/sign-in" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Suspense>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
