import React, { useRef, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { QuizSection } from '../components/QuizSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { Footer } from '../components/Footer';
export default function HomePage3D() { 
const canvasRef = useRef(null);
// const [isMenuOpen, setIsMenuOpen] = useState(false); 

return (
  <>
    <Navbar />

  <HeroSection canvasRef={canvasRef} />
  <QuizSection />
  <FeaturesSection />
  <Footer />
  
    </>
  );
  }