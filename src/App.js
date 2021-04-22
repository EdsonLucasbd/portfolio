import React from 'react';
import Menu from './components/Menu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';

import './styles/app.css';

function App() {
  return (
    <div className="container">
      <Menu />
      <Router>
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
    </Router>
    </div>
  );
}

export default App;
