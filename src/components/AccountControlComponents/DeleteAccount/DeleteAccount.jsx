// src/components/AccountControlComponents/DeleteAccount.jsx
import React from 'react';
import './DeleteAccount.css';

const DeleteAccount = ({ isOpen, onClose, onConfirm, accountName }) => {
  if (!isOpen) return null;

  return (
    <div className="delete-account-overlay">
      <div className="delete-account-content">
        <h2>Confirm Deletion</h2>
        <p>
          Do you want to delete this account? <br />
          <strong>"{accountName}"</strong>
        </p>
        <div className="delete-account-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;