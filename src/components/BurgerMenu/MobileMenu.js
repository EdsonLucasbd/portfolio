import React from 'react';
import { bool } from 'prop-types';

import '../../styles/components/MobileMenu.css';

const MobileMenu = ({ open }) => {
  const menu = document.querySelector('.MobileMenuContainer')
  open ? menu?.classList.add('open') : menu?.classList.remove('open')
  return (
    <div className="MobileMenuContainer">
      <div className='pages-mobile'>
        <a href='#home'>&lt;home&gt;</a>
        <a href='#technologies'>&lt;technologies&gt;</a>
        <a href='#projects'>&lt;projects&gt;</a>
        <a href='#contact'>&lt;contact&gt;</a>
      </div>
    </div>
  )
}



MobileMenu.propTypes = {
  open: bool.isRequired,
}
export default MobileMenu;