import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login</h2>
      <button onClick={() => navigate('/customer')}>Login as Customer</button>
      <br /><br />
      <button onClick={() => navigate('/admin')}>Login as Admin</button>
      <button onClick={() => navigate('/cow-owner')} style={{ margin: '10px' }}>
        Login as Cow Owner
      </button>

    </div>
    
  );
}

export default LoginPage;

