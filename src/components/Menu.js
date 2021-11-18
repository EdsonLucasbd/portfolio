import React, { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../hook/hook';

import '../styles/components/Menu.css';
import Burger from './BurgerMenu/Burger';
import MobileMenu from './BurgerMenu/MobileMenu';

export default function Menu() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    if(window.innerWidth <= 650) {
      setIsMobile(true);
    }
  }, []);

  if(!isMobile) {
    return (
      <div className='pages'>
        <a href='#home'>&lt;home&gt;</a>
        <a href='#technologies'>&lt;technologies&gt;</a>
        <a href='#projects'>&lt;projects&gt;</a>
        <a href='#contact'>&lt;contact&gt;</a>
      </div>
    )
  }
  else {
    return (
      <div ref={node}>
        <Burger open={open} setOpen={setOpen}/>
        <MobileMenu open={open} setOpen={setOpen}/>
      </div>
    )
  }
  
}