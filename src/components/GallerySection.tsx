import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { t } from "i18next";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: "/images/pic1.jpg" },
    { id: 2, src: "/images/pic2.jpg" },
    { id: 3, src: "/images/pic3.jpg" },
    { id: 4, src: "/images/pic6.jpg" },
    { id: 5, src: "/images/pic7.jpg" },
    { id: 6, src: "/images/pic8.jpg" },
    { id: 7, src: "/images/pic9.jpg" },
    { id: 8, src: "/images/pic10.jpg" },
  ];

  // Advanced Orbital Gallery Component (memoized and throttled)
  const OrbitalGallery = React.useMemo(() => {
    return function OrbitalGallery({ images, radius = 320, itemWidth = 280, itemHeight = 200 }) {
      const [time, setTime] = useState(0);
      const animationRef = useRef(null);
      const startTimeRef = useRef(Date.now());
      const lastUpdateRef = useRef(0);
      const totalImages = images.length;

      // Throttle animation frame updates to 30fps
      useEffect(() => {
        const animate = () => {
          const now = Date.now();
          if (now - lastUpdateRef.current > 33) { // ~30fps
            const elapsed = (now - startTimeRef.current) / 1000;
            setTime(elapsed);
            lastUpdateRef.current = now;
          }
          animationRef.current = requestAnimationFrame(animate);
        };
        animationRef.current = requestAnimationFrame(animate);
        return () => {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        };
      }, [totalImages]);

      return (
        <div className="relative w-full h-[800px] overflow-hidden">
          {/* Dynamic Background Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full opacity-30"
                style={{
                  left: `${20 + ((i * 3) % 60)}%`,
                  top: `${30 + ((i * 7) % 40)}%`,
                  animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Main Gallery Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Central Focus Ring */}
            <div className="absolute w-96 h-96 border border-red-500/20 rounded-full animate-pulse"></div>
            <div
              className="absolute w-80 h-80 border border-red-400/10 rounded-full animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>

            {/* Gallery Images */}
            {images.map((image, index) => {
              const angle = (index / totalImages) * Math.PI * 2;
              const orbitRadius = radius + Math.sin(time * 0.5 + index) * 30; // Dynamic radius

              // Orbital position with floating effect
              const x = Math.cos(angle + time * 0.1) * orbitRadius;
              const y =
                Math.sin(angle + time * 0.1) * orbitRadius +
                Math.sin(time * 2 + index * 0.5) * 15;

              // Distance from center for scaling and effects
              const distanceFromCenter = Math.sqrt(x * x + y * y);
              const maxDistance = radius + 50;
              const normalizedDistance = Math.min(
                distanceFromCenter / maxDistance,
                1
              );

              // Dynamic scaling and effects - removed focus-based variations
              const baseScale = 0.7 + (1 - normalizedDistance) * 0.3;
              const scale = baseScale;
              const opacity = 0.9; // Fixed high opacity for all images
              const blur = 0; // No blur for any images

              // Rotation for tilt effect (not text rotation)
              const tiltRotation = Math.sin(time * 0.3 + index) * 5;

              return (
                <div
                  key={image.id}
                  className="absolute group transition-all duration-1000 ease-out"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale}) rotate(${tiltRotation}deg)`,
                    left: "50%",
                    top: "50%",
                    width: `${itemWidth}px`,
                    height: `${itemHeight + 80}px`,
                    opacity: opacity,
                    filter: `blur(${blur}px)`,
                    zIndex: Math.round((1 - normalizedDistance) * 50),
                  }}
                >
                  {/* Advanced Image Card */}
                  <div
                    className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-700 cursor-pointer shadow-xl shadow-black/50 hover:shadow-red-500/30"
                    onClick={() => setSelectedImage(index)}
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(55, 65, 81, 0.9), rgba(17, 24, 39, 0.9))",
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-52 overflow-hidden">
                      <img
                        src={image.src}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        style={{ willChange: 'transform, opacity' }}
                      />

                      {/* Dynamic Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Content Area - Always Upright */}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto backdrop-blur-md border border-white/30">
                          <svg
                            className="w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm font-bold tracking-wide">
                          {t("gallery.view")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom CSS Animations */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              33% { transform: translateY(-10px) rotate(120deg); }
              66% { transform: translateY(5px) rotate(240deg); }
            }
            @keyframes sparkle {
              0%, 100% { opacity: 0; transform: scale(0); }
              50% { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      );
    };
  }, []);

  return (
    <section id="gallery" className="py-8 bg-gray-900 relative overflow-hidden">
      {" "}
      {/* Background Elements */}
      <div className="absolute inset-0 boxing-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-white mb-4 font-bold">
            {t("gallery.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t("gallery.description")}
          </p>
        </div>

        {/* Advanced Orbital Gallery */}
        <div className="mb-12">
          {React.createElement(OrbitalGallery, { images: galleryImages })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={galleryImages[selectedImage].src}
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="lazy"
                decoding="async"
                style={{ willChange: 'transform, opacity' }}
              />

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              {selectedImage > 0 && (
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage - 1);
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              )}

              {selectedImage < galleryImages.length - 1 && (
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage + 1);
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
