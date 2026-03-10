export const setToken = (token) => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const removeToken = () => localStorage.removeItem('token');

export const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};
export const removeUser = () => localStorage.removeItem('user');

export const logout = () => {
  removeToken();
  removeUser();
  window.location.href = '/login';
};

// Fake AI Analysis function based on instructions
export const analyzeEmployee = (employee) => {
  const att = employee.attendancePercentage;
  const prod = employee.productivityScore;
  
  if (att < 70 && prod < 60) return "Critical";
  if (att > 85 && prod > 80) return "Excellent";
  return "Average";
};
