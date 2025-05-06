import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Users, Activity } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Family's Health, <span className="text-rose-600">Connected</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Manage healthcare needs across generations with a single, secure platform
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-white text-rose-600 border border-rose-600 px-8 py-3 rounded-lg hover:bg-rose-50 transition"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-16">
        <div className="text-center p-6">
          <div className="inline-block p-4 bg-rose-100 rounded-full mb-4">
            <Users className="h-8 w-8 text-rose-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Multiple Roles</h3>
          <p className="text-gray-600">
            Whether you're a patient, caretaker, or doctor, MediHearth adapts to your needs
          </p>
        </div>

        <div className="text-center p-6">
          <div className="inline-block p-4 bg-rose-100 rounded-full mb-4">
            <Shield className="h-8 w-8 text-rose-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
          <p className="text-gray-600">
            Your health data is protected with industry-standard security measures
          </p>
        </div>

        <div className="text-center p-6">
          <div className="inline-block p-4 bg-rose-100 rounded-full mb-4">
            <Activity className="h-8 w-8 text-rose-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
          <p className="text-gray-600">
            Stay informed with instant notifications about health updates
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 bg-rose-50 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to take control of your family's health?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of families already using MediHearth
        </p>
        <Link
          to="/register"
          className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition"
        >
          Create Your Account
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;