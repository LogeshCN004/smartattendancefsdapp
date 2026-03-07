import React from 'react';
import { getUser } from '../utils/auth';

const LeaveTable = ({ leaves, handleStatusChange }) => {
  const user = getUser();
  const showActions = user?.role === 'Admin' || user?.role === 'HR';

  return (
    <div className="table-container">
      <div className="table-header">
        <h3>Leave History</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            {showActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td data-label="Employee">{leave.employeeName}</td>
              <td data-label="Type" style={{ textTransform: 'capitalize' }}>{leave.leaveType}</td>
              <td data-label="Start">{leave.startDate}</td>
              <td data-label="End">{leave.endDate}</td>
              <td data-label="Status">
                <span className={`badge ${leave.status.toLowerCase()}`}>
                  {leave.status}
                </span>
              </td>
              {showActions && (
                <td data-label="Actions">
                  {leave.status === 'Pending' ? (
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <button className="btn-action approve" onClick={() => handleStatusChange(leave.id, 'Approved')}>Approve</button>
                      <button className="btn-action reject" onClick={() => handleStatusChange(leave.id, 'Rejected')}>Reject</button>
                    </div>
                  ) : (
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Resolved</span>
                  )}
                </td>
              )}
            </tr>
          ))}
          {leaves.length === 0 && (
            <tr>
              <td colSpan={showActions ? 6 : 5} style={{ textAlign: 'center', padding: '2rem' }}>No leaves found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTable;
