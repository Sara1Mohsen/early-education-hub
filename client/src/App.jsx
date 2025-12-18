import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage3D from './pages/HomePage3D'; 
import ProgramesCards from './pages/ProgramesCards';
import { Navbar } from './components/Navbar';
import QuizPage from './pages/QuizPage';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

// الصفحات التي لا تريدها فيها الـ Navbar
const NO_NAVBAR_PATHS = [
  '/login',
  '/quiz/assessment',
  '/quiz/:type/:level', // هذا المسار دقيق
  '/QuizPage'
];

// مكوّن يحتوي على الـ Navbar ويستخدم useLocation()
function AppWithNavbar() {
  const location = window.location.pathname; // ✅ بديل آمن!

  const shouldShowNavbar = !NO_NAVBAR_PATHS.includes(location);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<HomePage3D />} />
        
        <Route 
          path="/programs"
          element={
            <ProtectedRoute requireQuiz={true}>
              <ProgramesCards />
            </ProtectedRoute>
          }
        />

        <Route path="/quiz/assessment" element={<QuizPage />} />
        <Route path="/quiz/:type/:level" element={<QuizPage />} />
        <Route path="/QuizPage" element={<QuizPage />} />

        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter >
        <div className="min-h-screen">
          <AppWithNavbar />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;