import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // تحميل المستخدم عند فتح الموقع
  useEffect(() => {
    const savedUser = storage.getUser();
    if (savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  // تسجيل مستخدم جديد
  const register = (userData) => {
    const allUsers = storage.getAllUsers();
    
    // تحقق من وجود البريد الإلكتروني
    if (allUsers.find(u => u.email === userData.email)) {
      return { success: false, message: 'البريد الإلكتروني مسجل مسبقاً!' };
    }

    const newUser = {
      id: Date.now(),
      ...userData,
      level: null, // سيتم تحديده بعد الاختبار
      createdAt: new Date().toISOString()
    };

    allUsers.push(newUser);
    storage.saveAllUsers(allUsers);
    storage.saveUser(newUser);
    setUser(newUser);

    return { success: true, message: 'تم التسجيل بنجاح!' };
  };

  // تسجيل الدخول
  const login = (email, password) => {
    const allUsers = storage.getAllUsers();
    const foundUser = allUsers.find(
      u => u.email === email && u.password === password
    );

    if (!foundUser) {
      return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة!' };
    }

    storage.saveUser(foundUser);
    setUser(foundUser);
    return { success: true, message: 'تم تسجيل الدخول بنجاح!' };
  };

  // تسجيل الخروج
  const logout = () => {
    storage.removeUser();
    setUser(null);
  };

  // تحديث بيانات المستخدم
  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    const allUsers = storage.getAllUsers();
    const userIndex = allUsers.findIndex(u => u.id === user.id);
    
    if (userIndex !== -1) {
      allUsers[userIndex] = updatedUser;
      storage.saveAllUsers(allUsers);
    }
    
    storage.saveUser(updatedUser);
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      updateUser, 
      loading,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook لاستخدام Auth Context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}