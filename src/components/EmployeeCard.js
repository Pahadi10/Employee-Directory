import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = ({ employee, onBlock, onDetails }) => {
  return (
    <div className="employee-card">
      <img src={employee.photo} alt={`${employee.name}`} className="employee-photo" />
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <button onClick={() => onBlock(employee.id)}>
        {employee.isBlocked ? 'Unblock' : 'Block'}
      </button>
      <button onClick={() => onDetails(employee)}>Details</button>
    </div>
  );
};

export default EmployeeCard;
