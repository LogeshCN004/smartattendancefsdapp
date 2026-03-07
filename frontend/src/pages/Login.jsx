import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setToken, setUser } from '../utils/auth';

const Login = () => {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      setToken(data.token);
      setUser({ role: data.role, name: data.name, email });

      if (data.role === 'Employee') {
        navigate('/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">WorkPulse - Smart Attendance and Productivity Analyzer</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)', fontSize: 'clamp(0.8rem, 1vw, 0.95rem)' }}>
          Sign in to your account
        </p>
        {error && <div style={{ color: 'var(--danger)', marginBottom: '1rem', textAlign: 'center', fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}>{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>
        <div style={{ marginTop: '1.5rem', fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
          <strong>Test Accounts:</strong><br />
          Admin: admin@example.com<br />
          HR: hr@example.com<br />
          Employee: employee@example.com<br />
          (Password: password123)
        </div>
      </div>
    </div>
  );
};

export default Login;
