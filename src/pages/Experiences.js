import React from 'react'
import '../styles/pages/Experiences.css';

export default function Experiences() {
  
  return (
    <section id='experiences'>
      <div className='expContainer'>
        <h5>&lt;experiences&gt;</h5>

        <div className='line'/>

        <div className="firstExpContainer">
          <div className='circle'/>
          <p id='year'>2020-2021</p>
          <p id='expInfo'>
            Estágio<br/>Suporte técnico<br/>
            SoftLine sistemas.
          </p>
        </div>
        
        <div className="secondExpContainer">
          <div className='circle2'/>
          <p id='year'>2021-Atualmente</p>
          <p id='expInfo'>
            Estágio<br/>Backend developer<br/>
            Pense Pack.
          </p>
        </div>
        
        <h5>&lt;/experiences&gt;</h5>
      </div>

      <div className='tecnologiesContainer'>
        <h5>&lt;tecnologies&gt;</h5>
        <p id='js'>JS</p>
        <p id='react'>React</p>
        <p id='reactNative'>React Native</p>
        <p id='python'>Python</p>
        <h5>&lt;/tecnologies&gt;</h5>
      </div>
    </section>
  )
}
