import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

/**
 * مكون التخطيط (Layout) يحيط بالمحتوى العام (مثل الصفحات)
 * ويحتوي على العناصر المشتركة مثل شريط التنقل والتذييل.
 */
export function Layout({ children }) {
  return (
    <div style={{ background: '#000', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}