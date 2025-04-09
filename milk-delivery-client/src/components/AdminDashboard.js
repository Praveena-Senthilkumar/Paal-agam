import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('milkOrder');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Admin Dashboard</h2>
      {order ? (
        <>
          <p><strong>Customer Name:</strong> {order.name}</p>
          <p><strong>Milk Ordered:</strong> {order.quantity} litres</p>
          <p><strong>Total Amount:</strong> ₹{order.total}</p>
        </>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
}

export default AdminDashboard;
