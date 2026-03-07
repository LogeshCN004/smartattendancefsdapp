const express = require('express');
const { getLeaves, addLeave, updateLeaveStatus } = require('../data/leaves');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Get Leaves based on role
router.get('/', authMiddleware, (req, res) => {
  const allLeaves = getLeaves();
  if (req.user.role === 'Employee') {
    // Only return leaves for this employee
    return res.json(allLeaves.filter(l => l.employeeName === req.user.name));
  }
  // Admin and HR see all leaves
  res.json(allLeaves);
});

// Apply for a leave
router.post('/', authMiddleware, (req, res) => {
  const { leaveType, startDate, endDate } = req.body;
  if (!leaveType || !startDate || !endDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newLeave = addLeave({
    employeeName: req.user.name,
    leaveType,
    startDate,
    endDate,
    status: 'Pending'
  });
  res.status(201).json(newLeave);
});

// Update leave status (Approve/Reject)
router.patch('/:id/status', authMiddleware, roleMiddleware(['Admin', 'HR']), (req, res) => {
  const { status } = req.body; // Approved or Rejected
  const { id } = req.params;
  
  if (!['Approved', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const updatedLeave = updateLeaveStatus(Number(id), status);
  if (!updatedLeave) {
    return res.status(404).json({ message: 'Leave not found' });
  }

  res.json(updatedLeave);
});

module.exports = router;
