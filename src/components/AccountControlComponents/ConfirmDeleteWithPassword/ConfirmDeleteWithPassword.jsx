// src/components/AccountControlComponents/ConfirmDeleteWithPassword/ConfirmDeleteWithPassword.jsx
import React, { useState } from 'react';
import './ConfirmDeleteWithPassword.css';

const ConfirmDeleteWithPassword = ({ isOpen, onClose, onConfirm, accountName }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const mockPassword = 'admin'; // 🔐 Change this in production

  const handleSubmit = () => {
    if (!password) {
      setError('Please enter the password');
      return;
    }
    if (password !== mockPassword) {
      setError('Incorrect password');
      return;
    }
    onConfirm();
  };

  if (!isOpen) return null;

  return (
    <div className="confirm-delete-overlay">
      <div className="confirm-delete-content">
        <h2>Delete Account</h2>
        <p>
          To delete <strong>"{accountName}"</strong>, please enter your password:
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
          placeholder="Enter password"
          className="password-input"
          autoFocus
        />
        {error && <p className="error-text">{error}</p>}
        <div className="confirm-delete-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-btn" onClick={handleSubmit}>
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteWithPassword;