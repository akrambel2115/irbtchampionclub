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

  // Advanced Orbital Gallery Component (optimized for performance)
  const OrbitalGallery = React.useMemo(() => {
    return function OrbitalGallery({ images, radius = 320, itemWidth = 280, itemHeight = 200 }) {
      const [time, setTime] = useState(0);
      const animationRef = useRef(null);
      const startTimeRef = useRef(Date.now());
      const lastUpdateRef = useRef(0);
      const totalImages = images.length;

      // Throttle animation frame updates to 20fps for better performance
      useEffect(() => {
        const animate = () => {
          const now = Date.now();
          if (now - lastUpdateRef.current > 50) { // ~20fps instead of 30fps
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
          {/* Reduced Background Particles - from 20 to 8 */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full opacity-25"
                style={{
                  left: `${25 + ((i * 4) % 50)}%`,
                  top: `${35 + ((i * 8) % 30)}%`,
                  animation: `float ${4 + (i % 2)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                  transform: 'translateZ(0)', // Hardware acceleration
                }}
              />
            ))}
          </div>

          {/* Main Gallery Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Simplified Focus Ring - removed animate-ping */}
            <div className="absolute w-80 h-80 border border-red-500/15 rounded-full animate-pulse" 
                 style={{ transform: 'translateZ(0)' }}></div>

            {/* Gallery Images */}
            {images.map((image, index) => {
              const angle = (index / totalImages) * Math.PI * 2;
              const orbitRadius = radius + Math.sin(time * 0.3 + index) * 20; // Reduced float amplitude

              // Orbital position with simplified floating effect
              const x = Math.cos(angle + time * 0.08) * orbitRadius; // Slower rotation
              const y =
                Math.sin(angle + time * 0.08) * orbitRadius +
                Math.sin(time * 1.5 + index * 0.4) * 10; // Reduced floating

              // Distance from center for scaling
              const distanceFromCenter = Math.sqrt(x * x + y * y);
              const maxDistance = radius + 30;
              const normalizedDistance = Math.min(
                distanceFromCenter / maxDistance,
                1
              );

              // Simplified scaling
              const baseScale = 0.75 + (1 - normalizedDistance) * 0.25;
              const scale = baseScale;
              const opacity = 0.9;

              // Reduced rotation for tilt effect
              const tiltRotation = Math.sin(time * 0.2 + index) * 3; // Less rotation

              return (
                <div
                  key={image.id}
                  className="absolute group transition-all duration-1000 ease-out"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale}) rotate(${tiltRotation}deg) translateZ(0)`,
                    left: "50%",
                    top: "50%",
                    width: `${itemWidth}px`,
                    height: `${itemHeight + 80}px`,
                    opacity: opacity,
                    zIndex: Math.round((1 - normalizedDistance) * 50),
                  }}
                >
                  {/* Optimized Image Card */}
                  <div
                    className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer shadow-xl shadow-black/40 hover:shadow-red-500/25"
                    onClick={() => setSelectedImage(index)}
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(55, 65, 81, 0.9), rgba(17, 24, 39, 0.9))",
                      transform: 'translateZ(0)', // Hardware acceleration
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-52 overflow-hidden">
                      <img
                        src={image.src}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        style={{ transform: 'translateZ(0)' }}
                      />

                      {/* Simplified Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    </div>

                    {/* Optimized Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 via-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                      <div className="text-white text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                        <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center mb-2 mx-auto backdrop-blur-sm border border-white/20">
                          <svg
                            className="w-6 h-6"
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
