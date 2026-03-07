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

module.exports = router;
