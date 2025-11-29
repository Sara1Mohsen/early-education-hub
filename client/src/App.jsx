import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage3D from './pages/HomePage3D'; 
import ProgramesCards from './pages/ProgramesCards';
import { Navbar } from './components/Navbar'
import QuizPage from './pages/QuizPage';
// import { Layout } from './components/Layout';
// import { QuizLayout } from './components/QuizLayout';
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar /> 
        <QuizPage />
        <Routes>
          <Route path="/" element={<HomePage3D />} />
          <Route path="/programs" element={<ProgramesCards />} />
        {/* <Route element={<QuizLayout><QuizPage /></QuizLayout>} path="/quiz" />                */}
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;


