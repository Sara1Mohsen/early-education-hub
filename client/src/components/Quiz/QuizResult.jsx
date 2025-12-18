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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #000, #1a0b2e)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      direction: 'rtl',
      padding: '2rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        textAlign: 'right'
      }}>
        {/* Success Animation */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            fontSize: '6rem',
            marginBottom: '1rem',
            animation: 'bounce 1.5s infinite'
          }}>
            {levelInfo.icon}
          </div>

          <p style={{
            fontSize: '1.2rem',
            color: '#d1d5db',
            opacity: 0.9
          }}>
            لقد أكملت اختبار تحديد المستوى
          </p>
        </div>

        {/* Score Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          overflow: 'hidden',
          padding: '2rem',
          textAlign: 'center'
        }}>
          {/* Score Display */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              color: '#fbbf24',
              marginBottom: '0.5rem'
            }}>
              <span style={{ color: '#fbbf24' }}>{score}</span>
              <span style={{ color: '#d1d5db' }}> / {totalQuestions}</span>
            </div>
            <p style={{
              fontSize: '1.2rem',
              color: '#a855f7'
            }}>
              نسبة النجاح: {percentage}%
            </p>
          </div>

          {/* Level Badge */}
          <div style={{
            background: 'linear-gradient(to right, #10b981, #059669)',
            borderRadius: '20px',
            padding: '2rem',
            margin: '1rem auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#fff'
          }}>
            <Award style={{ width: '64px', height: '64px', marginBottom: '1rem' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              المستوى: {levelInfo.level}
            </h2>
            <p style={{
              fontSize: '1rem',
              opacity: 0.9,
              lineHeight: '1.5'
            }}>
              {levelInfo.message}
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <div style={{
              background: 'rgba(16, 185, 129, 0.2)',
              borderRadius: '16px',
              padding: '1rem',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <CheckCircle style={{ width: '32px', height: '32px', color: '#10b981', marginBottom: '0.5rem' }} />
              <div style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#10b981'
              }}>
                {score}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#a855f7'
              }}>
                إجابات صحيحة
              </div>
            </div>
            
            <div style={{
              background: 'rgba(37, 99, 235, 0.2)',
              borderRadius: '16px',
              padding: '1rem',
              border: '1px solid rgba(37, 99, 235, 0.3)'
            }}>
              <TrendingUp style={{ width: '32px', height: '32px', color: '#2563eb', marginBottom: '0.5rem' }} />
              <div style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#2563eb'
              }}>
                {percentage}%
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#a855f7'
              }}>
                نسبة الإتقان
              </div>
            </div>
          </div>

          {/* Recommended Program */}
          <div style={{
            background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
            borderRadius: '16px',
            padding: '1rem',
            margin: '1.5rem auto',
            textAlign: 'center',
            color: '#fff'
          }}>
            <p style={{
              fontSize: '0.9rem',
              opacity: 0.9,
              marginBottom: '0.25rem'
            }}>
              البرنامج المناسب لمستواك
            </p>
            <p style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#fff'
            }}>
              {levelInfo.programName}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button
            onClick={handleNavigateToProgram}
            style={{
              background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <span>ابدأ {levelInfo.programName}</span>
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </button>

          <button
            onClick={() => navigate('/programs')}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            استكشف جميع البرامج
          </button>

          <button
            onClick={onRestart}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#d1d5db',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            }}
          >
            إعادة الاختبار
          </button>
        </div>
      </div>
    </div>
  );
}