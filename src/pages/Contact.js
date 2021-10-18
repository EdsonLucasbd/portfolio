import React from 'react';
import Footer from '../components/Footer';
import MyForm from '../components/Form/Form';
// import Modal from '../components/Modal';

import '../styles/pages/Contact.css';
import '../styles/static/blobz.css';

export default function Contact() {
  return (
    <div id='contact'>
      <div className="logoContainer">
        <img src="/EL.png" alt="EL logo" data-anime='left'/>
        <div className="tk-blob">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371.5 297.7">
            <path d="M286.9 54.2c42.7 34.9 89.4 85.3 84.2 130.4-5.2 45.1-62.1 84.7-118 102.3S142.3 300 94.8 278C47.2 256 6.9 216.6.8 173.9S22.7 85.2 56 52.4C89.4 19.6 127.9.1 166.6 0s77.6 19.2 120.3 54.2z"></path>
          </svg>
        </div>
      </div>
      <div className='formContainer'>
        <h4>&lt;contact&gt;</h4>

        <MyForm/>
        
        <h4>&lt;/contact&gt;</h4>
      </div>
      <Footer />
    </div>
  )
}
