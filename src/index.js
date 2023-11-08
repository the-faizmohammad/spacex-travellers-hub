import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyProfileSetup from './MyProfileSetup'; // Create this component later

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const AppRouter=()=> {
  return (
    <Router>
      <Switch>
        <Route exact path="/my-profile-setup" component={MyProfileSetup} />
        
      </Switch>
    </Router>
  );
}

export default AppRouter;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
