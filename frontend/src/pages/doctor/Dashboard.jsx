import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, FileText, MessageSquare, PlusCircle, ClipboardList } from 'lucide-react';
import { toast } from 'react-toastify';

function DoctorDashboard() {
  const navigate = useNavigate();

  const patients = [
    { name: 'Alice Johnson', status: 'Follow-up needed', lastVisit: '3 days ago' },
    { name: 'Bob Wilson', status: 'Stable', lastVisit: '1 week ago' },
    { name: 'Carol Smith', status: 'New prescription', lastVisit: 'Today' }
  ];

  const handleViewSchedule = () => {
    navigate('/doctor/schedule');
  };

  const handleEmergencyCases = () => {
    navigate('/doctor/emergency');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
        <div className="flex space-x-4">
          <button
            onClick={handleViewSchedule}
            className="px-4 py-2 border border-rose-600 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
          >
            View Schedule
          </button>
          <button
            onClick={handleEmergencyCases}
            className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
          >
            Emergency Cases
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Patient List</h2>
              <Link to="/doctor/patients" className="text-rose-600 hover:text-rose-700 text-sm">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {patients.map((patient, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{patient.name}</h3>
                    <p className="text-sm text-gray-600">Last visit: {patient.lastVisit}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    patient.status === 'Stable' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {patient.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Updated prescription for Alice Johnson</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Reviewed lab results for Bob Wilson</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600">New message from Carol Smith's caretaker</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link to="/doctor/prescriptions" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                <PlusCircle className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Write Prescription</span>
              </Link>
              <Link to="/doctor/notes" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                <ClipboardList className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Add Notes</span>
              </Link>
              <Link to="/doctor/messages" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                <MessageSquare className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Messages</span>
              </Link>
              <Link to="/doctor/reports" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                <FileText className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">View Reports</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Schedule</h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">10:00 AM</p>
                <p className="text-sm text-gray-600">Follow-up with Alice Johnson</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">2:30 PM</p>
                <p className="text-sm text-gray-600">New patient consultation</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">4:00 PM</p>
                <p className="text-sm text-gray-600">Virtual appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;