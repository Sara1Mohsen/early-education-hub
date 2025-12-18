import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';

export function QuizStart({ onStart }) {
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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#fff',
            marginTop: '1rem'
          }}>
            اختبار تحديد المستوى
          </h1>
        </div>

        {/* Description Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          overflow: 'hidden',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
            <BookOpen style={{ width: '24px', height: '24px', color: '#10b981', flexShrink: 0, marginTop: '0.25rem' }} />
            <div>
              <p style={{
                fontSize: '1rem',
                color: '#d1d5db',
                lineHeight: '1.6',
                textAlign: 'justify'
              }}>
                يتكون الاختبار من 10 أسئلة تغطي أساسيات التصميم ثلاثي الأبعاد، 
                الواقع الافتراضي، والواقع المعزز. سيساعدك هذا الاختبار في تحديد 
                مستواك الحالي (مبتدئ أو متوسط).
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
            <Clock style={{ width: '24px', height: '24px', color: '#fbbf24', flexShrink: 0, marginTop: '0.25rem' }} />
            <div>
              <p style={{
                fontSize: '1rem',
                color: '#d1d5db',
                lineHeight: '1.6'
              }}>
                كل سؤال له وقت محدد (15-25 ثانية). تأكد من الإجابة قبل انتهاء الوقت!
              </p>
            </div>
          </div>

          <div style={{
            background: 'rgba(251, 191, 36, 0.2)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            borderRadius: '12px',
            padding: '1rem',
            color: '#fbbf24',
            fontSize: '0.9rem',
            textAlign: 'center',
            fontWeight: '600'
          }}>
            💡 <strong>نصيحة:</strong> اقرأ السؤال بعناية قبل اختيار الإجابة
          </div>
        </div>

        {/* Start Button */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={onStart}
            style={{
              background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
              color: '#1f2937',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <span>ابدأ الاختبار الآن</span>
            <span style={{ fontSize: '1.5rem' }}>←</span>
          </button>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#a855f7',
            opacity: 0.7
          }}>
            النتيجة سيتم حفظها تلقائيًا عند الانتهاء
          </p>
        </div>
      </div>
    </div>
  );
}