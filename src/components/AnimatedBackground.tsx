import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, delay: number}>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 dynamic-bg opacity-20 will-change-transform"></div>
      {/* Floating particles */}
      <div className="particle-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
      {/* Morphing shapes */}
      <div className="morphing-shapes">
        <div className="shape w-32 h-32 top-1/4 left-1/4 will-change-transform"></div>
        <div className="shape w-24 h-24 top-3/4 right-1/4 will-change-transform"></div>
        <div className="shape w-40 h-40 top-1/2 right-1/3 will-change-transform"></div>
      </div>
      {/* Animated grid lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent"
            style={{ top: `${i * 16}%`, width: '100%', willChange: 'opacity, transform' }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.7,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
      </div>
      {/* Pulsing orbs (reduced size for performance) */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
          top: '20%',
          left: '10%',
          willChange: 'transform, opacity',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)',
          bottom: '20%',
          right: '10%',
          willChange: 'transform, opacity',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.15, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export default AnimatedBackground;