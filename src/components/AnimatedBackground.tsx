import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

function AnimatedBackground() {
  // Reduce particles from 20 to 8 for better performance
  const particles = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 15
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simplified gradient background - removed dynamic animations */}
      <div className="absolute inset-0 opacity-15 hidden md:block" 
           style={{
             background: 'linear-gradient(-45deg, #000000, #1a0000, #000000, #1a1a00)',
             backgroundSize: '400% 400%',
             animation: 'gradient-shift 20s ease infinite'
           }}>
      </div>
      
      {/* Reduced floating particles */}
      <div className="particle-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`,
              transform: 'translateZ(0)', // Hardware acceleration
            }}
          />
        ))}
      </div>
      
      {/* Simplified morphing shapes - reduced from 3 to 2 */}
      <div className="morphing-shapes">
        <div className="shape w-24 h-24 top-1/4 left-1/4" style={{ transform: 'translateZ(0)' }}></div>
        <div className="shape w-32 h-32 top-2/3 right-1/4" style={{ transform: 'translateZ(0)' }}></div>
      </div>
      
      {/* Reduced animated grid lines from 6 to 3 */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-600/15 to-transparent"
            style={{ 
              top: `${i * 25 + 15}%`, 
              width: '100%',
              transform: 'translateZ(0)'
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              delay: i * 1.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </div>
      
      {/* Simplified pulsing orbs with reduced complexity */}
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.06) 0%, transparent 70%)',
          top: '25%',
          left: '15%',
          transform: 'translateZ(0)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute w-40 h-40 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 70%)',
          bottom: '25%',
          right: '15%',
          transform: 'translateZ(0)',
        }}
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export default AnimatedBackground;