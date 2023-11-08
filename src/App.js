import logo from './logo.svg';
import './App.css';
import MyProfileSetup from './MyProfileSetup'; // Import your MyProfileSetup component
import Navigation from './Navigation';
import { Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation /> 
      <Switch>
      <Route exact path="/my-profile-setup" component={MyProfileSetup} />
      </Switch>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Router>
    </div>
  );
}

export default App;
