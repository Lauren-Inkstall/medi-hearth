import { useState } from 'react';

function HealthDashboard() {
  const [healthMetrics] = useState({
    vitals: {
      heartRate: '72 bpm',
      bloodPressure: '120/80',
      temperature: '98.6°F',
      oxygenLevel: '98%'
    },
    medications: [
      {
        name: 'Lisinopril',
        dosage: '10mg',
        schedule: 'Morning',
        status: 'taken'
      },
      {
        name: 'Metformin',
        dosage: '500mg',
        schedule: 'Evening',
        status: 'pending'
      }
    ],
    appointments: [
      {
        id: 1,
        doctor: 'Dr. Sarah Johnson',
        date: '2024-03-25',
        time: '10:00 AM',
        type: 'Regular Checkup'
      }
    ],
    symptoms: [
      {
        date: '2024-03-20',
        type: 'Headache',
        severity: 'mild',
        duration: '2 hours'
      },
      {
        date: '2024-03-19',
        type: 'Fatigue',
        severity: 'moderate',
        duration: 'All day'
      }
    ]
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Health Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Vital Signs */}
        {Object.entries(healthMetrics.vitals).map(([key, value]) => (
          <div key={key} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-sm font-medium text-gray-500 uppercase">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            <p className="mt-2 text-3xl font-semibold text-rose-600">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Medications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Medications</h2>
          <div className="space-y-4">
            {healthMetrics.medications.map((med, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium text-gray-900">{med.name}</p>
                  <p className="text-sm text-gray-500">{med.dosage} - {med.schedule}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  med.status === 'taken' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {med.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {healthMetrics.appointments.map(appointment => (
              <div key={appointment.id} className="p-4 bg-gray-50 rounded-md">
                <p className="font-medium text-gray-900">{appointment.doctor}</p>
                <p className="text-sm text-gray-500">{appointment.type}</p>
                <p className="text-sm text-gray-500">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Symptoms */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Symptoms</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Symptom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {healthMetrics.symptoms.map((symptom, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {symptom.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {symptom.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      symptom.severity === 'mild' ? 'bg-green-100 text-green-800' :
                      symptom.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {symptom.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {symptom.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HealthDashboard;