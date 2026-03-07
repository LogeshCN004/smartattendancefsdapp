import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line 
} from 'recharts';

const dummyMonthlyData = [
  { month: 'Jan', attendance: 85, productivity: 80 },
  { month: 'Feb', attendance: 88, productivity: 84 },
  { month: 'Mar', attendance: 82, productivity: 78 },
  { month: 'Apr', attendance: 90, productivity: 88 },
  { month: 'May', attendance: 92, productivity: 89 },
  { month: 'Jun', attendance: 87, productivity: 85 },
];

const Charts = () => {
  return (
    <div className="charts-grid">
      <div className="chart-card">
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1rem' }}>
          Attendance Trend (Last 6 Months)
        </h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={dummyMonthlyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
            <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '8px' }} />
            <Bar dataKey="attendance" fill="var(--primary)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1rem' }}>
          Productivity Trend (Last 6 Months)
        </h3>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={dummyMonthlyData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
            <Tooltip contentStyle={{ borderRadius: '8px' }} />
            <Line 
              type="monotone" 
              dataKey="productivity" 
              stroke="var(--secondary)" 
              strokeWidth={3} 
              dot={{ strokeWidth: 2, r: 4 }} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
