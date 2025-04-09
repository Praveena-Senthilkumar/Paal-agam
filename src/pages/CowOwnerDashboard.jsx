import React, { useState, useEffect } from 'react';

function CowOwnerDashboard() {
  const PRICE_PER_LITRE = 50;
  const [supply, setSupply] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [summary, setSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      litres: supply,
      total: supply * PRICE_PER_LITRE,
    };

    localStorage.setItem('milkSupply', JSON.stringify(data));
    setSummary(data);
    setSubmitted(true);
  };

  useEffect(() => {
    const saved = localStorage.getItem('milkSupply');
    if (saved) {
      setSummary(JSON.parse(saved));
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Cow Owner Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter litres supplied"
          required
          value={supply}
          onChange={(e) => setSupply(e.target.value)}
          style={{ margin: '10px' }}
        />
        <button type="submit">Submit Supply</button>
      </form>

      {submitted && (
        <p style={{ color: 'green' }}>✅ Supply submitted!</p>
      )}

      {summary && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Total Supplied:</strong> {summary.litres} litres</p>
          <p><strong>Total Earnings:</strong> ₹{summary.total}</p>
        </div>
      )}
    </div>
  );
}

export default CowOwnerDashboard;
