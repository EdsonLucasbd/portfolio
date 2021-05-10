import React, {useEffect} from 'react';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import Button from './components/Button';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './styles/app.css';

function App() {

  useEffect(() => {
    const menuItems = document.querySelectorAll('.pages a');

    const scrollToPosition = (to) => {
      window.scroll({
        top: to,
        behavior: 'smooth',
      });
    }
  
    const getScrollTop = (element) => {
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
    }
  
    const scrollOnClick = (event) => {
      event.preventDefault();
      const to = getScrollTop(event.target);
  
      scrollToPosition(to);
    }

    menuItems.forEach(item => {
      item.addEventListener('click', scrollOnClick);
    })

  },[]);
  
  return (
    <div className='containter'>
      <nav className='menuContainer'>
        <div className='pages'>
          <a href='#home'>&lt;home&gt;</a>
          <a href='#tecnologies'>&lt;tecnologies&gt;</a>
          <a href='#projects'>&lt;projects&gt;</a>
          <a href='#contact'>&lt;contact&gt;</a>
        </div>
        <div className='contacts'>
          <Button iconName={faGithub} link={'https://github.com/EdsonLucasbd'}/>
          <Button iconName={faLinkedinIn} link={'https://www.linkedin.com/in/edson-lucas-b9310415b/'}/>
        </div>
      </nav>

      <Home />

      <Experiences />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
