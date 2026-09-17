import React, { useState } from 'react';

function UserDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  function toggleAdmin() {
    setIsAdmin(!isAdmin);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-indigo-700 mb-4">Enterprise Portal Control</h2>
      
      <div className="flex space-x-3 mb-6">
        <button
          onClick={toggleLogin}
          className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700"
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
        {isLoggedIn && (
          <button
            onClick={toggleAdmin}
            className="bg-gray-700 text-white px-4 py-2 rounded text-sm hover:bg-gray-800"
          >
            {isAdmin ? 'Switch to Staff' : 'Switch to Admin'}
          </button>
        )}
      </div>

      {/* Conditional Rendering using Ternary Operator */}
      {isLoggedIn ? (
        <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
          <h3 className="font-bold text-green-800 text-lg">Welcome Back, Employee!</h3>
          <p className="text-sm text-green-700">You are securely connected to internal server.</p>
          
          {/* Logical && operator for admin privilege */}
          {isAdmin && (
            <div className="mt-3 p-2 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded text-xs font-bold">
              ⚡ Admin Privileges Active: Accessing System Diagnostics
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg text-center">
          <h3 className="font-bold text-gray-700 text-lg">Please Log In</h3>
          <p className="text-sm text-gray-500">Access restricted to authorized personnel only.</p>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
