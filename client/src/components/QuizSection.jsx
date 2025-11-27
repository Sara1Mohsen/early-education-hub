import React from 'react';
import { GraduationCap } from 'lucide-react';

export function QuizSection() {
  const quizFeatures = [
    { emoji: '📊', title: 'أسئلة متنوعة', description: 'اختر من متعدد وصح وخطأ', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))', borderColor: 'rgba(139, 92, 246, 0.3)' },
    { emoji: '🎯', title: 'تقييم فوري', description: 'احصل على نتيجتك مباشرة', background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2))', borderColor: 'rgba(34, 211, 238, 0.3)' },
    { emoji: '🚀', title: 'تعلم تفاعلي', description: 'اكتشف مستواك الرقمي', background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(239, 68, 68, 0.2))', borderColor: 'rgba(249, 115, 22, 0.3)' },
  ];

  return (
    <div id="quiz" style={{
      padding: '5rem 1.5rem',
      background: 'linear-gradient(to bottom, #3b0764, #000)'
    }}>
      <div style={{ maxWidth: '2000px', margin: '0 auto', direction: 'rtl' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(to right, #a855f7, #ec4899)',
            padding: '1rem',
            borderRadius: '1rem',
            marginBottom: '1.5rem'
          }}>
            <GraduationCap size={48} color="#fff" />
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '1rem'
          }}>
            قياس ذكاءك الرقمي في عالم الابتكار
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginBottom: '1rem' }}>
            يهدف هذا الاختبار إلى قياس فهمك للمفاهيم الأساسية المتعلقة بالتقنيات الحديثة
          </p>
          <p style={{ color: '#6b7280', fontSize: '1rem' }}>
            التصميم ثلاثي الأبعاد (3D) • الواقع الافتراضي (VR) • الواقع المعزز (AR) • الذكاء الاصطناعي (AI)
          </p>
        </div>

        {/* Iframe for Quiz */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              title="قياس ذكاءك الرقمي في عالم الابتكار"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              src="https://view.genially.com/691f6c2937e4b54f696d5c9b"
              allowFullScreen={true}
            />
          </div>
        </div>

        {/* Quiz Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          {quizFeatures.map((feature, index) => (
            <div key={index} style={{
              background: feature.background,
              padding: '1.5rem',
              borderRadius: '1rem',
              border: `1px solid ${feature.borderColor}`
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.emoji}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>{feature.title}</h3>
              <p style={{ color: '#9ca3af' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}