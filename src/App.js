import React, {useEffect} from 'react';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';

import './styles/app.css';

function App() {
  const scrollOnClick = (event) => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;

    window.scroll({
      top: section,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    const menuItems = document.querySelectorAll('.pages a');

    menuItems.forEach(item => {
      item.addEventListener('click', scrollOnClick);
    })

  },[])
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

      <Home />

      <Experiences />

      <Projects />
    </div>
  );
}

export default App;
