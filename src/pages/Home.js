import React, { useEffect } from 'react'
import '../styles/pages/Home.css';

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
    <section id='home'>
      <div className="nameContainer">
        <h4>&lt;developer&gt;</h4>
        <p data-anime='left'>Edson<br/>Lucas</p>
        <h4>&lt;/developer&gt;</h4>
      </div>
      
      <img data-anime='down' src="/fotoPortfolio.png"  alt="profile avatar"/>

      <div className="aboutContainer">
        <h5>&lt;about_me&gt;</h5>
        <p data-anime='left'>Aspirante a <br/>programador full stack</p>
        <p data-anime='right'>Gamer</p>
        <p data-anime='left'>Amante de séries</p>
        <h5>&lt;/about_me&gt;</h5>
      </div>
    </section>
  )
}
