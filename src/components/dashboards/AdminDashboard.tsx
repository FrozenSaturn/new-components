
import React from 'react';
import { Shield, FileText, Award } from 'lucide-react';
import RoleRequestsTile from '../admin/tiles/RoleRequestsTile';
import MintManageAppointmentsTile from '../admin/tiles/MintManageAppointmentsTile';
import NFTHistoryTile from '../admin/tiles/NFTHistoryTile';

const AdminDashboard = () => {
  // TODO: Fetch admin statistics from Supabase
  const adminStats = {
    pendingRoleRequests: 5,
    totalAppointments: 24,
    mintedNFTs: 18,
    completedAppointments: 15
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">System management and oversight</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-lg">
            <Shield className="h-5 w-5 text-red-600" />
            <span className="text-sm font-medium">{adminStats.pendingRoleRequests} Role Requests</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
            <FileText className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">{adminStats.totalAppointments} Appointments</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Role Requests Tile */}
        <div>
          <RoleRequestsTile />
        </div>
        
        {/* Mint & Manage Appointments Tile - Spans 2 columns */}
        <div className="md:col-span-2 lg:col-span-2">
          <MintManageAppointmentsTile />
        </div>
        
        {/* NFT History Tile - Spans full width on mobile, 1 column on larger screens */}
        <div className="md:col-span-2 lg:col-span-1">
          <NFTHistoryTile />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
