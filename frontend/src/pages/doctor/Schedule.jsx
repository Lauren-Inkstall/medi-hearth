import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Schedule() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const appointments = [
    {
      id: 1,
      time: '09:00 AM',
      patient: 'John Doe',
      type: 'Check-up',
      duration: '30 min',
      status: 'scheduled'
    },
    {
      id: 2,
      time: '10:00 AM',
      patient: 'Jane Smith',
      type: 'Follow-up',
      duration: '45 min',
      status: 'confirmed'
    },
    {
      id: 3,
      time: '11:00 AM',
      patient: 'Robert Johnson',
      type: 'Consultation',
      duration: '30 min',
      status: 'completed'
    },
    {
      id: 4,
      time: '02:00 PM',
      patient: 'Alice Brown',
      type: 'Follow-up',
      duration: '30 min',
      status: 'scheduled'
    }
  ];

  const handleStatusChange = (appointmentId, newStatus) => {
    toast.success(`Appointment status updated to ${newStatus}`);
  };

  const handleAddAppointment = () => {
    navigate('/doctor/add-appointment');
  };

  const handleViewDetails = (appointmentId) => {
    toast.info('Viewing appointment details...');
  };

  const handleReschedule = (appointmentId) => {
    toast.info('Opening reschedule dialog...');
  };

  const handleCancel = (appointmentId) => {
    toast.warning('Opening cancellation confirmation...');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Schedule</h1>
        <button
          onClick={handleAddAppointment}
          className="w-full sm:w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
        >
          Add Appointment
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Date Selection */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            />
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm text-rose-600 hover:text-rose-700">Today</button>
              <button className="px-3 py-1 text-sm text-rose-600 hover:text-rose-700">Week</button>
              <button className="px-3 py-1 text-sm text-rose-600 hover:text-rose-700">Month</button>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="divide-y divide-gray-200">
          {appointments.map(appointment => (
            <div key={appointment.id} className="p-4 sm:p-6 hover:bg-gray-50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4 sm:mb-0">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                    <p className="text-sm text-gray-500">{appointment.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                    <p className="text-sm text-gray-500">{appointment.type}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <select
                    value={appointment.status}
                    onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                    className="w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 text-sm"
                  >
                    <option value="scheduled">Scheduled</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <div className="flex space-x-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleViewDetails(appointment.id)}
                      className="flex-1 sm:flex-none text-rose-600 hover:text-rose-700 text-sm"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleReschedule(appointment.id)}
                      className="flex-1 sm:flex-none text-rose-600 hover:text-rose-700 text-sm"
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => handleCancel(appointment.id)}
                      className="flex-1 sm:flex-none text-rose-600 hover:text-rose-700 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;