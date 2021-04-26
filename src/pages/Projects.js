import React from 'react'
import Project from '../components/Project';

import '../styles/pages/Projects.css';

export default function Projects() {
  return (
    <section id='projects'>
      <h4>&lt;projects&gt;</h4>
      <div className="blockContainer">
        <Project link={"https://takecare-edsonlucasbd.vercel.app/"} image={'/projectsIcons/takecare.png'} />
        <Project link={"https://best-desafio-final.herokuapp.com/"} image={'/projectsIcons/cfpicon.png'} />
      </div>
      <h4>&lt;/projects&gt;</h4>
    </section>
  )
}
