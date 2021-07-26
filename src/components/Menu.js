import React, { useEffect, useState } from 'react';

import '../styles/components/Menu.css';

export default function Menu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth <= 650) {
      setIsMobile(true);
    }
  }, []);

 /*  function handleClick() {
    
  } */

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
    console.log('É mobile')
    return (
      <>
       <input type="checkbox"  id="hamburger-menu" />
       <label htmlFor="hamburger-menu">
         <span></span>
         <span></span>
         <span></span>
        <div className='pages-mobile'>
          <a href='#home'>&lt;home&gt;</a>
          <a href='#technologies'>&lt;technologies&gt;</a>
          <a href='#projects'>&lt;projects&gt;</a>
          <a href='#contact'>&lt;contact&gt;</a>
        </div>
       </label>
      </>  
    )
  }
  
}