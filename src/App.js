import React from 'react';
import './styles/app.css';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button';

function App() {
  return (
    <div className="container">
      <div className="menuContainer">
        <div className="pages">
          <a href="/">&lt;home&gt;</a>
          <a href="/">&lt;experiences&gt;</a>
          <a href="/">&lt;projects&gt;</a>
        </div>
        <div className="contacts">
         <Button iconName={faGithub}/>
         <Button iconName={faLinkedinIn}/>
         <Button iconName={faEnvelope}/>
        </div>
      </div>
      <img src="/fotoPortfolio.png" alt="profile picture"/>
    </div>
  );
}

export default App;
