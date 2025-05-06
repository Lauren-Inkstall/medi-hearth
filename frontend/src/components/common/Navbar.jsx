import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserCircle, Settings, LogOut } from 'lucide-react';
import { logout } from '../../store/authSlice';

export default function Navbar() {
  const location = useLocation();
  const navigate  = useNavigate();
  const dispatch  = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const [showDropdown, setShowDropdown] = useState(false);
  const roles = Array.isArray(user?.roles) ? user.roles : [];
  const primaryRole = roles[0] || 'patient';

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const getProfilePath = () => {
    switch (primaryRole) {
      case 'doctor':   return '/doctor/profile';
      case 'caretaker':return '/caretaker/profile';
      default:         return '/patient/profile';
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-rose-600">
            MediHearth
          </Link>

          {/* Role Tabs (if >1) */}
          {token && roles.length > 1 && (
            <div className="flex space-x-4">
              {roles.map(role => {
                const path = `/${role}/dashboard`;
                const isActive = location.pathname.startsWith(path);
                return (
                  <Link
                    key={role}
                    to={path}
                    className={`px-3 py-2 text-sm font-medium ${
                      isActive
                        ? 'text-rose-600 border-b-2 border-rose-600'
                        : 'text-gray-600 hover:text-rose-600'
                    }`}
                  >
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Auth Links OR Avatar + Dropdown */}
          <div className="flex items-center space-x-4">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-rose-600"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="focus:outline-none"
                >
                  {user.profilePicUrl ? (
                    <img
                      src={user.profilePicUrl}
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <UserCircle className="h-8 w-8 text-gray-600" />
                  )}
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link
                      to={getProfilePath()}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Change Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
