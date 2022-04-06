import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";
import Markdown from 'markdown-to-jsx';

import '../styles/components/Project.css';

export default function Project({ link, image, projectName, projectDescription }) {

  return (
    <>
      <a
        href={link}
        target='_blank'
        rel="noreferrer"
        className='block'
        data-tip={`${projectName} tooltip`}
        data-for={projectName}>
        <img src={image} alt={`${projectName} icon`}
        />
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </a>
      <ReactTooltip
        id={projectName}
        className='tooltip'
        place='top'
        multiline
        delayShow={50}
        border
        aria-haspopup='true'
        globalEventOff='click'
      >
        <Markdown>
          {projectDescription}
        </Markdown>
      </ReactTooltip>
    </>
  )
}
