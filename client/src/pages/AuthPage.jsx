import React, { useState } from 'react';
import { LoginForm } from '../components/Auth/LoginForm';
import { RegisterForm } from '../components/Auth/RegisterForm';

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="">
      {showLogin ? (
        <LoginForm onSwitchToRegister={() => setShowLogin(false)} />
      ) : (
        <RegisterForm onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}