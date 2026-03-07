import React, { useEffect, useState } from 'react';
import { getToken, getUser } from '../utils/auth';
import LeaveTable from '../components/LeaveTable';

const LeaveManagement = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [leaveType, setLeaveType] = useState('sick');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [msg, setMsg] = useState('');
  
  const user = getUser();
  const isEmployee = user?.role === 'Employee';

  const fetchLeaves = () => {
    fetch('http://localhost:5000/api/leaves', {
      headers: { 'Authorization': `Bearer ${getToken()}` }
    })
    .then(res => res.json())
    .then(data => {
      setLeaves(data || []);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const handleApplyLeave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/leaves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({ leaveType, startDate, endDate })
      });
      if (res.ok) {
        setMsg('Leave applied successfully!');
        setStartDate('');
        setEndDate('');
        fetchLeaves(); // Refresh
      } else {
        setMsg('Failed to apply leave');
      }
    } catch(err) {
      setMsg(err.message);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/leaves/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        fetchLeaves();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2 className="page-title">Leave Management</h2>
      {isEmployee && (
        <div style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Apply for Leave</h3>
          {msg && <p style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>{msg}</p>}
          <form style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-end' }} onSubmit={handleApplyLeave}>
            <div>
              <label className="form-label">Leave Type</label>
              <select className="form-input" style={{ width: '200px' }} value={leaveType} onChange={e => setLeaveType(e.target.value)}>
                <option value="sick">Sick Leave</option>
                <option value="casual">Casual Leave</option>
                <option value="vacation">Vacation</option>
              </select>
            </div>
            <div>
              <label className="form-label">Start Date</label>
              <input type="date" required className="form-input" style={{ width: '200px' }} value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
            <div>
              <label className="form-label">End Date</label>
              <input type="date" required className="form-input" style={{ width: '200px' }} value={endDate} onChange={e => setEndDate(e.target.value)} />
            </div>
            <button type="submit" className="btn-primary" style={{ width: 'auto', padding: '0.75rem 2rem' }}>Apply</button>
          </form>
        </div>
      )}

      {loading ? <div>Loading...</div> : (
        <LeaveTable leaves={leaves} handleStatusChange={handleStatusChange} />
      )}
    </>
  );
};

export default LeaveManagement;
