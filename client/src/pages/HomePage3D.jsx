import React, { useRef } from 'react';
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/HeroSection';
import { QuizSection } from '../components/QuizSection';
import { FeaturesSection } from '../components/FeaturesSection';
import VideoScene from "../components/VideoScene";
export default function HomePage3D() { 
  const canvasRef = useRef(null);

  return (
    <Layout>
      <VideoScene />
      <HeroSection canvasRef={canvasRef} />
      <FeaturesSection />
      <QuizSection />
      
    </Layout>
  );
}