import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedBackground from './AnimatedBackground';
import TextType from '@/blocks/TextAnimations/TextType/TextType';
import CountUp from 'react-countup';

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToRegister = () => {
    const element = document.querySelector('#register-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  return (
    <section id="home" className={`min-h-screen hero-bg flex items-center justify-center relative overflow-hidden ${isArabic ? "pt-[10vw]" : "pt-[20vw]"} md:pt-0`}>
      {/* Mobile Logo - absolutely at the top, centered, only on mobile */}
      <div className="block md:hidden absolute left-1/2 top-0 -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none">
        <img
          src="/images/logo.png"
          alt="IRBT Champion Club Logo"
          className={`drop-shadow-lg ${isArabic ? "h-[70vw]" : "h-[60vw]"} w-auto`}
          style={{ maxWidth: '80vw' }}
        />
      </div>

      {/* Enhanced Animated Background */}
      <AnimatedBackground />

      {/* Background Pattern */}
      <div className="absolute inset-0 boxing-pattern opacity-15"></div>

      {/* Simplified Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-red-600 rounded-full opacity-25 float-animation"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-yellow-500 rounded-full opacity-25 float-animation" style={{animationDelay: '3s'}}></div>

      {/* Simplified animated elements */}
      <motion.div
        className="absolute top-1/3 right-20 w-6 h-6 border border-yellow-500 rotate-45 opacity-30"
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-20 w-4 h-4 bg-red-600 opacity-25"
        animate={{
          y: [-15, 15, -15],
          x: [-8, 8, -8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading - UPDATED WITH TEXT TYPE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white leading-tight"
          >
            {t('hero.title1')}
            <br />
            <span className="text-gradient-red-gold">
              <TextType
                text={t('hero.title2')}
                typingSpeed={90}
                pauseDuration={2500}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-white/70"
                className="inline-block"
              />
            </span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            {t('hero.description')}
          </motion.p>

          {/* Stats - optimized animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 py-8"
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="font-bebas text-3xl md:text-4xl text-red-600"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
              >
                <CountUp end={700} suffix="+" duration={4.5} enableScrollSpy />
              </motion.div>
              <div className="text-gray-400 text-sm">{t('hero.stats.members')}</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="font-bebas text-3xl md:text-4xl text-yellow-500"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <CountUp end={3} duration={4.5} enableScrollSpy scrollSpyDelay={400} />
              </motion.div>
              <div className="text-gray-400 text-sm">{t('hero.stats.trainers')}</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="font-bebas text-3xl md:text-4xl text-red-600"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <CountUp end={9} duration={4.5} enableScrollSpy scrollSpyDelay={800} />
              </motion.div>
              <div className="text-gray-400 text-sm">{t('hero.stats.experience')}</div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={scrollToRegister}
                className="bg-gradient-red-gold hover:scale-105 transition-all duration-300 pulse-glow text-lg px-12 py-6 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                />
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;