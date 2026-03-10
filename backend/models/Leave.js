const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
    },
    leaveType: {
      type: String,
      enum: ['sick', 'casual', 'vacation'],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Leave', leaveSchema);
