import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees, onBlock, onDetails }) => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onBlock={onBlock}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
