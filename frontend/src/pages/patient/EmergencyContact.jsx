import React, { useState } from 'react';
import { AlertTriangle, Phone, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function EmergencyContact() {
  const navigate = useNavigate();
  const [emergencyType, setEmergencyType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const emergencyTypes = [
    'Medical Emergency',
    'Severe Pain',
    'Breathing Difficulty',
    'Injury',
    'Other'
  ];

  const handleEmergencySubmit = (e) => {
    e.preventDefault();
    if (!emergencyType || !description) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.error('Emergency services have been notified!');
    setTimeout(() => {
      toast.info('Emergency response team is on their way');
      navigate('/patient/dashboard');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <div className="flex">
          <AlertTriangle className="h-6 w-6 text-red-500 mr-4" />
          <div>
            <h1 className="text-lg font-medium text-red-800">Emergency Contact</h1>
            <p className="text-sm text-red-700 mt-1">
              Use this form only in case of genuine emergencies. Emergency services will be contacted immediately.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleEmergencySubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Emergency Type
            </label>
            <select
              value={emergencyType}
              onChange={(e) => setEmergencyType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              required
            >
              <option value="">Select emergency type</option>
              {emergencyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              placeholder="Describe your emergency situation..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Location
            </label>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                placeholder="Enter your current location"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Emergency Contacts</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-rose-600 mr-2" />
                <span className="text-sm text-gray-600">Emergency Services: 911</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-rose-600 mr-2" />
                <span className="text-sm text-gray-600">Primary Doctor: (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/patient/dashboard')}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
            >
              Contact Emergency Services
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmergencyContact;