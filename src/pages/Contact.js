import React from 'react';
import Footer from '../components/Footer';
import MyForm from '../components/Form/Form';
// import Modal from '../components/Modal';

import '../styles/pages/Contact.css';

export default function Contact() {
  return (
    <div id='contact'>
      <img src="/EL.png" alt="EL logo" data-anime='left'/>
      <div className='formContainer'>
        <h4>&lt;contact&gt;</h4>

        <MyForm/>
        
        <h4>&lt;/contact&gt;</h4>
      </div>
      <Footer />
    </div>
  )
}
