import React from 'react';
import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{
      padding: '2rem 1.5rem',
      background: '#000',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      direction: 'rtl'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Sparkles size={24} color="#a855f7" />
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff' }}>البوابة ثلاثية الأبعاد</span>
        </div>
        <p style={{ color: '#9ca3af' }}>
          © 2024 جميع الحقوق محفوظة | تم التطوير بواسطة شروق محمد
        </p>
      </div>
    </footer>
  );
}