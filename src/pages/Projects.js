import React from 'react';
import ReactTooltip from "react-tooltip";

import Project from '../components/Project';

import '../styles/pages/Projects.css';

export default function Projects() {
  return (
    <section id='projects'>
      <h4>&lt;projects&gt;</h4>
      <div className="blockContainer">
        <Project link={"https://takecare-edsonlucasbd.vercel.app/"} image={'/projectsIcons/takecare.png'} tooltipId={'takeCare'}/>
        <ReactTooltip id='takeCare' place='top' multiline={true}>
          Take Care: <br/> 
          App baseado na <br/>
          técnica pomodoro<br/>
          para quem passa muito<br/>
          tempo em frente ao PC.
        </ReactTooltip>

        <Project link={"https://best-desafio-final.herokuapp.com/"} image={'/projectsIcons/cfpicon.png'} tooltipId={'cfp'}/>
        <ReactTooltip id='cfp' place='top' multiline={true}>
          Controle de finanças pessoais: <br/>
          App que usa uma base <br/>
          de dados ficticia para fazer <br/>
          o balanço de despesas mensais. <br/>
          Podendo receber novos dados, <br/>
          editar ou excluir os existentes.
        </ReactTooltip>

      </div>
      <h4>&lt;/projects&gt;</h4>
    </section>
  )
}
