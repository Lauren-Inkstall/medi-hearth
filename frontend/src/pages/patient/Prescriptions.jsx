import { useState } from 'react';

function Prescriptions() {
  const [filter, setFilter] = useState('active');

  const prescriptions = {
    active: [
      {
        id: 1,
        medication: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once daily',
        prescribedBy: 'Dr. Sarah Johnson',
        startDate: '2024-02-01',
        endDate: '2024-08-01',
        refillsRemaining: 3,
        instructions: 'Take in the morning with food'
      },
      {
        id: 2,
        medication: 'Metformin',
        dosage: '500mg',
        frequency: 'Twice daily',
        prescribedBy: 'Dr. Michael Chen',
        startDate: '2024-01-15',
        endDate: '2024-07-15',
        refillsRemaining: 2,
        instructions: 'Take with meals'
      }
    ],
    past: [
      {
        id: 3,
        medication: 'Amoxicillin',
        dosage: '500mg',
        frequency: 'Three times daily',
        prescribedBy: 'Dr. Sarah Johnson',
        startDate: '2023-12-01',
        endDate: '2023-12-14',
        refillsRemaining: 0,
        instructions: 'Complete full course'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Prescriptions</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === 'active'
                ? 'bg-rose-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === 'past'
                ? 'bg-rose-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Past
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {prescriptions[filter].map(prescription => (
          <div key={prescription.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{prescription.medication}</h2>
                  <p className="text-sm text-gray-500">Prescribed by {prescription.prescribedBy}</p>
                </div>
                {filter === 'active' && (
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                    Active
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Dosage</p>
                    <p className="mt-1 text-sm text-gray-900">{prescription.dosage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Frequency</p>
                    <p className="mt-1 text-sm text-gray-900">{prescription.frequency}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Instructions</p>
                    <p className="mt-1 text-sm text-gray-900">{prescription.instructions}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Start Date</p>
                    <p className="mt-1 text-sm text-gray-900">{prescription.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">End Date</p>
                    <p className="mt-1 text-sm text-gray-900">{prescription.endDate}</p>
                  </div>
                  {filter === 'active' && (
                    <div>
                      <p className="text-sm font-medium text-gray-500">Refills Remaining</p>
                      <p className="mt-1 text-sm text-gray-900">{prescription.refillsRemaining}</p>
                    </div>
                  )}
                </div>
              </div>

              {filter === 'active' && (
                <div className="mt-6 flex justify-end space-x-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700">
                    Request Refill
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Set Reminder
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

export default Prescriptions;