import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PatientDashboard from './pages/patient/Dashboard';
import CaretakerDashboard from './pages/caretaker/Dashboard';
import DoctorDashboard from './pages/doctor/Dashboard';
import PatientProfile from './pages/patient/Profile';
import CaretakerProfile from './pages/caretaker/Profile';
import DoctorProfile from './pages/doctor/Profile';
import NotFound from './pages/common/NotFound';

// Patient Pages
import HealthDashboard from './pages/patient/HealthDashboard';
import MedicalHistory from './pages/patient/MedicalHistory';
import Prescriptions from './pages/patient/Prescriptions';
import DailyCheckin from './pages/patient/DailyCheckin';
import InviteDoctor from './pages/patient/InviteDoctor';
import CareTeam from './pages/patient/CareTeam';
import Reports from './pages/patient/Reports';
import PatientSchedule from './pages/patient/Schedule';
import EmergencyContact from './pages/patient/EmergencyContact';
import PatientMessages from './pages/patient/Messages';

// Caretaker Pages
import MonitorDependents from './pages/caretaker/MonitorDependents';
import ManageAlerts from './pages/caretaker/ManageAlerts';
import CaretakerMessages from './pages/caretaker/Messages';
import CaretakerReports from './pages/caretaker/Reports';
import EmergencyServices from './pages/caretaker/EmergencyServices';

// Doctor Pages
import Schedule from './pages/doctor/Schedule';
import PatientList from './pages/doctor/PatientList';
import WritePrescription from './pages/doctor/WritePrescription';
import DoctorNotes from './pages/doctor/Notes';
import DoctorMessages from './pages/doctor/Messages';
import DoctorReports from './pages/doctor/Reports';
import EmergencyCases from './pages/doctor/EmergencyCases';
import AddAppointment from './pages/doctor/AddAppointment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Patient Routes */}
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/profile" element={<PatientProfile />} />
            <Route path="/patient/health" element={<HealthDashboard />} />
            <Route path="/patient/history" element={<MedicalHistory />} />
            <Route path="/patient/prescriptions" element={<Prescriptions />} />
            <Route path="/patient/checkin" element={<DailyCheckin />} />
            <Route path="/patient/invite" element={<InviteDoctor />} />
            <Route path="/patient/team" element={<CareTeam />} />
            <Route path="/patient/reports" element={<Reports />} />
            <Route path="/patient/schedule" element={<PatientSchedule />} />
            <Route path="/patient/emergency" element={<EmergencyContact />} />
            <Route path="/patient/messages" element={<PatientMessages />} />

            {/* Caretaker Routes */}
            <Route path="/caretaker/dashboard" element={<CaretakerDashboard />} />
            <Route path="/caretaker/profile" element={<CaretakerProfile />} />
            <Route path="/caretaker/monitor" element={<MonitorDependents />} />
            <Route path="/caretaker/alerts" element={<ManageAlerts />} />
            <Route path="/caretaker/messages" element={<CaretakerMessages />} />
            <Route path="/caretaker/reports" element={<CaretakerReports />} />
            <Route path="/caretaker/emergency" element={<EmergencyServices />} />

            {/* Doctor Routes */}
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/doctor/profile" element={<DoctorProfile />} />
            <Route path="/doctor/schedule" element={<Schedule />} />
            <Route path="/doctor/patients" element={<PatientList />} />
            <Route path="/doctor/prescriptions" element={<WritePrescription />} />
            <Route path="/doctor/notes" element={<DoctorNotes />} />
            <Route path="/doctor/messages" element={<DoctorMessages />} />
            <Route path="/doctor/reports" element={<DoctorReports />} />
            <Route path="/doctor/emergency" element={<EmergencyCases />} />
            <Route path="/doctor/add-appointment" element={<AddAppointment />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;