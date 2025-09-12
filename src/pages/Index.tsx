import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
const TrainersSection = lazy(() => import('@/components/TrainersSection'));
const SpecialtiesSection = lazy(() => import('@/components/SpecialtiesSection'));
const GallerySection = lazy(() => import('@/components/GallerySection'));
const RegisterSection = lazy(() => import('@/components/RegisterSection'));
const Footer = lazy(() => import('@/components/Footer'));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Ribbons background animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
      </div>
      
      {/* ClickSpark wrapper for the whole page */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <Suspense fallback={<div className="h-12" />}> 
            <TrainersSection />
          </Suspense>
          <Suspense fallback={<div className="h-12" />}> 
            <SpecialtiesSection />
          </Suspense>
          <Suspense fallback={<div className="h-12" />}> 
            <GallerySection />
          </Suspense>
          <Suspense fallback={<div className="h-12" />}> 
            <RegisterSection />
          </Suspense>
          <Suspense fallback={null}> 
            <Footer />
          </Suspense>
        </div>
    </div>
  );
}