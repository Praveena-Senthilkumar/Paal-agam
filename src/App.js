import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CowOwnerDashboard from './pages/CowOwnerDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/cow-owner" element={<CowOwnerDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
