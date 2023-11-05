// routes/test.routes.js
const express = require('express');
const router = express.Router();

// Define API routes related to users
router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create a new user' });
});

module.exports = router;
