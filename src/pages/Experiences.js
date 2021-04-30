import React, { useEffect } from 'react'
import '../styles/pages/Experiences.css';

export default function Experiences() {

  useEffect(() => {
    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    const animeScroll = () => {
      const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
      target.forEach(function(element) {
        if (windowTop > element.offsetTop) {
          element.classList.add(animationClass)
        }
        else element.classList.remove(animationClass);
      })
    }

    if(target.length) {
      window.addEventListener('scroll', animeScroll)
      }
  },[]);
  
  return (
    <section id='experiences'>
      <div className='expContainer'>
        <h4>&lt;experiences&gt;</h4>

        <div className='line' data-anime='up'/>

        <div className="firstExpContainer" data-anime='right'>
          <div className='circle'/>
          <p id='year'>2020-2021</p>
          <p id='expInfo'>
            Estágio<br/>Suporte técnico<br/>
            SoftLine sistemas.
          </p>
        </div>
        
        <div className="secondExpContainer" data-anime='left'>
          <div className='circle2'/>
          <p id='year'>2021-Now</p>
          <p id='expInfo'>
            Estágio<br/>Backend developer<br/>
            Pense Pack.
          </p>
        </div>
        
        <h4>&lt;/experiences&gt;</h4>
      </div>

      <div className='tecnologiesContainer'>
        <h4>&lt;tecnologies&gt;</h4>
        <p id='js'data-anime='left'>JS</p>
        <p id='react'data-anime='right'>React</p>
        <p id='reactNative'data-anime='left'>React Native</p>
        <p id='python'data-anime='right'>Python</p>
        <h4>&lt;/tecnologies&gt;</h4>
      </div>
    </section>
  )
}
