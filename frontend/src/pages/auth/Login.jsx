import React, { useState } from 'react';
import { useDispatch }         from 'react-redux';
import { useNavigate, Link }   from 'react-router-dom';
import { UserCircle }          from 'lucide-react';
import { loginSuccess }        from '../../store/authSlice';
import { toast }               from 'react-toastify';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // 1) Log in, get JWT tokens
      const res = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || 'Login failed');
      }
      const token = data.access;  // your access token

      // 2) Fetch the current user’s info
      const userRes = await fetch('/api/auth/user/', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const user = await userRes.json();
      if (!userRes.ok) {
        throw new Error('Failed to fetch user profile');
      }

      // 3) Dispatch into Redux, persist to localStorage
      dispatch(loginSuccess({ user, token }));
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('Login successful!');

      // 4) Redirect to first role’s dashboard
      const firstRole = Array.isArray(user.roles) && user.roles[0];
      navigate(`/${firstRole}/dashboard`);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgot = (e) => {
    e.preventDefault();
    toast.info('Password reset link sent to your email');
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white rounded-xl shadow-md overflow-hidden p-8">
      <div className="text-center mb-8">
        <UserCircle className="h-12 w-12 mx-auto text-rose-600" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="mt-2 text-gray-600">Please sign in to your account</p>
      </div>

      {error && (
        <div className="mb-4 text-center text-red-600 font-medium">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-rose-500 focus:border-rose-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       focus:outline-none focus:ring-rose-500 focus:border-rose-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleForgot}
            className="text-sm font-medium text-rose-600 hover:text-rose-500"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm
                     text-sm font-medium text-white bg-rose-600 hover:bg-rose-700
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?{' '}
        <Link to="/register" className="font-medium text-rose-600 hover:text-rose-500">
          Sign up
        </Link>
      </p>
    </div>
  );
}
