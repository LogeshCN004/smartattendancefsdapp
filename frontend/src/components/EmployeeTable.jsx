import React, { useState } from 'react';

const EmployeeTable = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('');

  const departments = [...new Set(employees.map(emp => emp.department))];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter ? emp.department === deptFilter : true;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="table-container">
      <div className="table-header">
        <h3>Employee Overview</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>
          <input 
            type="text" 
            placeholder="Search by name..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ flex: 1, minWidth: '200px' }}
          />
          <select 
            className="search-input" 
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            style={{ flex: 1, minWidth: '180px' }}
          >
            <option value="">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Attendance %</th>
            <th>Productivity %</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(emp => (
            <tr key={emp.id}>
              <td data-label="Name">
                <strong>{emp.name}</strong>
              </td>
              <td data-label="Department">{emp.department}</td>
              <td data-label="Attendance">{emp.attendancePercentage}%</td>
              <td data-label="Productivity">{emp.productivityScore}%</td>
              <td data-label="Status">
                <span className={`badge ${emp.status.toLowerCase()}`}>
                  {emp.status}
                </span>
              </td>
            </tr>
          ))}
          {filteredEmployees.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
