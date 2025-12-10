// import React from 'react';
// import { X, Brain, Sparkles, Globe } from 'lucide-react';

// // كومبوننت المقدمة
// const IntroModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <>
//       <div 
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           backdropFilter: 'blur(5px)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '1rem',
//           zIndex: 9999,
//           animation: 'fadeIn 0.3s ease-out'
//         }}
//         onClick={onClose}
//       >
//         <div 
//           style={{
//             backgroundColor: 'white',
//             borderRadius: '1rem',
//             maxWidth: '900px',
//             width: '100%',
//             maxHeight: '90vh',
//             overflow: 'hidden',
//             boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
//             animation: 'slideUp 0.4s ease-out'
//           }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Header */}
//           <div style={{
//             background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
//             padding: '2rem',
//             color: 'white',
//             position: 'relative'
//           }}>
//             <button
//               onClick={onClose}
//               style={{
//                 position: 'absolute',
//                 top: '1rem',
//                 left: '1rem',
//                 background: 'rgba(255, 255, 255, 0.2)',
//                 border: 'none',
//                 borderRadius: '50%',
//                 padding: '0.5rem',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 transition: 'background 0.3s'
//               }}
//               onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
//               onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
//             >
//               <X size={24} />
//             </button>
            
//             <div style={{ textAlign: 'center' }}>
//               <div style={{ 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 marginBottom: '1rem' 
//               }}>
//                 <div style={{
//                   background: 'rgba(255, 255, 255, 0.2)',
//                   padding: '1rem',
//                   borderRadius: '50%'
//                 }}>
//                   <Brain size={48} />
//                 </div>
//               </div>
//               <h2 style={{ 
//                 fontSize: '2rem', 
//                 fontWeight: 'bold', 
//                 marginBottom: '0.5rem' 
//               }}>
//                 مقدمة المشروع
//               </h2>
//               <p style={{ color: '#e0e7ff' }}>
//                 تصميم موقع تعليمي ذكي متطور
//               </p>
//             </div>
//           </div>

//           {/* Content */}
//           <div style={{
//             padding: '2rem',
//             overflowY: 'auto',
//             maxHeight: 'calc(90vh - 250px)',
//             direction: 'rtl'
//           }}>
//             {/* القسم الأول */}
//             <div style={{ marginBottom: '2rem' }}>
//               <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
//                 <div style={{
//                   background: '#e0e7ff',
//                   padding: '0.75rem',
//                   borderRadius: '0.5rem',
//                   flexShrink: 0
//                 }}>
//                   <Sparkles size={24} color="#4f46e5" />
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <h3 style={{ 
//                     fontSize: '1.5rem', 
//                     fontWeight: 'bold', 
//                     color: '#1f2937',
//                     marginBottom: '1rem'
//                   }}>
//                     نظرة عامة
//                   </h3>
//                   <p style={{ 
//                     color: '#4b5563', 
//                     lineHeight: '1.8',
//                     fontSize: '1.1rem'
//                   }}>
//                     تصميم موقع تعليمي ذكي لتعلم مهارات{' '}
//                     <span style={{ fontWeight: '600', color: '#4f46e5' }}>
//                       التصميم ثلاثي الأبعاد
//                     </span>{' '}
//                     وتقنيات{' '}
//                     <span style={{ fontWeight: '600', color: '#7c3aed' }}>
//                       الواقع الافتراضي والمعزز
//                     </span>{' '}
//                     باستخدام{' '}
//                     <span style={{ fontWeight: '600', color: '#4f46e5' }}>
//                       الذكاء الاصطناعي
//                     </span>{' '}
//                     هو تسليط الضوء على تقديم تجربة تعليمية تفاعلية ومتطورة تتناسب مع متطلبات العصر الرقمي.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* القسم الثاني */}
//             <div style={{
//               marginBottom: '2rem',
//               background: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)',
//               padding: '1.5rem',
//               borderRadius: '1rem'
//             }}>
//               <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
//                 <div style={{
//                   background: 'white',
//                   padding: '0.75rem',
//                   borderRadius: '0.5rem',
//                   boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//                   flexShrink: 0
//                 }}>
//                   <Brain size={24} color="#7c3aed" />
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <h3 style={{ 
//                     fontSize: '1.5rem', 
//                     fontWeight: 'bold', 
//                     color: '#1f2937',
//                     marginBottom: '1rem'
//                   }}>
//                     التقنيات المستخدمة
//                   </h3>
//                   <p style={{ 
//                     color: '#4b5563', 
//                     lineHeight: '1.8',
//                     fontSize: '1.1rem',
//                     marginBottom: '1rem'
//                   }}>
//                     يعتمد هذا المشروع على دمج تقنيات متقدمة مثل:
//                   </p>
                  
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//                     <div style={{
//                       background: 'white',
//                       padding: '1rem',
//                       borderRadius: '0.5rem',
//                       borderRight: '4px solid #4f46e5',
//                       boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
//                     }}>
//                       <h4 style={{ 
//                         fontWeight: 'bold', 
//                         color: '#4f46e5',
//                         marginBottom: '0.5rem'
//                       }}>
//                         🤖 الذكاء الاصطناعي
//                       </h4>
//                       <p style={{ color: '#6b7280' }}>
//                         يخصص المحتوى التعليمي حسب الأساسيات المتعلمة لكل طالب
//                       </p>
//                     </div>
                    
//                     <div style={{
//                       background: 'white',
//                       padding: '1rem',
//                       borderRadius: '0.5rem',
//                       borderRight: '4px solid #7c3aed',
//                       boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
//                     }}>
//                       <h4 style={{ 
//                         fontWeight: 'bold', 
//                         color: '#7c3aed',
//                         marginBottom: '0.5rem'
//                       }}>
//                         🥽 الواقع الافتراضي والمعزز
//                       </h4>
//                       <p style={{ color: '#6b7280' }}>
//                         يخلق بيئة إبداعية مغامرة نابضة بالتفاعل مع المحتوى بشكل عملي وواقعي ثلاثي الأبعاد
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* القسم الثالث */}
//             <div>
//               <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
//                 <div style={{
//                   background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
//                   padding: '0.75rem',
//                   borderRadius: '0.5rem',
//                   flexShrink: 0
//                 }}>
//                   <Globe size={24} color="white" />
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <h3 style={{ 
//                     fontSize: '1.5rem', 
//                     fontWeight: 'bold', 
//                     color: '#1f2937',
//                     marginBottom: '1rem'
//                   }}>
//                     أهمية المشروع
//                   </h3>
//                   <div style={{
//                     background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
//                     padding: '2px',
//                     borderRadius: '0.5rem'
//                   }}>
//                     <div style={{
//                       background: 'white',
//                       padding: '1.5rem',
//                       borderRadius: '0.5rem'
//                     }}>
//                       <p style={{ 
//                         color: '#4b5563', 
//                         fontSize: '1.1rem',
//                         fontWeight: '600',
//                         lineHeight: '1.8'
//                       }}>
//                         أهمية المشروع في العصر الرقمي تتجلى في عدة نقاط محورية تساهم في تطوير التعليم وتحسين جودة التعلم
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div style={{
//             background: '#f9fafb',
//             padding: '1rem 2rem',
//             borderTop: '1px solid #e5e7eb'
//           }}>
//             <button
//               onClick={onClose}
//               style={{
//                 width: '100%',
//                 background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
//                 color: 'white',
//                 padding: '0.75rem',
//                 borderRadius: '0.5rem',
//                 border: 'none',
//                 fontWeight: 'bold',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//                 transition: 'transform 0.2s, box-shadow 0.2s',
//                 boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 6px 8px rgba(0,0,0,0.15)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
//               }}
//             >
//               إغلاق
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slideUp {
//           from {
//             transform: translateY(50px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default IntroModal;