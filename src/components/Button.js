import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/Button.css';

export default function Button({iconName, link}) {
  return (
    <a href={link} target='blank'>
      <FontAwesomeIcon icon={iconName}/>
    </a>
  )
}
