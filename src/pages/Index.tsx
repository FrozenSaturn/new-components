
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Stethoscope, Shield, Heart, FileText, Award } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/dashboard?role=${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Decentralized Healthcare Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, transparent, and patient-centric healthcare powered by blockchain technology. 
            Manage appointments, medical records, and payments with complete data ownership.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Secure Medical Records</h3>
              <p className="text-gray-600">
                Store medical records on IPFS with blockchain verification for ultimate security and accessibility.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Smart Appointments</h3>
              <p className="text-gray-600">
                Book appointments with verified doctors and track treatment progress in real-time.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Medical NFTs</h3>
              <p className="text-gray-600">
                Receive verifiable treatment certificates as NFTs proving your medical history.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Role Selection */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Dashboard
          </h2>
          <p className="text-gray-600 mb-8">
            Select your role to access the appropriate healthcare management tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Patient Dashboard */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 group-hover:bg-blue-200 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center transition-colors">
                <User className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Patient Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Manage your health records, book appointments, and track treatments
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                <li>• Search and book doctors</li>
                <li>• Upload medical records to IPFS</li>
                <li>• Track appointment status</li>
                <li>• Make secure payments</li>
                <li>• View medical NFT certificates</li>
              </ul>
              <Button 
                onClick={() => handleRoleSelection('patient')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Enter Patient Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Doctor Dashboard */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 group-hover:bg-green-200 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center transition-colors">
                <Stethoscope className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Doctor Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Manage appointments, submit diagnoses, and track patient care
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                <li>• View appointment queue</li>
                <li>• Access patient records</li>
                <li>• Submit diagnoses to IPFS</li>
                <li>• Track treatment history</li>
                <li>• Manage hospital affiliation</li>
              </ul>
              <Button 
                onClick={() => handleRoleSelection('doctor')}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Enter Doctor Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Admin Dashboard */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <CardContent className="p-8 text-center">
              <div className="bg-purple-100 group-hover:bg-purple-200 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center transition-colors">
                <Shield className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Admin Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Oversee platform operations, verify users, and manage payments
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                <li>• Verify doctor/hospital roles</li>
                <li>• Manage hospital networks</li>
                <li>• Track payment completion</li>
                <li>• Mint medical NFTs</li>
                <li>• Monitor system activity</li>
              </ul>
              <Button 
                onClick={() => handleRoleSelection('admin')}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Enter Admin Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Blockchain Features */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Powered by Blockchain Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="font-semibold">Secure & Immutable</h4>
              <p className="text-sm text-gray-600">Data stored on blockchain</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <User className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="font-semibold">Patient-Owned</h4>
              <p className="text-sm text-gray-600">You control your data</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="font-semibold">IPFS Storage</h4>
              <p className="text-sm text-gray-600">Decentralized file storage</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="font-semibold">NFT Certificates</h4>
              <p className="text-sm text-gray-600">Verifiable treatment records</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
