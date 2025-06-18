
import React from 'react';
import { Calendar, FileText, FolderOpen } from 'lucide-react';
import DoctorAppointmentsTile from '../doctor/tiles/DoctorAppointmentsTile';
import DiagnosisSubmissionTile from '../doctor/tiles/DiagnosisSubmissionTile';
import MedicalRecordAccessTile from '../doctor/tiles/MedicalRecordAccessTile';

const DoctorDashboard = () => {
  // TODO: Fetch doctor data from Supabase
  const doctorData = {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    pendingAppointments: 8,
    completedToday: 5,
    awaitingDiagnosis: 3
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
          <p className="text-gray-600">Welcome back, {doctorData.name}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">{doctorData.pendingAppointments} Pending</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
            <FileText className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">{doctorData.awaitingDiagnosis} Awaiting Diagnosis</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Appointments Tile - Spans 2 columns on large screens */}
        <div className="lg:col-span-2">
          <DoctorAppointmentsTile />
        </div>
        
        {/* Diagnosis Submission Tile */}
        <div>
          <DiagnosisSubmissionTile />
        </div>
        
        {/* Medical Record Access Tile - Spans 2 columns on medium screens */}
        <div className="md:col-span-2 lg:col-span-1">
          <MedicalRecordAccessTile />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
