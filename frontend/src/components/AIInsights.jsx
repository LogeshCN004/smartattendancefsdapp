import React from 'react';

const AIInsights = ({ insights }) => {
  const { topPerformer, productivityDrop, atRiskEmployees, insightMessage } = insights;

  return (
    <>
      <h3 style={{ margin: '1.5rem 0 1rem', fontSize: '1.25rem' }}>AI Insights</h3>
      <div style={{ padding: '1rem', background: '#E0E7FF', color: 'var(--primary)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontWeight: 500 }}>
        🤖 Auto-Insight: {insightMessage}
      </div>

      <div className="insights-grid">
        <div className="insight-card success">
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Top Performer</h4>
          {topPerformer ? (
            <>
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{topPerformer.name}</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{topPerformer.department}</div>
              <div style={{ marginTop: '0.5rem' }}>Prod Score: {topPerformer.productivityScore}%</div>
            </>
          ) : (
            <div>No data available.</div>
          )}
        </div>

        <div className="insight-card warning">
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem' }}>Productivity Drop</h4>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>(Prod &lt; 60, Att &ge; 70)</span>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            {productivityDrop.length > 0 ? productivityDrop.map(emp => (
              <li key={emp.id} style={{ marginBottom: '0.25rem' }}>{emp.name} ({emp.productivityScore}%)</li>
            )) : <li>No significant drops detected.</li>}
          </ul>
        </div>

        <div className="insight-card danger">
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem' }}>At-Risk Employees</h4>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>(Att &lt; 70, Prod &lt; 60)</span>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            {atRiskEmployees.length > 0 ? atRiskEmployees.map(emp => (
              <li key={emp.id} style={{ marginBottom: '0.25rem' }}>{emp.name}</li>
            )) : <li>No employees currently at risk.</li>}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AIInsights;
