import React from 'react';
import './BlockedUsersModal.css';

const BlockedUsersModal = ({ blockedEmployees, onUnblock, onClose }) => {

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Blocked Users</h2>
        {blockedEmployees.length? 
        (<ul>
          {blockedEmployees.map((employee) => (
            <li key={employee.id}>
              <p>{employee.name} - {employee.role}</p>
              <button onClick={() => onUnblock(employee.id)}>Unblock</button>
            </li>
          ))}
        </ul>):
          (
            <div>
              There is no blocked employee
            </div>
          )
        }
      </div>
    </div>
  );
};

export default BlockedUsersModal;
