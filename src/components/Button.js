import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/Button.css';

export default function Button({iconName}) {
  return (
    <button>
      <FontAwesomeIcon icon={iconName}/>
    </button>
  )
}
