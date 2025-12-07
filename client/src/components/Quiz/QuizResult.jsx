import React from 'react';
import { Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function QuizResult({ score, totalQuestions, onRestart }) {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getLevelInfo = () => {
    if (percentage >= 70) {
      return {
        level: 'متقدم',
        color: 'from-green-400 to-emerald-500',
        icon: '🏆',
        message: 'ممتاز! لديك معرفة قوية في التصميم ثلاثي الأبعاد',
        programPath: '/programs',
        programName: 'البرنامج المتقدم'
      };
    } else if (percentage >= 50) {
      return {
        level: 'متوسط',
        color: 'from-blue-400 to-cyan-500',
        icon: '⭐',
        message: 'جيد! لديك أساسيات جيدة ويمكنك التطور أكثر',
        programPath: '/programs',
        programName: 'البرنامج المتوسط'
      };
    } else {
      return {
        level: 'مبتدئ',
        color: 'from-yellow-400 to-orange-500',
        icon: '🌱',
        message: 'رائع! أنت في بداية رحلتك التعليمية',
        programPath: '/programs',
        programName: 'البرنامج التأسيسي'
      };
    }
  };

  const levelInfo = getLevelInfo();

  const handleNavigateToProgram = () => {
    // احفظ إن الاختبار اتعمل
    localStorage.setItem('quizCompleted', 'true');
    
    // احفظ المستوى كمان (مفيد لو عايز تستخدمه بعدين)
    localStorage.setItem('userLevel', levelInfo.level);
    localStorage.setItem('quizScore', percentage.toString());
    
    // روح على البرنامج المناسب
    navigate(levelInfo.programPath);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-8">
        {/* Success Animation */}
        <div className="text-center">
          <div className="text-8xl mb-4 animate-bounce">
            {levelInfo.icon}
          </div>

          <p className="text-xl text-gray-300">
            لقد أكملت اختبار تحديد المستوى
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6">
          {/* Score Display */}
          <div className="text-center">
            <div className="text-6xl font-extrabold mb-2">
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                {score}
              </span>
              <span className="text-3xl text-gray-400"> / {totalQuestions}</span>
            </div>
            <p className="text-gray-300 text-lg">
              نسبة النجاح: {percentage}%
            </p>
          </div>

          {/* Level Badge */}
          <div className={`bg-gradient-to-r ${levelInfo.color} rounded-2xl p-6 text-center`}>
            <Award className="w-16 h-16 mx-auto mb-3 text-white" />
            <h2 className="text-3xl font-bold text-white mb-2">
              المستوى: {levelInfo.level}
            </h2>
            <p className="text-white/90">
              {levelInfo.message}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-xl p-4 text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold">{score}</div>
              <div className="text-sm text-gray-300">إجابات صحيحة</div>
            </div>
            
            <div className="bg-blue-500/20 rounded-xl p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold">{percentage}%</div>
              <div className="text-sm text-gray-300">نسبة الإتقان</div>
            </div>
          </div>

          {/* Recommended Program */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-4 border border-indigo-400/30">
            <p className="text-center text-sm text-gray-300 mb-1">البرنامج المناسب لمستواك</p>
            <p className="text-center text-xl font-bold text-indigo-300">
              {levelInfo.programName}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <button
            onClick={handleNavigateToProgram}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg py-4 px-8 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <span>ابدأ {levelInfo.programName}</span>
            <ArrowRight className="w-6 h-6" />
          </button>

          <button
            onClick={() => navigate('/programs')}
            className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 border border-white/20"
          >
            استكشف جميع البرامج
          </button>

          <button
            onClick={onRestart}
            className="w-full bg-transparent hover:bg-white/5 text-gray-300 font-semibold py-3 px-8 rounded-full transition-all duration-300 border border-white/10"
          >
            إعادة الاختبار
          </button>
        </div>
      </div>
    </div>
  );
}