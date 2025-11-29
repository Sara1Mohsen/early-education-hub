import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Scene3D } from './Scene3D';

export function HeroSection({ canvasRef }) {
  const stats = [
    { value: '1000+', label: 'مستخدم نشط' },
    { value: '50+', label: 'مشهد ثلاثي الأبعاد' },
    { value: '24/7', label: 'دعم الذكاء الاصطناعي' },
  ];

  return (
    <div id="home" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, #000, #1a0b2e)'
        }}
      />
      <Scene3D canvasRef={canvasRef} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'rtl'
      }}>
        <div style={{ textAlign: 'center', padding: '2rem', maxWidth: '900px' }}>
          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '1.5rem'
          }}>
            مرحباً بك في
            <br />
            <span style={{
              background: 'linear-gradient(to right, #c084fc, #f472b6, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              المستقبل الرقمي
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            color: '#d1d5db',
            marginBottom: '2rem'
          }}>
            اختبر ذكاءك الرقمي في عالم الابتكار والتقنيات الحديثة
          </p>

          {/* Button */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="QuizPage" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'linear-gradient(to right, #a855f7, #ec4899)',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)'
              }}>
                ابدأ الاختبار
                <ArrowLeft size={20} />
              </button>
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginTop: '4rem',
            maxWidth: '600px',
            margin: '4rem auto 0'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}