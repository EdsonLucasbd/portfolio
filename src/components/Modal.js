import React from 'react';
import ReactDom from 'react-dom';

import '../styles/components/Modal.css';

const portalRoot = document.getElementById('modal-root');

export default function Modal({ children, openModal, handleCloseModal }) {
  if (!openModal) return null;


  return ReactDom.createPortal(
    <div className="modalOverlay">
      <div className="myModal">
        <button type="button" onClick={handleCloseModal} className="myModalCloseBtn">x</button>
        <div className="modalContent">
          {children}
        </div>
      </div>
    </div>,
    portalRoot,
  );
}
