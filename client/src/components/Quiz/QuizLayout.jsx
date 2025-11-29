import '../index.css';

export default  function QuizLayout({ children }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}