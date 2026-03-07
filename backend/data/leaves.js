let leaves = [
  { id: 1, employeeName: "John Doe", leaveType: "sick", startDate: "2026-03-01", endDate: "2026-03-02", status: "Approved" },
  { id: 2, employeeName: "Jane Smith", leaveType: "casual", startDate: "2026-03-05", endDate: "2026-03-06", status: "Pending" },
  { id: 3, employeeName: "Alice Johnson", leaveType: "vacation", startDate: "2026-04-10", endDate: "2026-04-15", status: "Approved" }
];

module.exports = {
  getLeaves: () => leaves,
  addLeave: (leave) => { 
    leave.id = leaves.length ? leaves[leaves.length - 1].id + 1 : 1;
    leaves.push(leave);
    return leave; 
  },
  updateLeaveStatus: (id, status) => {
    const leave = leaves.find(l => l.id === id);
    if (leave) {
      leave.status = status;
      return leave;
    }
    return null;
  }
};
