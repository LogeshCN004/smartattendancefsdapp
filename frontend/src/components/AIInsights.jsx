import React from 'react';

const AIInsights = ({ insights }) => {
  const { topPerformer, productivityDrop, atRiskEmployees, insightMessage } = insights;

  return (
    <>
      <h3 style={{ margin: 'clamp(1rem, 2vw, 1.5rem) 0 clamp(0.75rem, 1.5vw, 1rem)', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)' }}>AI Insights</h3>
      <div style={{ padding: 'clamp(0.875rem, 2vw, 1rem)', background: '#E0E7FF', color: 'var(--primary)', borderRadius: 'var(--radius-md)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 500, fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)' }}>
        🤖 Auto-Insight: {insightMessage}
      </div>

      <div className="insights-grid">
        <div className="insight-card success">
          <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>Top Performer</h4>
          {topPerformer ? (
            <>
              <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 600 }}>{topPerformer.name}</div>
              <div style={{ fontSize: 'clamp(0.8rem, 0.95vw, 0.9rem)', color: 'var(--text-muted)' }}>{topPerformer.department}</div>
              <div style={{ marginTop: '0.5rem', fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}>Prod Score: {topPerformer.productivityScore}%</div>
            </>
          ) : (
            <div style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}>No data available.</div>
          )}
        </div>

        <div className="insight-card warning">
          <h4 style={{ color: 'var(--warning)', marginBottom: '0.5rem', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>Productivity Drop</h4>
          <span style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)', color: 'var(--text-muted)' }}>(Prod &lt; 60, Att ≥ 70)</span>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}>
            {productivityDrop.length > 0 ? productivityDrop.map(emp => (
              <li key={emp.id} style={{ marginBottom: '0.25rem' }}>{emp.name} ({emp.productivityScore}%)</li>
            )) : <li>No significant drops detected.</li>}
          </ul>
        </div>

        <div className="insight-card danger">
          <h4 style={{ color: 'var(--danger)', marginBottom: '0.5rem', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>At-Risk Employees</h4>
          <span style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)', color: 'var(--text-muted)' }}>(Att &lt; 70, Prod &lt; 60)</span>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}>
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
