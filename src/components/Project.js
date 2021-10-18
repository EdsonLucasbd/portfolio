import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

import '../styles/components/Project.css';

export default function Project({link, image, tooltipId}) {
  return (
    <a href={link} target='blank' className='block' data-tip data-for={tooltipId}>
      <img src={image} alt="takeCare icon"/>
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </a>
  )
}
