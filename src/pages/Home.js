import React from 'react'
import '../styles/pages/Home.css';

export default function Home() {
  return (
    <section id='home'>
      <div className="nameContainer">
        <h5>&lt;developer&gt;</h5>
        <p>Edson<br/>Lucas</p>
        <h5>&lt;/developer&gt;</h5>
      </div>
      
      <img src="/fotoPortfolio.png" alt="profile avatar"/>

      <div className="aboutContainer">
        <h5>&lt;about_me&gt;</h5>
        <p>Aspirante a programador full stack</p>
        <p>Gamer</p>
        <p>Amante de séries</p>
        <h5>&lt;/about_me&gt;</h5>
      </div>
    </section>
  )
}
