import React, { useRef } from 'react';
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import VideoScene from "../components/VideoScene";
import { ProtectedRoute } from '../components/ProtectedRoute';

export default function HomePage3D() { 
  const canvasRef = useRef(null);

  return (
    <Layout>
      <ProtectedRoute>
      <VideoScene />
      <HeroSection canvasRef={canvasRef} />
      <FeaturesSection />
      </ProtectedRoute>

    </Layout>
  );
}