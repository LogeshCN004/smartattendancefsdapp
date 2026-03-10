import React from 'react';
import { Menu, User, LogOut } from 'lucide-react';
import { getUser, logout } from '../utils/auth';

const Navbar = ({ toggleSidebar }) => {
  const user = getUser();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
          <Menu size={24} />
        </button>
        <span className="desktop-title">
          WorkPulse - Smart Attendance & Productivity Analyzer
        </span>
      </div>
      
      <div className="nav-profile">
        <div className="user-info">
          <span>{user?.name || 'User'}</span>
          <span className="role-badge">{user?.role || 'Guest'}</span>
        </div>
        <div style={{ background: '#E5E7EB', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <User size={20} color="#6B7280" />
        </div>
        <button className="logout-btn" onClick={logout} title="Logout" aria-label="Logout">
          <LogOut size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
