import React from 'react'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';


import Button from '../components/Button';

import styles from '../styles/components/Menu.module.css';

export default function Menu() {
  return (
      <div className={styles.menuContainer}>
        <div className={styles.pages}>
          <a href='#home'>&lt;home&gt;</a>
          <a href='#experiences'>&lt;experiences&gt;</a>
          <a href='#projects'>&lt;projects&gt;</a>
        </div>
        <div className={styles.contacts}>
          <Button iconName={faGithub}/>
          <Button iconName={faLinkedinIn}/>
          <Button iconName={faEnvelope}/>
        </div>
      </div>
  )
}
