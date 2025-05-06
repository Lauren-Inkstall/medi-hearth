import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Pill, Calendar, FileText, UserPlus, Users, Upload, MessageSquare } from 'lucide-react';
import { toast } from 'react-toastify';

function PatientDashboard() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Activity, title: 'Health Dashboard', description: 'View vitals and check-ins', link: '/patient/health' },
    { icon: FileText, title: 'Medical History', description: 'Past illnesses and records', link: '/patient/history' },
    { icon: Pill, title: 'Prescriptions', description: 'Manage medications', link: '/patient/prescriptions' },
    { icon: Calendar, title: 'Daily Check-in', description: 'Track your symptoms', link: '/patient/checkin' },
    { icon: UserPlus, title: 'Invite Doctor', description: 'Add to your care team', link: '/patient/invite' },
    { icon: Users, title: 'Care Team', description: 'View your healthcare team', link: '/patient/team' },
    { icon: Upload, title: 'Reports & Uploads', description: 'Manage health documents', link: '/patient/reports' },
    { icon: MessageSquare, title: 'Messages', description: 'Communicate with your care team', link: '/patient/messages' }
  ];

  const handleEmergencyContact = () => {
    navigate('/patient/emergency');
  };

  const handleScheduleVisit = () => {
    navigate('/patient/schedule');
  };

  const handleRefillMeds = () => {
    navigate('/patient/prescriptions');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Patient Dashboard</h1>
        <button
          onClick={handleEmergencyContact}
          className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
        >
          Emergency Contact
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.link)}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-left"
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-rose-100 rounded-lg">
                <item.icon className="h-6 w-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <span className="text-gray-600">Medication reminder: Ibuprofen - 2 tablets</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <span className="text-gray-600">Dr. Smith viewed your health records</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <span className="text-gray-600">Upcoming appointment: Dental check-up</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleScheduleVisit}
              className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              <Calendar className="h-6 w-6 mx-auto mb-2 text-rose-600" />
              <span className="text-sm text-gray-700">Schedule Visit</span>
            </button>
            <button
              onClick={handleRefillMeds}
              className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              <Pill className="h-6 w-6 mx-auto mb-2 text-rose-600" />
              <span className="text-sm text-gray-700">Refill Meds</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;