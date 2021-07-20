import React from 'react';
import '../styles/components/Footer.css'

export default function Footer() {
  return (
    <footer className="copyrights">
      <p>
        <span>
          Copyrights © {new Date().getFullYear()} - 
        </span>
        <a href="https://github.com/EdsonLucasbd">
          &nbsp;Edson Lucas&nbsp;
        </a>
        <span>
          - All rights reserved.
        </span>
      </p>
      </footer>
  )
}