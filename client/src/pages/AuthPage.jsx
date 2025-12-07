import React, { useState } from 'react';
import { LoginForm } from '../components/Auth/LoginForm';
import { RegisterForm } from '../components/Auth/RegisterForm';

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {showLogin ? (
        <LoginForm onSwitchToRegister={() => setShowLogin(false)} />
      ) : (
        <RegisterForm onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}