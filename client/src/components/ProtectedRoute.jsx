import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Loader2, Lock, ShieldAlert } from 'lucide-react';

export function ProtectedRoute({ children, requireQuiz = false }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      setShowRedirectMessage(true);
      const timer = setTimeout(() => setShowRedirectMessage(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [loading, user]);

  // Loading State
  if (loading) {
    return (
      <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-4 border-slate-600/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-slate-400 border-r-slate-500 border-b-slate-600 border-l-transparent rounded-full animate-spin"></div>
            <div
              className="absolute inset-3 border-4 border-t-transparent border-r-transparent border-b-slate-500 border-l-slate-400 rounded-full animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '1s' }}
            ></div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 text-slate-300 animate-spin" />
              <p className="text-white text-2xl font-bold">جاري التحميل</p>
            </div>

            <div className="flex items-center justify-center gap-1">
              <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>

            <p className="text-slate-400 text-sm">يرجى الانتظار قليلاً...</p>
          </div>
        </div>
      </div>
    );
  }

  // Not Authenticated - Redirect Message
  if (!user) {
    return (
      <>
        {showRedirectMessage && (
          <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 max-w-md mx-4 text-center space-y-4 animate-scale-in border border-slate-700">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto">
                <ShieldAlert className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">تحتاج إلى تسجيل الدخول</h2>
              <p className="text-slate-300">جاري تحويلك إلى صفحة تسجيل الدخول...</p>
              <div className="flex items-center justify-center gap-1 pt-2">
                <span className="w-2 h-2 bg-slate-200 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
        <Navigate to="/login" state={{ from: location }} replace />
      </>
    );
  }

  // Quiz Required Check
  if (requireQuiz) {
    const quizCompleted = localStorage.getItem('quizCompleted');
    const userLevel = localStorage.getItem('userLevel');

    if (quizCompleted !== 'true' && !userLevel) {
      return (
        <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 max-w-md mx-4 text-center space-y-6 border border-slate-700">
            <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-10 h-10 text-amber-400" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-white">اختبار تحديد المستوى مطلوب</h2>
              <p className="text-slate-300 leading-relaxed">
                يجب عليك إكمال اختبار تحديد المستوى أولاً للوصول إلى هذا المحتوى
              </p>
            </div>
            <button
              onClick={() => (window.location.href = '/QuizPage')}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold py-3 px-6 rounded-full hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-100"
            >
              ابدأ الاختبار الآن
            </button>
          </div>
        </div>
      );
    }
  }

  return children;
}