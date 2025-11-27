// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage3D from './pages/HomePage3D'; 
import ProgramesCards from './pages/ProgramesCards';
import { Navbar } from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage3D />} />
          <Route path="/programs" element={<ProgramesCards />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


