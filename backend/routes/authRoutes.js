const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('../data/users');

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || 'super_secret_key';

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, name: user.name },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
    res.json({ token, role: user.role, name: user.name });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

router.post('/signup', (req, res) => {
  const { email, password, name, role } = req.body;

  // Validate input
  if (!email || !password || !name || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  // Create new user
  const newUser = {
    id: users.length + 1,
    email,
    password,
    name,
    role
  };

  users.push(newUser);

  // Generate token
  const token = jwt.sign(
    { id: newUser.id, email: newUser.email, role: newUser.role, name: newUser.name },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.status(201).json({ token, role: newUser.role, name: newUser.name, message: 'Signup successful' });
});

module.exports = router;
