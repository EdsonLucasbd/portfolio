import React from 'react'
import { bool, func } from 'prop-types';

import '../../styles/components/Burger.css'

const Burger = ({ open, setOpen }) => {
  const button = document.querySelectorAll('.icon')
  
  if (!button[0]?.classList.contains('firstChildOpen')) {
    if (open) {
      button[0].classList.add('firstChildOpen');
      button[1].classList.add('secondChildOpen');
      button[2].classList.add('thirdChildOpen');
    } 
  } else {
    button[0]?.classList.remove('firstChildOpen');
    button[1]?.classList.remove('secondChildOpen');
    button[2]?.classList.remove('thirdChildOpen');
  }
  return (
    <div className="burgerContainer" open={open} onClick={() => setOpen(!open)}>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
    </div>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;