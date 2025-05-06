import { useState } from 'react';
import { toast } from 'react-toastify';

function DoctorMessages() {
  const [messages] = useState([
    {
      id: 1,
      from: 'John Doe (Patient)',
      subject: 'Question about medication',
      content: 'I\'ve been experiencing some side effects from the new medication...',
      timestamp: '2024-03-20 10:30 AM',
      unread: true
    },
    {
      id: 2,
      from: 'Jane Smith (Caretaker)',
      subject: 'Patient Update',
      content: 'Daily health report for Sarah Smith',
      timestamp: '2024-03-19 03:45 PM',
      unread: false
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    recipientType: '',
    recipient: '',
    subject: '',
    content: ''
  });

  const patients = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Sarah Smith' }
  ];

  const caretakers = [
    { id: '1', name: 'Jane Smith' },
    { id: '2', name: 'Robert Wilson' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setNewMessage({ recipientType: '', recipient: '', subject: '', content: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Message List */}
        <div className="md:col-span-1 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Inbox</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {messages.map(message => (
              <div
                key={message.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${message.unread ? 'bg-rose-50' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{message.from}</p>
                    <p className="text-sm text-gray-600">{message.subject}</p>
                  </div>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500 truncate">{message.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compose Message */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Compose Message</h2>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Recipient Type</label>
                <select
                  value={newMessage.recipientType}
                  onChange={(e) => setNewMessage({ ...newMessage, recipientType: e.target.value, recipient: '' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                >
                  <option value="">Select recipient type</option>
                  <option value="patient">Patient</option>
                  <option value="caretaker">Caretaker</option>
                </select>
              </div>

              {newMessage.recipientType && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Select Recipient</label>
                  <select
                    value={newMessage.recipient}
                    onChange={(e) => setNewMessage({ ...newMessage, recipient: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  >
                    <option value="">Select recipient</option>
                    {newMessage.recipientType === 'patient' && 
                      patients.map(patient => (
                        <option key={patient.id} value={patient.id}>
                          {patient.name}
                        </option>
                      ))
                    }
                    {newMessage.recipientType === 'caretaker' && 
                      caretakers.map(caretaker => (
                        <option key={caretaker.id} value={caretaker.id}>
                          {caretaker.name}
                        </option>
                      ))
                    }
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  value={newMessage.subject}
                  onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  value={newMessage.content}
                  onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorMessages;