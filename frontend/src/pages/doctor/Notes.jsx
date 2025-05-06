import { useState } from 'react';
import { toast } from 'react-toastify';

function DoctorNotes() {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [noteType, setNoteType] = useState('progress');
  const [noteContent, setNoteContent] = useState('');

  const patients = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Robert Johnson' }
  ];

  const noteTypes = [
    { id: 'progress', label: 'Progress Note' },
    { id: 'consultation', label: 'Consultation Note' },
    { id: 'procedure', label: 'Procedure Note' },
    { id: 'lab', label: 'Lab Results Note' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Clinical note saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Clinical Notes</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Patient</label>
              <select
                value={selectedPatient}
                onChange={(e) => setSelectedPatient(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                required
              >
                <option value="">Select a patient</option>
                {patients.map(patient => (
                  <option key={patient.id} value={patient.id}>
                    {patient.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Note Type</label>
              <select
                value={noteType}
                onChange={(e) => setNoteType(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                required
              >
                {noteTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Clinical Note</label>
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              rows={10}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              placeholder="Enter your clinical notes here..."
              required
            />
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Save Note
            </button>
          </div>
        </div>
      </form>

      {/* Previous Notes Preview */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Previous Notes</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-rose-500 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-900">Progress Note</p>
                <p className="text-sm text-gray-500">March 20, 2024</p>
              </div>
              <button className="text-rose-600 hover:text-rose-700">View</button>
            </div>
          </div>
          <div className="border-l-4 border-rose-500 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-900">Consultation Note</p>
                <p className="text-sm text-gray-500">March 15, 2024</p>
              </div>
              <button className="text-rose-600 hover:text-rose-700">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorNotes;