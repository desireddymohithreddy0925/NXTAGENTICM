const express = require('express');
const router = express.Router();

// @route   POST /api/auth/register
// @desc    Mock Register user
// @access  Public
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }
  
  // Perfect backend mock implementation
  res.status(201).json({
    message: 'User registered perfectly',
    token: 'mock-jwt-token-12345',
    user: { id: 1, username, email }
  });
});

// @route   POST /api/auth/login
// @desc    Mock Login user
// @access  Public
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide email and password' });
  }
  
  res.status(200).json({
    message: 'Login perfect',
    token: 'mock-jwt-token-12345',
    user: { id: 1, username: 'perfectuser', email }
  });
});

module.exports = router;
