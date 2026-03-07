let employees = [
  { id: 1, name: "John Doe", department: "Engineering", attendancePercentage: 92, productivityScore: 85, workingHours: 160, lateDays: 1 },
  { id: 2, name: "Jane Smith", department: "Marketing", attendancePercentage: 65, productivityScore: 55, workingHours: 120, lateDays: 5 },
  { id: 3, name: "Alice Johnson", department: "HR", attendancePercentage: 88, productivityScore: 90, workingHours: 155, lateDays: 2 },
  { id: 4, name: "Bob Brown", department: "Sales", attendancePercentage: 95, productivityScore: 88, workingHours: 165, lateDays: 0 },
  { id: 5, name: "Charlie Davis", department: "Engineering", attendancePercentage: 70, productivityScore: 65, workingHours: 130, lateDays: 4 },
  { id: 6, name: "Diana Prince", department: "Design", attendancePercentage: 100, productivityScore: 95, workingHours: 170, lateDays: 0 },
  { id: 7, name: "Clark Kent", department: "Writing", attendancePercentage: 80, productivityScore: 78, workingHours: 140, lateDays: 2 },
  { id: 8, name: "Bruce Wayne", department: "Management", attendancePercentage: 85, productivityScore: 92, workingHours: 150, lateDays: 1 },
  { id: 9, name: "Peter Parker", department: "Photography", attendancePercentage: 60, productivityScore: 50, workingHours: 110, lateDays: 6 },
  { id: 10, name: "Tony Stark", department: "Engineering", attendancePercentage: 89, productivityScore: 99, workingHours: 160, lateDays: 2 },
  { id: 11, name: "Steve Rogers", department: "Security", attendancePercentage: 98, productivityScore: 85, workingHours: 160, lateDays: 0 },
  { id: 12, name: "Natasha Romanoff", department: "HR", attendancePercentage: 94, productivityScore: 92, workingHours: 155, lateDays: 1 },
  { id: 13, name: "Wanda Maximoff", department: "Sales", attendancePercentage: 75, productivityScore: 70, workingHours: 135, lateDays: 3 },
  { id: 14, name: "Stephen Strange", department: "Medical", attendancePercentage: 82, productivityScore: 88, workingHours: 145, lateDays: 2 },
  { id: 15, name: "Miles Morales", department: "Engineering", attendancePercentage: 68, productivityScore: 60, workingHours: 125, lateDays: 5 }
];

module.exports = {
  getEmployees: () => employees,
  setEmployees: (newEmployees) => { employees = newEmployees; }
};
