
import React from 'react';
import { useLocation } from 'react-router-dom';
import PatientDashboard from '../components/dashboards/PatientDashboard';
import DoctorDashboard from '../components/dashboards/DoctorDashboard';
import AdminDashboard from '../components/dashboards/AdminDashboard';

const Dashboard = () => {
  const location = useLocation();
  // TODO: Replace with actual user role from Supabase auth context
  const userRole = new URLSearchParams(location.search).get('role') || 'patient';

  const renderDashboard = () => {
    switch (userRole) {
      case 'doctor':
        return <DoctorDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'patient':
      default:
        return <PatientDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
