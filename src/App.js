import React from 'react';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import Button from './components/Button';

import './styles/app.css';

function App() {
  return (
    <div className='containter'>
      <nav className='menuContainer'>
        <div className='pages'>
          <a href='#home'>&lt;home&gt;</a>
          <a href='#experiences'>&lt;experiences&gt;</a>
          <a href='#projects'>&lt;projects&gt;</a>
        </div>
        <div className='contacts'>
          <Button iconName={faGithub}/>
          <Button iconName={faLinkedinIn}/>
          <Button iconName={faEnvelope}/>
        </div>
      </nav>

      <section id='home'>
        <h1>Home</h1>
        <img src="/fotoPortfolio.png" alt="profile avatar"/>
      </section>

      <section id='experiences'>
        <h1>Minhas experiências profissionais</h1>
      </section>

      <section id='projects'>
        <h1>Meus projetos</h1>
      </section>
    </div>
  );
}

export default App;
