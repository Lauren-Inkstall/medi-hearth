import React from 'react';
import { UserCircle } from 'lucide-react';

function CareTeam() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Care Team</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example care team members */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <UserCircle className="h-12 w-12 text-rose-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Dr. Sarah Johnson</h3>
              <p className="text-gray-600">Primary Care Physician</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Specializes in Internal Medicine</p>
            <div className="mt-4 flex space-x-2">
              <button className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors">
                Message
              </button>
              <button className="px-4 py-2 border border-rose-600 text-rose-600 rounded-md hover:bg-rose-50 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <UserCircle className="h-12 w-12 text-rose-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-gray-600">Registered Nurse</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Primary Care Support</p>
            <div className="mt-4 flex space-x-2">
              <button className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors">
                Message
              </button>
              <button className="px-4 py-2 border border-rose-600 text-rose-600 rounded-md hover:bg-rose-50 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <UserCircle className="h-12 w-12 text-rose-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Dr. Michael Chen</h3>
              <p className="text-gray-600">Specialist</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Cardiologist</p>
            <div className="mt-4 flex space-x-2">
              <button className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors">
                Message
              </button>
              <button className="px-4 py-2 border border-rose-600 text-rose-600 rounded-md hover:bg-rose-50 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button className="px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors">
          Add Team Member
        </button>
      </div>
    </div>
  );
}

export default CareTeam;