import React, { useEffect } from 'react'
import '../styles/pages/Home.css';
import '../styles/static/blobz.css'

export default function Home() {

  useEffect(() => {
    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';
    const section = document.querySelector('#home');

    const animation = () => {
      const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
      target.forEach(function(element) {
        if (windowTop > element.offsetTop) {
          element.classList.add(animationClass);
        }
        else element.classList.remove(animationClass);
      })
    }

    animation();

    if(target.length) {
      section.addEventListener('load', animation);
    }

  },[]);

  return (
    <div id='home'>
      <div className="nameContainer">
        <h4>&lt;developer&gt;</h4>
        <p data-anime='left'>Edson<br/>Lucas</p>
        <h4>&lt;/developer&gt;</h4>
      </div>

    <div className="avatarContainer">
      <img data-anime='down' src="/fotoPortfolio.png"  alt="profile avatar" className='avatar'/>

      <div className="tk-blob" id="blob">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
          <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
        </svg>
      </div>
    </div>

      {/* <img src="/smoke1.png" alt="smoke" className='smoke'/> */}

      <div className="aboutContainer">
        <h5>&lt;about_me&gt;</h5>
        <p data-anime='left'>Estudante de sistemas <br/>de informação na Universidade <br/>do estado da Bahia.</p>
        <p data-anime='right'>Programador front-end <br/>e mobile.</p>
        <p data-anime='left'>Gamer.</p>
        <p data-anime='right'>Amante de séries.</p>
        <h5>&lt;/about_me&gt;</h5>
      </div>
    </div>
  )
}
