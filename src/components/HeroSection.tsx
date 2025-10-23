import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimatedBackground from './AnimatedBackground';
import TextType from '@/blocks/TextAnimations/TextType/TextType';
import BlurText from './BlurText';
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
    <>
  <section id="home" className={`min-h-[110svh] md:min-h-screen hero-bg flex items-center justify-center relative overflow-hidden ${isArabic ? "pt-[10vw]" : "pt-[20vw]"} pb-24 md:pt-0 md:pb-0`}>
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
          {/* Mobile Logo - positioned within hero so it uses hero background */}
          <div className="md:hidden w-full flex justify-center pointer-events-none mt-0 mb-0 select-none">
            <img
              src="/images/logo.png"
              alt="IRBT Champion Club Logo"
              className={`drop-shadow-lg ${isArabic ? "h-[55vw]" : "h-[48vw]"} w-auto`}
              style={{ maxWidth: '70vw' }}
              loading="lazy"
              decoding="async"
              width={512}
              height={512}
            />
          </div>
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

            {isArabic && (
              <div className="flex justify-center">
                <BlurText
                  text={t('hero.extraLine')}
                  delay={300}
                  stepDuration={0.6}
                  animateBy="words"
                  direction="top"
                  className="text-center text-2xl md:text-3xl lg:text-4xl text-yellow-400 mt-2 font-bebas"
                />
              </div>
            )}

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
                  <CountUp end={140} suffix="+" duration={4.5} enableScrollSpy />
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
                  <CountUp end={6} duration={4.5} enableScrollSpy scrollSpyDelay={400} />
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
    </>
  );
};

export default HeroSection;