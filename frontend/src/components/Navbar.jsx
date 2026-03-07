import React from 'react';
import { Menu, User, LogOut } from 'lucide-react';
import { getUser, logout } from '../utils/auth';

const Navbar = ({ toggleSidebar }) => {
  const user = getUser();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <span style={{ fontWeight: 600, fontSize: '1.25rem' }} className="desktop-title">
          Smart Attendance & Productivity Analyzer
        </span>
      </div>
      
      <div className="nav-profile">
        <div className="user-info">
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{user?.name || 'User'}</span>
          <span className="role-badge">{user?.role || 'Guest'}</span>
        </div>
        <div style={{ background: '#E5E7EB', padding: '0.5rem', borderRadius: '50%' }}>
          <User size={20} color="#6B7280" />
        </div>
        <button className="logout-btn" onClick={logout} title="Logout">
          <LogOut size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
