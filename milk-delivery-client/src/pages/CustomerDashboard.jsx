import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerDashboard() {
  const PRICE_PER_LITRE = 50;
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const totalAmount = quantity ? quantity * PRICE_PER_LITRE : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name,
      quantity,
      total: totalAmount,
    };
    localStorage.setItem('milkOrder', JSON.stringify(order));
    alert(`Order submitted! Total: ₹${totalAmount}`);
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Customer Dashboard</h2>
      <p><strong>Price per litre:</strong> ₹{PRICE_PER_LITRE}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ margin: '10px' }}
        />
        <input
          type="number"
          placeholder="Litres of milk"
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ margin: '10px' }}
        />
        <div>
          <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default CustomerDashboard;

