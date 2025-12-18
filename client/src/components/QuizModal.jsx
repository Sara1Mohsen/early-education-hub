// // Quiz Modal Component
// function QuizModal({ level, onClose }) {
//   const questions = getQuizByLevel(level);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [showResult, setShowResult] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(questions[0]?.timeLimit || 30);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // تقليل الوقت
//   useEffect(() => {
//     if (!showResult && !showFeedback && timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0 && !showFeedback) {
//       handleSubmit();
//     }
//   }, [timeLeft, showFeedback, showResult]);

//   const handleSubmit = async () => {
//     if (isSubmitting) return;
//     setIsSubmitting(true);
//     setShowFeedback(true);

//     const isCorrect = selectedOption?.isCorrect || false;
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     await new Promise(resolve => setTimeout(resolve, 1500));

//     const nextIndex = currentIndex + 1;
//     if (nextIndex < questions.length) {
//       setCurrentIndex(nextIndex);
//       setSelectedOption(null);
//       setShowFeedback(false);
//       setIsSubmitting(false);
//       setTimeLeft(questions[nextIndex].timeLimit || 30);
//     } else {
//       setShowResult(true);
//       setIsSubmitting(false);
//     }
//   };

//   // إذا كانت النتيجة نهائية
//   if (showResult) {
//     const percentage = (score / questions.length) * 100;
//     const passed = percentage >= 70;

//     return (
//       <div style={{
//         position: 'fixed',
//         inset: 0,
//         background: 'rgba(0, 0, 0, 0.7)',
//         backdropFilter: 'blur(8px)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 50,
//         padding: '2rem'
//       }}>
//         <div style={{
//           background: '#fff',
//           borderRadius: '24px',
//           boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
//           maxWidth: '400px',
//           width: '100%',
//           textAlign: 'center',
//           padding: '4rem 2rem'
//         }}>
//           <div style={{ marginBottom: '2rem' }}>
//             {passed ? (
//               <Award style={{ width: '96px', height: '96px', margin: '0 auto', color: '#fbbf24' }} />
//             ) : (
//               <div style={{
//                 width: '96px',
//                 height: '96px',
//                 margin: '0 auto',
//                 background: '#e5e7eb',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}>
//                 <span style={{ fontSize: '48px' }}>📚</span>
//               </div>
//             )}
//           </div>

//           <h2 style={{
//             fontSize: '2rem',
//             fontWeight: 'bold',
//             color: '#1f2937',
//             marginBottom: '1rem'
//           }}>
//             {passed ? '🎉 مبروك! نجحت' : '💪 حاول مرة أخرى'}
//           </h2>

//           <div style={{ marginBottom: '2rem' }}>
//             <div style={{
//               fontSize: '3rem',
//               fontWeight: 'bold',
//               color: '#2563eb',
//               marginBottom: '0.5rem'
//             }}>
//               {score}/{questions.length}
//             </div>
//             <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
//               نسبة النجاح: {percentage.toFixed(0)}%
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             style={{
//               background: 'linear-gradient(to right, #a855f7, #ec4899)',
//               color: '#fff',
//               padding: '1rem 2rem',
//               borderRadius: '50px',
//               border: 'none',
//               fontSize: '1.125rem',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               gap: '0.5rem',
//               boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)'
//             }}
//           >
//             إغلاق
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentIndex];

//   return (
//     <div style={{
//       position: 'fixed',
//       inset: 0,
//       background: 'rgba(0, 0, 0, 0.7)',
//       backdropFilter: 'blur(8px)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 50,
//       padding: '2rem'
//     }}>
//       <div style={{
//         background: '#fff',
//         borderRadius: '24px',
//         boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
//         maxWidth: '600px',
//         width: '100%',
//         maxHeight: '90vh',
//         overflowY: 'auto'
//       }}>
//         <div style={{
//           background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
//           padding: '1.5rem',
//           borderTopLeftRadius: '24px',
//           borderTopRightRadius: '24px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           position: 'relative'
//         }}>
//           <button
//             onClick={onClose}
//             style={{
//               position: 'absolute',
//               top: '1rem',
//               left: '1rem',
//               background: 'rgba(255, 255, 255, 0.2)',
//               borderRadius: '50%',
//               width: '40px',
//               height: '40px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               border: 'none',
//               cursor: 'pointer',
//               color: '#fff'
//             }}
//           >
//             <X size={20} />
//           </button>

//           <h2 style={{
//             fontSize: '1.5rem',
//             fontWeight: 'bold',
//             color: '#fff',
//             textAlign: 'center',
//             marginBottom: '0.5rem'
//           }}>
//             اختبار نهاية البرنامج - {level}
//           </h2>

//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             width: '100%',
//             color: '#e0e7ff',
//             fontSize: '0.9rem'
//           }}>
//             <span>السؤال {currentIndex + 1} من {questions.length}</span>
//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '0.5rem',
//               background: 'rgba(255, 255, 255, 0.2)',
//               padding: '0.3rem 0.8rem',
//               borderRadius: '12px'
//             }}>
//               <Clock size={16} />
//               <span style={{ fontWeight: 'bold' }}>{timeLeft}s</span>
//             </div>
//           </div>
//         </div>

//         <div style={{
//           width: '100%',
//           height: '4px',
//           background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
//           borderRadius: '2px'
//         }} />

//         <div style={{ padding: '2rem' }}>
//           <h3 style={{
//             fontSize: '1.5rem',
//             fontWeight: 'bold',
//             color: '#1f2937',
//             marginBottom: '1.5rem',
//             textAlign: 'center'
//           }}>
//             {currentQuestion.question}
//           </h3>

//           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//             {currentQuestion.options.map((option, idx) => {
//               const isSelected = selectedOption === option;
//               const showCorrect = showFeedback && option.isCorrect;
//               const showWrong = showFeedback && isSelected && !option.isCorrect;

//               return (
//                 <button
//                   key={idx}
//                   onClick={() => !selectedOption && setSelectedOption(option)}
//                   disabled={selectedOption !== null}
//                   style={{
//                     padding: '1rem 1.5rem',
//                     borderRadius: '12px',
//                     border: '2px solid #d1d5db',
//                     background: showCorrect
//                       ? '#dcfce7'
//                       : showWrong
//                       ? '#fee2e2'
//                       : isSelected
//                       ? '#dbeafe'
//                       : '#f9fafb',
//                     color: showCorrect
//                       ? '#16a34a'
//                       : showWrong
//                       ? '#b91c1c'
//                       : isSelected
//                       ? '#2563eb'
//                       : '#1f2937',
//                     fontSize: '1rem',
//                     fontWeight: '600',
//                     textAlign: 'right',
//                     transition: 'all 0.2s ease',
//                     cursor: selectedOption ? 'not-allowed' : 'pointer'
//                   }}
//                 >
//                   <span>{option.text}</span>
//                   {showCorrect && (
//                     <CheckCircle size={18} style={{ marginLeft: '0.5rem' }} />
//                   )}
//                   {showWrong && (
//                     <XCircle size={18} style={{ marginLeft: '0.5rem' }} />
//                   )}
//                 </button>
//               );
//             })}
//           </div>

//           {selectedOption && !showFeedback && (
//             <button
//               onClick={handleSubmit}
//               style={{
//                 marginTop: '2rem',
//                 background: 'linear-gradient(to right, #4f46e5, #7e22ce)',
//                 color: '#fff',
//                 padding: '1rem 2rem',
//                 borderRadius: '50px',
//                 border: 'none',
//                 fontSize: '1.125rem',
//                 fontWeight: 'bold',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: '0.5rem',
//                 boxShadow: '0 0 30px rgba(79, 70, 229, 0.5)'
//               }}
//             >
//               <span>تأكيد الإجابة</span>
//               <ArrowRight size={20} />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
