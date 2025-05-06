import React, { useState } from 'react';
import { Search, UserPlus, CheckCircle } from 'lucide-react';

function InviteDoctor() {
  const [searchQuery, setSearchQuery] = useState('');
  const [inviteSent, setInviteSent] = useState(false);

  const handleInvite = () => {
    setInviteSent(true);
    setTimeout(() => setInviteSent(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Invite a Doctor</h1>
      
      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for doctors by name or specialty..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Doctor List */}
      <div className="space-y-4">
        {/* Example Doctor Cards */}
        {[
          {
            name: "Dr. Sarah Johnson",
            specialty: "Cardiologist",
            hospital: "Central Medical Center",
            rating: 4.8
          },
          {
            name: "Dr. Michael Chen",
            specialty: "Neurologist",
            hospital: "City General Hospital",
            rating: 4.9
          }
        ].map((doctor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-gray-500 text-sm">{doctor.hospital}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-600">{doctor.rating}</span>
              </div>
            </div>
            <button
              onClick={handleInvite}
              className="flex items-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
            >
              {inviteSent ? (
                <>
                  <CheckCircle size={20} className="mr-2" />
                  Invited
                </>
              ) : (
                <>
                  <UserPlus size={20} className="mr-2" />
                  Invite
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* No Results State */}
      {searchQuery && (
        <div className="text-center py-8">
          <p className="text-gray-600">No doctors found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}

export default InviteDoctor;