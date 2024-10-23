import React from 'react';
import './EmployeeDetailsModal.css';

const EmployeeDetailsModal = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <img src={employee.photo} alt={employee.name} className="modal-photo" />
        <h2>{employee.name}</h2>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Email:</strong> {employee.email}</p>
      </div>
    </div>
  );
};

export default EmployeeDetailsModal;
