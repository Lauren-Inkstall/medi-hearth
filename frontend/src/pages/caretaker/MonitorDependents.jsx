import React, { useState } from 'react';
import { Activity, Bell, Heart, Pill } from 'lucide-react';
import { toast } from 'react-toastify';

function MonitorDependents() {
  const [dependentId, setDependentId] = useState('');
  const [dependents, setDependents] = useState([
    {
      name: 'John Doe',
      age: 75,
      status: 'Needs attention',
      vitals: {
        heartRate: '78 bpm',
        bloodPressure: '130/85',
        temperature: '37.2°C'
      },
      medications: [
        { name: 'Lisinopril', schedule: 'Morning', status: 'Taken' },
        { name: 'Metformin', schedule: 'Evening', status: 'Due' }
      ]
    },
    {
      name: 'Jane Smith',
      age: 68,
      status: 'Stable',
      vitals: {
        heartRate: '72 bpm',
        bloodPressure: '120/80',
        temperature: '36.8°C'
      },
      medications: [
        { name: 'Aspirin', schedule: 'Morning', status: 'Taken' },
        { name: 'Simvastatin', schedule: 'Evening', status: 'Taken' }
      ]
    }
  ]);

  const handleAddDependent = () => {
    if (dependentId.trim()) {
      toast.success('Searching for dependent with ID: ' + dependentId);
      // Simulating API call delay
      setTimeout(() => {
        toast.info('Dependent found and added to your list');
        setDependentId('');
      }, 1500);
    } else {
      toast.error('Please enter a dependent ID');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Monitor Dependents</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Enter Dependent ID"
            value={dependentId}
            onChange={(e) => setDependentId(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button
            onClick={handleAddDependent}
            className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
          >
            Add Dependent
          </button>
        </div>
      </div>

      {dependents.map((dependent, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{dependent.name}</h2>
              <p className="text-gray-600">Age: {dependent.age}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              dependent.status === 'Stable' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {dependent.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Current Vitals</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-rose-600" />
                  <span className="text-gray-600">Heart Rate: {dependent.vitals.heartRate}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="h-5 w-5 text-rose-600" />
                  <span className="text-gray-600">BP: {dependent.vitals.bloodPressure}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-rose-600" />
                  <span className="text-gray-600">Temp: {dependent.vitals.temperature}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Medications</h3>
              <div className="space-y-3">
                {dependent.medications.map((med, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Pill className="h-5 w-5 text-rose-600" />
                      <div>
                        <p className="text-gray-900">{med.name}</p>
                        <p className="text-sm text-gray-600">{med.schedule}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-sm ${
                      med.status === 'Taken' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {med.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700">
                  Contact Doctor
                </button>
                <button className="w-full px-4 py-2 border border-rose-600 text-rose-600 rounded-lg hover:bg-rose-50">
                  View History
                </button>
                <button className="w-full px-4 py-2 border border-rose-600 text-rose-600 rounded-lg hover:bg-rose-50">
                  Update Medications
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MonitorDependents;