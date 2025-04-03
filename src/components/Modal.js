import React from 'react';
import './Modal.css'; // Make sure to create a CSS file for the modal styles

const Modal = ({ show, onClose, id }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h1>Edit Data for ID: {id}</h1>
        <p>Random data goes here...</p>
        {/* Add your form or other elements here */}
      </div>
    </div>
  );
};

export default Modal;
