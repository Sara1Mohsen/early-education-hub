import React from 'react';
import { Rocket, Brain, Sparkles } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <Rocket size={32} color="#fff" />,
      title: 'عوالم ثلاثية الأبعاد تفاعلية',
      description: 'استكشف بيئات غامرة مصممة للتعلم الأمثل',
      background: 'linear-gradient(to right, #a855f7, #ec4899)'
    },
    {
      icon: <Brain size={32} color="#fff" />,
      title: 'تعلم بالذكاء الاصطناعي',
      description: 'احصل على مساعدة شخصية من روبوت المحادثة الذكي',
      background: 'linear-gradient(to right, #22d3ee, #3b82f6)'
    },
    {
      icon: <Sparkles size={32} color="#fff" />,
      title: 'مستويات تكيفية',
      description: 'يتكيف المحتوى بناءً على نتائج تقييم مهاراتك',
      background: 'linear-gradient(to right, #ec4899, #f97316)'
    },
  ];

  return (
    <div id="features" style={{
      padding: '5rem 1.5rem',
      background: 'linear-gradient(to bottom, #000, #3b0764)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', direction: 'rtl' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          مميزات رائعة
        </h2>
        <p style={{
          color: '#9ca3af',
          textAlign: 'center',
          marginBottom: '4rem',
          fontSize: '1.125rem'
        }}>
          كل ما تحتاجه لتجربة تعليمية استثنائية
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s'
            }}>
              <div style={{
                background: feature.background,
                padding: '1rem',
                borderRadius: '0.75rem',
                width: 'fit-content',
                marginBottom: '1.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}