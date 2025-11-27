import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';
export function Navbar() {

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', direction: 'rtl' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img 
              src={logo} 
              alt="شعار البوابة" 
              style={{ height: '40px', borderRadius: '5px' }}
            />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>EduVerse ال جرافيك للجميع</span>

          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="/" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>الرئيسية</a>
            <a href="#quiz" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>الاختبار</a>
            <a href="#features" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>المميزات</a>
            <a href="programs" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }}>برامج الذكاء الاصطناعي</a>
            <button style={{
              background: 'linear-gradient(to right, #a855f7, #ec4899)',
              color: '#fff',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              ابدأ الآن
            </button>
          </div>
          

        </div>
      </div>
    </nav>
  );
}