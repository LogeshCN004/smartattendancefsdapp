import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Brain, CalendarRange } from 'lucide-react';
import { getUser } from '../utils/auth';

const Sidebar = ({ isOpen, setOpen }) => {
  const user = getUser();
  const isHR = user?.role === 'HR';
  const isAdmin = user?.role === 'Admin';

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Employees', path: '/employees', icon: <Users size={20} /> },
    { name: 'AI Insights', path: '/insights', icon: <Brain size={20} /> },
    // Only HR and Admin see Leave Management link explicitly if you want, but prompt says "HR -> Dashboard + Leave Management", "Admin -> Full Access", "Employee -> Dashboard". It says Employees can view their leaves in Leave Management page too. Let's show it to all and handle content based on role.
    { name: 'Leave Management', path: '/leave-management', icon: <CalendarRange size={20} /> },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Analyzer.AI</h2>
        <div className="nav-links">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)} // close on mobile after click
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10 }}
        />
      )}
    </>
  );
};

export default Sidebar;
