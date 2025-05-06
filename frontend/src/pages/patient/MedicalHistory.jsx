import { useState } from 'react';
import { toast } from 'react-toastify';

function MedicalHistory() {
  const [activeTab, setActiveTab] = useState('conditions');

  const medicalHistory = {
    conditions: [
      {
        name: 'Hypertension',
        diagnosedDate: '2023-05-15',
        status: 'active',
        notes: 'Well controlled with medication'
      },
      {
        name: 'Type 2 Diabetes',
        diagnosedDate: '2023-02-10',
        status: 'active',
        notes: 'Managing with diet and medication'
      }
    ],
    surgeries: [
      {
        procedure: 'Appendectomy',
        date: '2022-08-20',
        hospital: 'City General Hospital',
        surgeon: 'Dr. Michael Chen'
      }
    ],
    allergies: [
      {
        allergen: 'Penicillin',
        severity: 'severe',
        reaction: 'Rash and difficulty breathing'
      },
      {
        allergen: 'Peanuts',
        severity: 'moderate',
        reaction: 'Hives'
      }
    ],
    immunizations: [
      {
        vaccine: 'Influenza',
        date: '2024-01-15',
        dueDate: '2025-01-15'
      },
      {
        vaccine: 'COVID-19',
        date: '2023-09-01',
        dueDate: '2024-09-01'
      }
    ]
  };

  const handlePrint = () => {
    toast.info('Preparing medical history for printing...');
  };

  const handleDownload = () => {
    toast.info('Downloading medical history as PDF...');
  };

  const handleShare = () => {
    toast.info('Opening sharing options...');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Medical History</h1>
        <div className="flex space-x-4 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none px-4 py-2 border border-rose-600 text-rose-600 rounded-md hover:bg-rose-50"
          >
            Print
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 sm:flex-none px-4 py-2 border border-rose-600 text-rose-600 rounded-md hover:bg-rose-50"
          >
            Download
          </button>
          <button
            onClick={handleShare}
            className="flex-1 sm:flex-none px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
          >
            Share
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6 overflow-x-auto no-scrollbar">
        <nav className="-mb-px flex space-x-8">
          {['conditions', 'surgeries', 'allergies', 'immunizations'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-rose-500 text-rose-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          {activeTab === 'conditions' && (
            <div className="divide-y divide-gray-200">
              {medicalHistory.conditions.map((condition, index) => (
                <div key={index} className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{condition.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">Diagnosed: {condition.diagnosedDate}</p>
                    </div>
                    <span className={`mt-2 sm:mt-0 px-2 py-1 rounded-full text-xs ${
                      condition.status === 'active' ? 'bg-rose-100 text-rose-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {condition.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{condition.notes}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'surgeries' && (
            <div className="divide-y divide-gray-200">
              {medicalHistory.surgeries.map((surgery, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{surgery.procedure}</h3>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="text-sm font-medium text-gray-900">{surgery.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Hospital</p>
                      <p className="text-sm font-medium text-gray-900">{surgery.hospital}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Surgeon</p>
                      <p className="text-sm font-medium text-gray-900">{surgery.surgeon}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'allergies' && (
            <div className="divide-y divide-gray-200">
              {medicalHistory.allergies.map((allergy, index) => (
                <div key={index} className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h3 className="text-lg font-medium text-gray-900">{allergy.allergen}</h3>
                    <span className={`mt-2 sm:mt-0 px-2 py-1 rounded-full text-xs ${
                      allergy.severity === 'severe' ? 'bg-rose-100 text-rose-800' :
                      allergy.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {allergy.severity}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Reaction: {allergy.reaction}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'immunizations' && (
            <div className="divide-y divide-gray-200">
              {medicalHistory.immunizations.map((immunization, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{immunization.vaccine}</h3>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Last Received</p>
                      <p className="text-sm font-medium text-gray-900">{immunization.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Next Due</p>
                      <p className="text-sm font-medium text-gray-900">{immunization.dueDate}</p>
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

export default MedicalHistory;