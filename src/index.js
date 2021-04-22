import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom';

import './styles/index.css';
import Menu from './components/Menu';


ReactDOM.render(
   (
    <Router>
      {/* <Menu /> */}
      <App/>
    </Router>
  ),
  document.getElementById('root')
);
