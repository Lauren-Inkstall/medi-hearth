import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Bell, MessageSquare, FileText, Activity } from 'lucide-react';

function CaretakerDashboard() {
  const navigate = useNavigate();
  const dependents = [
    { name: 'John Doe', status: 'Needs attention', lastCheckin: '2 hours ago' },
    { name: 'Jane Smith', status: 'All good', lastCheckin: '30 minutes ago' }
  ];

  const handleEmergencyServices = () => {
    navigate('/caretaker/emergency');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Caretaker Dashboard</h1>
        <button 
          onClick={handleEmergencyServices}
          className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
        >
          Emergency Services
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Dependents Overview</h2>
            <div className="space-y-4">
              {dependents.map((dependent, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{dependent.name}</h3>
                    <p className="text-sm text-gray-600">Last check-in: {dependent.lastCheckin}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    dependent.status === 'All good' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {dependent.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Activity className="h-5 w-5 text-rose-500" />
                <span className="text-gray-600">John missed his morning medication</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Activity className="h-5 w-5 text-rose-500" />
                <span className="text-gray-600">Jane completed her daily health check-in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Activity className="h-5 w-5 text-rose-500" />
                <span className="text-gray-600">New prescription added for John</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link to="/caretaker/monitor" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                <Users className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Monitor Dependents</span>
              </Link>
              <Link to="/caretaker/alerts" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Manage Alerts</span>
              </Link>
              <Link to="/caretaker/messages" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                <MessageSquare className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Doctor Messages</span>
              </Link>
              <Link to="/caretaker/reports" className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                <FileText className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">View Reports</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Doctor's Appointment</p>
                <p className="text-sm text-gray-600">John - Tomorrow at 10:00 AM</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Medication Refill</p>
                <p className="text-sm text-gray-600">Jane - In 3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaretakerDashboard;