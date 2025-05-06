import { useState } from 'react';

function CaretakerReports() {
  const [selectedReport, setSelectedReport] = useState('health');
  const [dateRange, setDateRange] = useState('week');

  const reports = {
    health: [
      {
        dependent: 'Sarah Smith',
        type: 'Health Summary',
        date: '2024-03-20',
        status: 'stable',
        details: 'Blood pressure and heart rate within normal range'
      },
      {
        dependent: 'James Smith',
        type: 'Health Summary',
        date: '2024-03-19',
        status: 'attention',
        details: 'Slightly elevated blood pressure'
      }
    ],
    medication: [
      {
        dependent: 'Sarah Smith',
        type: 'Medication Adherence',
        date: '2024-03-20',
        status: 'good',
        details: '100% medication compliance'
      },
      {
        dependent: 'James Smith',
        type: 'Medication Adherence',
        date: '2024-03-19',
        status: 'warning',
        details: 'Missed evening medication'
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
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              >
                <option value="health">Health Reports</option>
                <option value="medication">Medication Reports</option>
              </select>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              >
                <option value="day">Last 24 Hours</option>
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
              </select>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700">
              Download Report
            </button>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-6">
          <div className="space-y-6">
            {reports[selectedReport].map((report, index) => (
              <div key={index} className="border-l-4 border-rose-500 pl-4 py-4 bg-white rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{report.dependent}</h3>
                    <p className="text-sm text-gray-500">{report.type} - {report.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    report.status === 'good' || report.status === 'stable' ? 'bg-green-100 text-green-800' :
                    report.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{report.details}</p>
                <div className="mt-4 flex space-x-4">
                  <button className="text-rose-600 hover:text-rose-700 text-sm">View Details</button>
                  <button className="text-gray-600 hover:text-gray-700 text-sm">Share Report</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaretakerReports;