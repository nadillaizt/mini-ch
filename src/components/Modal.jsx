// src/components/Modal.jsx
import React from 'react';
import styles from './styles.module.css';

const Modal = ({ show, result, onClose }) => {
  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{result}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
