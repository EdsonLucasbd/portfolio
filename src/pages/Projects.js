import React from 'react';

import Project from '../components/Project';

import qs from 'qs';

import { useFetch } from '../hook/useFetch';

import '../styles/pages/Projects.css';

export default function Projects() {
  const query = qs.stringify({
    populate: [
      'body',
      'body.project',
      'body.project.projectIcon'
    ]
  }, {
    encodeValuesOnly: true,
  });

  const { loading, result } = useFetch(`https://portfolio-backend-cms.herokuapp.com/api/pages/3?${query}`);

  return (
    <div id='projects'>
      <h4>&lt;projects&gt;</h4>
      <div className="blockContainer" data-anime='left'>
        {loading === false ? result.attributes.body[0].project.map((project) => {
          return (
            <Project
              key={project.id}
              link={project.projectLink}
              image={project.projectIcon.data.attributes.url}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
            />
          )
        })
        : <p>Carregando...</p>
      }
      </div>
      <h4>&lt;/projects&gt;</h4>
    </div>
  )
}
