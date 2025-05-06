import { useState } from 'react';
import { toast } from 'react-toastify';

function EmergencyCases() {
  const [activeView, setActiveView] = useState('active');
  const [emergencyCases] = useState({
    active: [
      {
        id: 1,
        patient: 'John Doe',
        type: 'Severe Allergic Reaction',
        status: 'active',
        time: '10 minutes ago',
        location: '123 Main St, Apt 4B',
        vitals: {
          bp: '140/90',
          pulse: '110',
          temp: '101.2°F'
        }
      },
      {
        id: 2,
        patient: 'Jane Smith',
        type: 'Fall Incident',
        status: 'pending',
        time: '25 minutes ago',
        location: '456 Oak Ave',
        vitals: {
          bp: '125/85',
          pulse: '88',
          temp: '98.6°F'
        }
      }
    ],
    past: [
      {
        id: 3,
        patient: 'Robert Johnson',
        type: 'Chest Pain',
        status: 'resolved',
        time: '2 days ago',
        location: '789 Pine St',
        vitals: {
          bp: '135/88',
          pulse: '95',
          temp: '98.9°F'
        }
      },
      {
        id: 4,
        patient: 'Mary Williams',
        type: 'Diabetic Emergency',
        status: 'resolved',
        time: '3 days ago',
        location: '321 Elm St',
        vitals: {
          bp: '128/82',
          pulse: '86',
          temp: '98.4°F'
        }
      }
    ]
  });

  const handleRespond = (caseId) => {
    toast.success('Response submitted successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Emergency Cases</h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => setActiveView('active')}
            className={`inline-flex items-center px-4 py-2 border ${
              activeView === 'active'
                ? 'border-transparent text-white bg-rose-600 hover:bg-rose-700'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            } text-sm font-medium rounded-md`}
          >
            Active Cases
          </button>
          <button 
            onClick={() => setActiveView('past')}
            className={`inline-flex items-center px-4 py-2 border ${
              activeView === 'past'
                ? 'border-transparent text-white bg-rose-600 hover:bg-rose-700'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            } text-sm font-medium rounded-md`}
          >
            Past Cases
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {emergencyCases[activeView].map(emergency => (
          <div key={emergency.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{emergency.patient}</h2>
                  <p className="text-sm text-gray-500">{emergency.type}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  emergency.status === 'active' ? 'bg-red-100 text-red-800' : 
                  emergency.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {emergency.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Emergency Details</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">Reported:</span> {emergency.time}
                    </p>
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">Location:</span> {emergency.location}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Vital Signs</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs text-gray-500">Blood Pressure</p>
                      <p className="text-sm font-medium text-gray-900">{emergency.vitals.bp}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs text-gray-500">Pulse</p>
                      <p className="text-sm font-medium text-gray-900">{emergency.vitals.pulse}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs text-gray-500">Temperature</p>
                      <p className="text-sm font-medium text-gray-900">{emergency.vitals.temp}</p>
                    </div>
                  </div>
                </div>
              </div>

              {activeView === 'active' && (
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={() => handleRespond(emergency.id)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
                  >
                    Respond Now
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    View Details
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencyCases;