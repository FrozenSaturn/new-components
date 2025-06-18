
import React from 'react';
import { Calendar, FileText, CreditCard, Award, Search } from 'lucide-react';
import FindDoctorsTile from '../patient/tiles/FindDoctorsTile';
import AppointmentsTile from '../patient/tiles/AppointmentsTile';
import RecordsTile from '../patient/tiles/RecordsTile';
import PaymentsTile from '../patient/tiles/PaymentsTile';
import MedicalNFTsTile from '../patient/tiles/MedicalNFTsTile';

const PatientDashboard = () => {
  // TODO: Fetch patient data from Supabase
  const patientData = {
    name: "John Doe",
    email: "john.doe@email.com",
    appointments: 3,
    records: 5,
    pendingPayments: 2
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Dashboard</h1>
          <p className="text-gray-600">Welcome back, {patientData.name}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">{patientData.appointments} Appointments</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Find Doctors Tile - Spans 2 columns on large screens */}
        <div className="lg:col-span-2">
          <FindDoctorsTile />
        </div>
        
        {/* Appointments Tile */}
        <div>
          <AppointmentsTile />
        </div>
        
        {/* Records Tile */}
        <div>
          <RecordsTile />
        </div>
        
        {/* Payments Tile */}
        <div>
          <PaymentsTile />
        </div>
        
        {/* Medical NFTs Tile - Spans 2 columns on medium screens and above */}
        <div className="md:col-span-2 lg:col-span-1">
          <MedicalNFTsTile />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
