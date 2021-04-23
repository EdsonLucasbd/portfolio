import React from 'react'
import '../styles/pages/Experiences.css';

export default function Experiences() {
  return (
    <section id='experiences'>
      <div className='expContainer'>
        <h5>&lt;experiences&gt;</h5>
        <div className='line'></div>
        <p id='year'>2019-2020</p>
        <div className='circle'></div>
        <div className='circle2'></div>
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
