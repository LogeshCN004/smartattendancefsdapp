const express = require('express');
const Leave = require('../models/Leave');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Get leaves based on role
router.get('/', authMiddleware, async (req, res) => {
  try {
    let query = {};
    if (req.user.role === 'Employee') {
      query.employeeName = req.user.name;
    }
    const leaves = await Leave.find(query).sort({ createdAt: -1 });
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leaves', error: error.message });
  }
});

// Apply for a leave
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { leaveType, startDate, endDate } = req.body;

    if (!leaveType || !startDate || !endDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newLeave = new Leave({
      employeeName: req.user.name,
      leaveType,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      status: 'Pending'
    });

    await newLeave.save();
    res.status(201).json(newLeave);
  } catch (error) {
    res.status(400).json({ message: 'Error creating leave', error: error.message });
  }
});

// Update leave status
router.patch('/:id/status', authMiddleware, roleMiddleware(['Admin', 'HR']), async (req, res) => {
  try {
    const { status } = req.body;

    if (!['Approved', 'Rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!leave) {
      return res.status(404).json({ message: 'Leave not found' });
    }

    res.json(leave);
  } catch (error) {
    res.status(500).json({ message: 'Error updating leave', error: error.message });
  }
});

module.exports = router;
