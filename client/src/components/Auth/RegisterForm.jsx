import React, { useState } from 'react';
import { User, Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function RegisterForm({ onSwitchToLogin }) {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('من فضلك املأ جميع الحقول');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('كلمة المرور غير متطابقة');
      setLoading(false);
      return;
    }

    const result = register({
      name: formData.name,
      email: formData.email,
      password: formData.password
    });

    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => {
        navigate('/'); // الانتقال لصفحة الاختبار
      }, 1500);
    } else {
      setError(result.message);
    }
    
    setLoading(false);
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
      {/* Form Container */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '700px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        textAlign: 'right'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem'
          }}>
            <User style={{ width: '32px', height: '32px', color: '#fff' }} />
          </div>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '0.5rem'
          }}>
            إنشاء حساب جديد
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#e0e7ff',
            opacity: 0.9
          }}>
            انضم إلينا وابدأ رحلتك التعليمية
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#fee2e2',
            border: '1px solid #f87171',
            color: '#b91c1c',
            padding: '1rem',
            margin: '1rem',
            borderRadius: '12px',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <AlertCircle style={{ width: '16px', height: '16px' }} />
            <span>{error}</span>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div style={{
            background: '#dcfce7',
            border: '1px solid #16a34a',
            color: '#16a34a',
            padding: '1rem',
            margin: '1rem',
            borderRadius: '12px',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <CheckCircle style={{ width: '16px', height: '16px' }} />
            <span>{success}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              الاسم الكامل
            </label>
            <div style={{
              position: 'relative'
            }}>
              <User style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: '#9ca3af'
              }} />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  paddingLeft: '1rem',
                  paddingRight: '32px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  background: '#f9fafb',
                  fontSize: '0.95rem',
                  color: '#1f2937',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                placeholder="أدخل اسمك الكامل"
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              البريد الإلكتروني
            </label>
            <div style={{
              position: 'relative'
            }}>
              <Mail style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: '#9ca3af'
              }} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  paddingLeft: '1rem',
                  paddingRight: '32px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  background: '#f9fafb',
                  fontSize: '0.95rem',
                  color: '#1f2937',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              كلمة المرور
            </label>
            <div style={{
              position: 'relative'
            }}>
              <Lock style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: '#9ca3af'
              }} />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  paddingLeft: '1rem',
                  paddingRight: '32px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  background: '#f9fafb',
                  fontSize: '0.95rem',
                  color: '#1f2937',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                placeholder="••••••••"
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#fff',
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              تأكيد كلمة المرور
            </label>
            <div style={{
              position: 'relative'
            }}>
              <Lock style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: '#9ca3af'
              }} />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  paddingLeft: '1rem',
                  paddingRight: '32px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  background: '#f9fafb',
                  fontSize: '0.95rem',
                  color: '#1f2937',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {loading ? (
              <>
                <Loader style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }} />
                <span>جاري التسجيل...</span>
              </>
            ) : (
              'إنشاء حساب'
            )}
          </button>
        </form>

        {/* Footer */}
        <div style={{
          padding: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#d1d5db'
          }}>
            لديك حساب بالفعل؟{' '}
            <button
              onClick={onSwitchToLogin}
              style={{
                color: '#3b82f6',
                fontWeight: '600',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              تسجيل الدخول
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}