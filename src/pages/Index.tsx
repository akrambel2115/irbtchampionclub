import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrainersSection from '@/components/TrainersSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import GallerySection from '@/components/GallerySection';
import RegisterSection from '@/components/RegisterSection';
import Footer from '@/components/Footer';

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
          <TrainersSection />
          <SpecialtiesSection />
          <GallerySection />
          <RegisterSection />
          <Footer />
        </div>
    </div>
  );
}