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
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm border border-zinc-300">
      <h2 className="text-xl font-bold text-zinc-900 mb-4 border-b border-zinc-200 pb-2">
        Enterprise Portal Control
      </h2>
      
      <div className="flex space-x-3 mb-6">
        <button
          onClick={toggleLogin}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
        {isLoggedIn && (
          <button
            onClick={toggleAdmin}
            className="bg-zinc-700 hover:bg-zinc-800 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
          >
            {isAdmin ? 'Switch to Staff' : 'Switch to Admin'}
          </button>
        )}
      </div>

      {isLoggedIn ? (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md">
          <h3 className="font-bold text-emerald-900 text-base">Welcome Back, Employee!</h3>
          <p className="text-xs text-emerald-700 mt-1">You are securely connected to internal server.</p>
          
          {isAdmin && (
            <div className="mt-3 p-2.5 bg-amber-50 border border-amber-300 text-amber-900 rounded text-xs font-semibold">
              ⚡ Admin Privileges Active: Accessing System Diagnostics
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-md text-center">
          <h3 className="font-bold text-zinc-800 text-base">Please Log In</h3>
          <p className="text-xs text-zinc-500 mt-1">Access restricted to authorized personnel only.</p>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
