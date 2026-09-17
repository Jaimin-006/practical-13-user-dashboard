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
    <div className="p-6 max-w-md mx-auto bg-slate-900 rounded-xl shadow-xl border border-slate-800">
      <div className="border-b border-slate-800 pb-3 mb-5">
        <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Enterprise Portal Control
        </h2>
      </div>
      
      <div className="flex space-x-3 mb-6">
        <button
          onClick={toggleLogin}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow transition"
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
        {isLoggedIn && (
          <button
            onClick={toggleAdmin}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            {isAdmin ? 'Switch to Staff' : 'Switch to Admin'}
          </button>
        )}
      </div>

      {isLoggedIn ? (
        <div className="p-4 bg-emerald-950/50 border border-emerald-800/80 rounded-lg space-y-2">
          <h3 className="font-bold text-emerald-400 text-base">Welcome Back, Employee!</h3>
          <p className="text-xs text-emerald-300/80">You are securely connected to internal server.</p>
          
          {isAdmin && (
            <div className="mt-3 p-3 bg-amber-950/60 border border-amber-700/80 text-amber-300 rounded-lg text-xs font-semibold">
              ⚡ Admin Privileges Active: Accessing System Diagnostics
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-lg text-center">
          <h3 className="font-bold text-slate-300 text-base">Please Log In</h3>
          <p className="text-xs text-slate-400 mt-1">Access restricted to authorized personnel only.</p>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
