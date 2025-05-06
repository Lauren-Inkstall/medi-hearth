import React from 'react';
import { Calendar, CheckCircle, AlertTriangle, Activity } from 'lucide-react';

function DailyCheckin() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Daily Health Check-in</h1>
        <p className="text-gray-600">Track your daily health metrics and symptoms</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <Calendar className="h-6 w-6 text-rose-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Today's Check-in</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">Vital Signs</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Blood Pressure</span>
                <input 
                  type="text" 
                  placeholder="120/80"
                  className="border rounded px-3 py-1 w-24 text-right focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Heart Rate</span>
                <input 
                  type="number" 
                  placeholder="75"
                  className="border rounded px-3 py-1 w-24 text-right focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Temperature (°F)</span>
                <input 
                  type="number" 
                  step="0.1"
                  placeholder="98.6"
                  className="border rounded px-3 py-1 w-24 text-right focus:ring-rose-500 focus:border-rose-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">Symptoms</h3>
            <div className="space-y-2">
              {['Fatigue', 'Pain', 'Nausea', 'Dizziness'].map((symptom) => (
                <div key={symptom} className="flex items-center">
                  <input
                    type="checkbox"
                    id={symptom}
                    className="h-4 w-4 accent-rose-600 rounded border-gray-300 focus:ring-rose-500"
                  />
                  <label htmlFor={symptom} className="ml-2 text-gray-700">
                    {symptom}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium text-gray-700 mb-3">Additional Notes</h3>
          <textarea
            className="w-full border rounded-lg p-3 h-24 focus:ring-rose-500 focus:border-rose-500"
            placeholder="Any other symptoms or concerns..."
          ></textarea>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Submit Check-in
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Activity className="h-6 w-6 text-rose-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Weekly Trends</h2>
          </div>
          <p className="text-gray-600">Your health metrics have been stable this week.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-rose-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Reminders</h2>
          </div>
          <p className="text-gray-600">Don't forget to take your evening medication.</p>
        </div>
      </div>
    </div>
  );
}

export default DailyCheckin;