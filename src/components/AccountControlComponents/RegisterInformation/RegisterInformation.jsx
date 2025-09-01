// src/components/AccountControlComponents/RegisterInformation.jsx
import React from 'react';
import './RegisterInformation.css';

const RegisterInformation = ({ isOpen, onClose, title, children, onDeny, onVerify }) => {
  if (!isOpen) return null;

  return (
    <div className="register-info-overlay">
      <div className="register-info-content">
        <h2>{title}</h2>
        {children}
        <div className="register-info-actions">
          <button className="deny-btn" onClick={onDeny}>
            Deny
          </button>
          <button className="verify-btn" onClick={onVerify}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterInformation;