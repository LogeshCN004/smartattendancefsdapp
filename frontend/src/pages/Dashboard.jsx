import React, { useEffect, useState } from 'react';
import { getToken, getUser } from '../utils/auth';
import { analyzeEmployees } from '../utils/aiAnalyzer';
import DashboardCards from '../components/DashboardCards';
import EmployeeTable from '../components/EmployeeTable';
import AIInsights from '../components/AIInsights';
import Charts from '../components/Charts';

export const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/employees', {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setEmployees(data || []);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading data...</div>;

  return (
    <>
      <h2 className="page-title">Dashboard Overview</h2>
      <DashboardCards employees={employees} />
    </>
  );
};

export const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/employees', {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setEmployees(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  const { analyzedEmployees } = analyzeEmployees(employees);

  return (
    <>
      <h2 className="page-title">Employees Directory</h2>
      <EmployeeTable employees={analyzedEmployees} />
    </>
  );
};

export const InsightsPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/employees', {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setEmployees(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  const insights = analyzeEmployees(employees);

  return (
    <>
      <h2 className="page-title">AI Performance Insights</h2>
      <AIInsights insights={insights} />
      <Charts />
    </>
  );
};
