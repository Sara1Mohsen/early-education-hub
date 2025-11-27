import React, { useRef } from 'react';
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/HeroSection';
import { QuizSection } from '../components/QuizSection';
import { FeaturesSection } from '../components/FeaturesSection';

export default function HomePage3D() { 
  const canvasRef = useRef(null);

  return (
    <Layout>
      <HeroSection canvasRef={canvasRef} />
      <QuizSection />
      <FeaturesSection />
    </Layout>
  );
}