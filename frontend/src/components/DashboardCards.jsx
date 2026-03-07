import React, { useMemo } from 'react';

const DashboardCards = ({ employees, role }) => {
  const totalEmployees = useMemo(() => employees.length, [employees]);
  const presentToday = useMemo(() => employees.filter(e => e.attendancePercentage > 75).length, [employees]);
  const avgProductivity = useMemo(() => {
    if (employees.length === 0) return 0;
    const total = employees.reduce((acc, curr) => acc + curr.productivityScore, 0);
    return Math.round(total / employees.length);
  }, [employees]);
  const atRisk = useMemo(() => employees.filter(e => e.attendancePercentage < 70 && e.productivityScore < 60).length, [employees]);

  return (
    <div className="cards-grid">
      <div className="dashboard-card" style={{ borderLeft: '4px solid var(--primary)' }}>
        <span className="card-title">Total Employees</span>
        <span className="card-value">{totalEmployees}</span>
      </div>
      <div className="dashboard-card" style={{ borderLeft: '4px solid var(--secondary)' }}>
        <span className="card-title">Present Today</span>
        <span className="card-value">{presentToday}</span>
        <span style={{ fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)', color: 'var(--text-muted)' }}>(Attendance &gt; 75%)</span>
      </div>
      <div className="dashboard-card" style={{ borderLeft: '4px solid var(--warning)' }}>
        <span className="card-title">Avg. Productivity</span>
        <span className="card-value">{avgProductivity}%</span>
      </div>
      <div className="dashboard-card" style={{ borderLeft: '4px solid var(--danger)' }}>
        <span className="card-title">Employees At Risk</span>
        <span className="card-value" style={{ color: 'var(--danger)' }}>{atRisk}</span>
      </div>
    </div>
  );
};

export default DashboardCards;
