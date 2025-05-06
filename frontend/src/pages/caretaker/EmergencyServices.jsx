import { useState } from 'react';
import { toast } from 'react-toastify';

function EmergencyServices() {
  const [selectedDependent, setSelectedDependent] = useState('');
  const [emergencyType, setEmergencyType] = useState('');
  const [description, setDescription] = useState('');

  const dependents = [
    { id: '1', name: 'Sarah Smith' },
    { id: '2', name: 'James Smith' }
  ];

  const emergencyTypes = [
    { id: 'medical', label: 'Medical Emergency' },
    { id: 'fall', label: 'Fall Detection' },
    { id: 'medication', label: 'Medication Emergency' },
    { id: 'other', label: 'Other Emergency' }
  ];

  const handleEmergencyAlert = (e) => {
    e.preventDefault();
    toast.error('Emergency services have been notified!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Emergency Services</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>Use this form only in case of genuine emergencies. Emergency services will be contacted immediately.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleEmergencyAlert} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Dependent</label>
              <select
                value={selectedDependent}
                onChange={(e) => setSelectedDependent(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                required
              >
                <option value="">Select a dependent</option>
                {dependents.map(dependent => (
                  <option key={dependent.id} value={dependent.id}>
                    {dependent.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Emergency Type</label>
              <select
                value={emergencyType}
                onChange={(e) => setEmergencyType(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                required
              >
                <option value="">Select emergency type</option>
                {emergencyTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                placeholder="Describe the emergency situation..."
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Alert Emergency Services
              </button>
              <button
                type="button"
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900">Emergency Contacts</h3>
          <div className="mt-2 space-y-2">
            <p className="text-sm text-gray-500">Emergency Services: 911</p>
            <p className="text-sm text-gray-500">Primary Doctor: (555) 123-4567</p>
            <p className="text-sm text-gray-500">Poison Control: (800) 222-1222</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyServices;