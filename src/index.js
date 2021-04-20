import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './styles/index.css';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  (
    <Router>
      {/* <App> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/experiences">
            <Experiences/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
        </Switch>
      {/* </App> */}
    </Router>
  ),
  document.getElementById('root')
);
