import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { Dashboard, EmployeesPage, InsightsPage } from './pages/Dashboard';
import LeaveManagement from './pages/LeaveManagement';
import { getToken } from './utils/auth';

const PrivateRoute = ({ children }) => {
  const token = getToken();
  return token ? children : <Navigate to="/login" />;
};

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar isOpen={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="main-content">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="page-container">
          {children}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardLayout><Dashboard /></DashboardLayout>
          </PrivateRoute>
        } />

        <Route path="/employees" element={
          <PrivateRoute>
            <DashboardLayout><EmployeesPage /></DashboardLayout>
          </PrivateRoute>
        } />

        <Route path="/insights" element={
          <PrivateRoute>
            <DashboardLayout><InsightsPage /></DashboardLayout>
          </PrivateRoute>
        } />

        <Route path="/leave-management" element={
          <PrivateRoute>
            <DashboardLayout><LeaveManagement /></DashboardLayout>
          </PrivateRoute>
        } />

        {/* Redirect unknown routes to login if not authenticated, or dashboard if authenticated */}
        <Route path="*" element={<Navigate to={getToken() ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
