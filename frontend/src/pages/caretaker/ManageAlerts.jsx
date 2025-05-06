import { useState } from 'react';
import { toast } from 'react-toastify';

function ManageAlerts() {
  const [alertSettings, setAlertSettings] = useState({
    medicationReminders: true,
    vitalSigns: true,
    missedCheckIns: true,
    emergencyAlerts: true,
    notificationPreferences: {
      email: true,
      sms: true,
      push: true
    },
    thresholds: {
      systolic: 140,
      diastolic: 90,
      heartRate: {
        min: 60,
        max: 100
      },
      temperature: 101
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAlertSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleThresholdChange = (category, value) => {
    setAlertSettings(prev => ({
      ...prev,
      thresholds: {
        ...prev.thresholds,
        [category]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Alert settings updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Alerts</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Alert Types */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Alert Types</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="medicationReminders"
                  checked={alertSettings.medicationReminders}
                  onChange={handleChange}
                  className="h-4 w-4 accent-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Medication Reminders</span>
              </label>
              <span className="text-sm text-gray-500">Notify when medications are due or missed</span>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="vitalSigns"
                  checked={alertSettings.vitalSigns}
                  onChange={handleChange}
                  className="h-4 w-4 accent-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Vital Signs Monitoring</span>
              </label>
              <span className="text-sm text-gray-500">Alert on abnormal vital signs</span>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="missedCheckIns"
                  checked={alertSettings.missedCheckIns}
                  onChange={handleChange}
                  className="h-4 w-4 accent-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Missed Check-ins</span>
              </label>
              <span className="text-sm text-gray-500">Alert when daily check-ins are missed</span>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="emergencyAlerts"
                  checked={alertSettings.emergencyAlerts}
                  onChange={handleChange}
                  className="h-4 w-4 accent-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Emergency Alerts</span>
              </label>
              <span className="text-sm text-gray-500">High-priority emergency notifications</span>
            </div>
          </div>
        </div>

        {/* Thresholds */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Alert Thresholds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Systolic BP (mmHg)</label>
              <input
                type="number"
                value={alertSettings.thresholds.systolic}
                onChange={(e) => handleThresholdChange('systolic', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Diastolic BP (mmHg)</label>
              <input
                type="number"
                value={alertSettings.thresholds.diastolic}
                onChange={(e) => handleThresholdChange('diastolic', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Heart Rate (Min BPM)</label>
              <input
                type="number"
                value={alertSettings.thresholds.heartRate.min}
                onChange={(e) => handleThresholdChange('heartRate', { ...alertSettings.thresholds.heartRate, min: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Heart Rate (Max BPM)</label>
              <input
                type="number"
                value={alertSettings.thresholds.heartRate.max}
                onChange={(e) => handleThresholdChange('heartRate', { ...alertSettings.thresholds.heartRate, max: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="notificationPreferences.email"
                checked={alertSettings.notificationPreferences.email}
                onChange={handleChange}
                className="h-4 w-4 accent-rose-600 focus:ring-rose-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Email Notifications</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="notificationPreferences.sms"
                checked={alertSettings.notificationPreferences.sms}
                onChange={handleChange}
                className="h-4 w-4 accent-rose-600 focus:ring-rose-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">SMS Notifications</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="notificationPreferences.push"
                checked={alertSettings.notificationPreferences.push}
                onChange={handleChange}
                className="h-4 w-4 accent-rose-600 focus:ring-rose-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Push Notifications</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            Save Alert Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default ManageAlerts;