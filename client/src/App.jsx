import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage3D from './pages/HomePage3D'; 
import ProgramesCards from './pages/ProgramesCards';
import { Navbar } from './components/Navbar'
import QuizPage from './pages/QuizPage';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />

          <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/" element={<HomePage3D />} />
            <Route path="/programs" element={<ProgramesCards />} />
            <Route path="/QuizPage" element={<QuizPage />} />
          </Routes>

        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
