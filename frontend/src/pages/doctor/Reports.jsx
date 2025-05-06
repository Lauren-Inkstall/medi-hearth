import { useState } from 'react';

function DoctorReports() {
  const [reportType, setReportType] = useState('patient');
  const [dateRange, setDateRange] = useState('week');

  const reports = {
    patient: [
      {
        id: 1,
        name: 'John Doe',
        type: 'Progress Report',
        date: '2024-03-20',
        status: 'Improved'
      },
      {
        id: 2,
        name: 'Jane Smith',
        type: 'Treatment Report',
        date: '2024-03-19',
        status: 'Stable'
      }
    ],
    appointments: [
      {
        id: 1,
        date: '2024-03-20',
        total: 8,
        completed: 6,
        cancelled: 2
      },
      {
        id: 2,
        date: '2024-03-19',
        total: 10,
        completed: 9,
        cancelled: 1
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Reports</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Report Controls */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex space-x-4">
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              >
                <option value="patient">Patient Reports</option>
                <option value="appointments">Appointment Reports</option>
                <option value="prescriptions">Prescription Reports</option>
              </select>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              >
                <option value="day">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700">
              Generate Report
            </button>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-6">
          {reportType === 'patient' && (
            <div className="space-y-6">
              {reports.patient.map(report => (
                <div key={report.id} className="border-l-4 border-rose-500 pl-4 py-4 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{report.name}</h3>
                      <p className="text-sm text-gray-500">{report.type} - {report.date}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                      {report.status}
                    </span>
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <button className="text-rose-600 hover:text-rose-700 text-sm">View Details</button>
                    <button className="text-gray-600 hover:text-gray-700 text-sm">Download PDF</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {reportType === 'appointments' && (
            <div className="space-y-6">
              {reports.appointments.map(report => (
                <div key={report.id} className="border-l-4 border-rose-500 pl-4 py-4 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Daily Appointments</h3>
                      <p className="text-sm text-gray-500">{report.date}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-gray-500">Total Appointments</p>
                      <p className="text-2xl font-semibold text-gray-900">{report.total}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-md">
                      <p className="text-sm text-gray-500">Completed</p>
                      <p className="text-2xl font-semibold text-green-600">{report.completed}</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-md">
                      <p className="text-sm text-gray-500">Cancelled</p>
                      <p className="text-2xl font-semibold text-red-600">{report.cancelled}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorReports;