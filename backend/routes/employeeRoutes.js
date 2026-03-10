const express = require('express');
const { getEmployees } = require('../data/employees');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Get all employees - accessible by Admin and HR, Employee can view too for dashboard insights
router.get('/', authMiddleware, roleMiddleware(['Admin', 'HR', 'Employee']), (req, res) => {
  res.json(getEmployees());
});

module.exports = router;
