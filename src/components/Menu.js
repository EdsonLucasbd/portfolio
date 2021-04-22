import React from 'react';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

import Button from '../components/Button';

import '../styles/components/Menu.css';

export default function Menu() {
    return (
			<div className="menuContainer">
        <div className="pages">
          <Link to='/'>&lt;home&gt;</Link>
          <Link to='/experiences'>&lt;experiences&gt;</Link>
          <Link to='/projects'>&lt;projects&gt;</Link>
        </div>
        <div className="contacts">
         <Button iconName={faGithub}/>
         <Button iconName={faLinkedinIn}/>
         <Button iconName={faEnvelope}/>
        </div>
      </div>
    );
}