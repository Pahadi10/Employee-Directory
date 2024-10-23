import React, { useState } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import SearchBar from './components/SearchBar';
import EmployeeDetailsModal from './components/EmployeeDetailsModal';
import BlockedUsersModal from './components/BlockedUsersModal';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showBlockedUsers, setShowBlockedUsers] = useState(false);

  const [employees, setEmployees] = useState([
    { id: 1, name: 'Johnson Wood', role: 'Front-End Developer', email: 'johnsonwood@microsoft.com', photo: 'https://randomuser.me/api/portraits/men/1.jpg', isBlocked: false },
    { id: 2, name: 'John Doe', role: 'Team Lead', email: 'johndoe@microsoft.com', photo: 'https://randomuser.me/api/portraits/men/2.jpg', isBlocked: false },
    { id: 3, name: 'Fakhar Naveed', role: 'UI/UX Designer', email: 'fakhar@microsoft.com', photo: 'https://randomuser.me/api/portraits/men/3.jpg', isBlocked: false },
    { id: 4, name: 'Alex Made', role: 'Team Lead', email: 'alexmade@microsoft.com', photo: 'https://randomuser.me/api/portraits/men/4.jpg', isBlocked: false },
    { id: 5, name: 'Jane Smith', role: 'Back-End Developer', email: 'janesmith@microsoft.com', photo: 'https://randomuser.me/api/portraits/women/1.jpg', isBlocked: false }
  ]);

  // Function to handle blocking employees
  const blockEmployee = (id) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, isBlocked: !employee.isBlocked } : employee
    );
    setEmployees(updatedEmployees);
  };

  // Function to handle showing details
  const showEmployeeDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  // Function to handle closing the details modal
  const closeEmployeeDetails = () => {
    setSelectedEmployee(null);
  };

  // Function to open and close blocked users modal
  const toggleBlockedUsersModal = () => {
    setShowBlockedUsers(!showBlockedUsers);
  };

  // Function to unblock employees from blocked list
  const unblockEmployee = (id) => {
    blockEmployee(id);  // Toggle block status
  };

  const filteredEmployees = employees.filter(
    (employee) => !employee.isBlocked && employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const blockedEmployees = employees.filter(employee => employee.isBlocked);

  return (
    <div className="App">
      <header>
        <h1>Employee Directory</h1>
        <div className="header-actions">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <button className='blocked-users-button' onClick={toggleBlockedUsersModal}>Blocked Employees</button>
        </div>
      </header>
      <EmployeeList employees={filteredEmployees} onBlock={blockEmployee} onDetails={showEmployeeDetails} />
      
      {/* Modals */}
      {selectedEmployee && <EmployeeDetailsModal employee={selectedEmployee} onClose={closeEmployeeDetails} />}
      {showBlockedUsers && <BlockedUsersModal blockedEmployees={blockedEmployees} onUnblock={unblockEmployee} onClose={toggleBlockedUsersModal} />}
    </div>
  );
};

export default App;
