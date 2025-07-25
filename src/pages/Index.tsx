import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrainersSection from '@/components/TrainersSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import GallerySection from '@/components/GallerySection';
import RegisterSection from '@/components/RegisterSection';
import Footer from '@/components/Footer';
import ClickSpark from '@/blocks/Animations/ClickSpark/ClickSpark';
import Ribbons from '@/blocks/Animations/Ribbons/Ribbons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Ribbons background animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Ribbons
          colors={['#ff9346', '#7cff67', '#ffee51', '#5227FF', '#ff1744']}
          backgroundColor={[0, 0, 0, 0.1]}
          baseThickness={20}
          maxAge={300}
          speedMultiplier={0.4}
        />
      </div>
      
      {/* ClickSpark wrapper for the whole page */}
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={12}
        sparkRadius={20}
        sparkCount={10}
        duration={500}
      >
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <TrainersSection />
          <SpecialtiesSection />
          <GallerySection />
          <RegisterSection />
          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
}