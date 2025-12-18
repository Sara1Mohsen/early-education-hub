import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import ProgramContent from '../components/ProgramContent';
import { programs } from '../data/programsData';

export default function ProgramesCards() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const location = useLocation();

  // اجلب المستوى من localStorage أو من الـ state اللي جاي من الـ navigation
  const userLevel = location.state?.level || localStorage.getItem('userLevel');

  // Function لفلترة البرامج حسب المستوى
  const getFilteredPrograms = () => {
    if (!userLevel) {
      return programs; // لو مافيش مستوى محدد، اعرض كل البرامج
    }

    return programs.filter(program => program.level === userLevel);
  };

  const filteredPrograms = getFilteredPrograms();

  // إذا تم اختيار برنامج، عرض ProgramContent
  if (selectedProgram) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000, #1a0b2e)',
        position: 'relative'
      }}>
        <ProgramContent 
          program={selectedProgram} 
          onBack={() => setSelectedProgram(null)} 
        />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #000, #1a0b2e)',
      direction: 'rtl',
      padding: '2rem',
      position: 'relative'
    }}>
      {/* Header with Level Info */}
      {userLevel && (
        <div style={{
          background: 'linear-gradient(to right, #1a0b2e, #0f0719)',
          borderRadius: '24px',
          padding: '2rem 2rem',
          textAlign: 'center',
          marginBottom: '2rem',
          marginTop: '3rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '0.5rem'
          }}>
            برامج المستوى ال{userLevel}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#a855f7',
            opacity: 0.9
          }}>
            {filteredPrograms.length} برنامج مخصص لمستواك
          </p>
        </div>
      )}

      {/* Programs Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 2fr))',
        gap: '1.5rem',
        padding: '0 1rem'
      }}>
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={setSelectedProgram}
            />
          ))
        ) : (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '4rem 2rem',
            color: '#d1d5db',
            fontSize: '1.2rem'
          }}>
            <p>لا توجد برامج متاحة لهذا المستوى حالياً</p>
          </div>
        )}
      </div>

      {/* Quiz Button at Bottom */}
      {userLevel && (
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setShowQuiz(true)}
            style={{
              background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 0 30px rgba(79, 70, 229, 0.5)',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {/* <span style={{ fontSize: '1.5rem' }}> </span> */}
            <span>ابدأ اختبار البرنامج</span>
          </button>
        </div>
      )}

      {/* Quiz Modal */}
      {showQuiz && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
          padding: '2rem'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{
              background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
              padding: '1.5rem',
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}>
              <button
                onClick={() => setShowQuiz(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#fff'
                }}
              >
                <X size={20} />
              </button>

              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
                marginBottom: '0.5rem'
              }}>
                اختبار نهاية البرنامج
              </h2>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                color: '#e0e7ff',
                fontSize: '0.9rem'
              }}>
                <span>السؤال 1 من 5</span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px'
                }}>
                  <Clock size={16} />
                  <span style={{ fontWeight: 'bold' }}>30s</span>
                </div>
              </div>
            </div>

            <div style={{
              width: '100%',
              height: '4px',
              background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
              borderRadius: '2px'
            }} />

            <div style={{ padding: '2rem' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                ما هو الهدف الرئيسي من استخدام خوارزمية BFS؟
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['إيجاد أقصر طريق بين نقطتين', 'فرز العناصر', 'إيجاد الشجرة الثنائية الممتدة الأقل', 'تحليل البيانات'].map((option, idx) => (
                  <button
                    key={idx}
                    style={{
                      padding: '1rem 1.5rem',
                      borderRadius: '12px',
                      border: '2px solid #d1d5db',
                      background: '#f9fafb',
                      color: '#1f2937',
                      fontSize: '1rem',
                      fontWeight: '600',
                      textAlign: 'right',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{option}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => alert('تم إرسال الإجابة!')}
                style={{
                  marginTop: '2rem',
                  background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
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
                  boxShadow: '0 0 30px rgba(79, 70, 229, 0.5)'
                }}
              >
                <span>تأكيد الإجابة</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}