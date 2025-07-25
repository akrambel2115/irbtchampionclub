import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ClickSpark from '@/blocks/Animations/ClickSpark/ClickSpark';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.trainers'), href: '#trainers' },
    { name: t('nav.specialties'), href: '#specialties' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.register'), href: '#register' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`flex items-center h-16 w-full md:justify-between justify-center ${i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}> 
          {/* Mobile: Burger menu left for English, right for Arabic. Desktop: nav centered, burger hidden. */}
          {i18n.language !== 'ar' && (
            <div className="md:hidden w-auto mr-2 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                {isOpen ? (
                  <X className="h-8 w-8" style={{ minWidth: '2rem', minHeight: '2rem' }} />
                ) : (
                  <Menu className="h-8 w-8" style={{ minWidth: '2rem', minHeight: '2rem' }} />
                )}
              </Button>
            </div>
          )}

          {/* Desktop Nav Links - Centered, Mobile: flex-1 for center grow */}
          <div className="flex-1 flex items-center justify-center md:flex md:justify-center"> 
            <div className={`hidden md:flex items-center ${i18n.language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}> 
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-red-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </motion.button>
              ))}
              <LanguageSwitcher />
              <Button
                onClick={() => scrollToSection('#register')}
                className="bg-gradient-red-gold hover:scale-105 transition-transform duration-200 pulse-glow"
              >
                {t('nav.joinNow')}
              </Button>
            </div>
          </div>

          {i18n.language === 'ar' && (
            <div className="md:hidden w-auto ml-2 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                {isOpen ? (
                  <X className="h-8 w-8" style={{ minWidth: '2rem', minHeight: '2rem' }} />
                ) : (
                  <Menu className="h-8 w-8" style={{ minWidth: '2rem', minHeight: '2rem' }} />
                )}
              </Button>
            </div>
          )}

          {/* Spacer for desktop to balance the layout */}
          <div className="hidden md:flex flex-1"></div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism mt-2 rounded-lg p-4"
          >
            <div className={`flex flex-col space-y-3 ${i18n.language === 'ar' ? 'items-end' : 'items-start'}`}> 
              {navItems.map((item) => (
                <ClickSpark
                  key={item.name}
                  sparkColor="#ff4d4d"
                  sparkSize={8}
                  sparkRadius={20}
                  sparkCount={8}
                  duration={500}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`text-white hover:text-red-400 transition-colors duration-200 py-2 w-full ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}
                  >
                    {item.name}
                  </button>
                </ClickSpark>
              ))}
              <div className="flex justify-center w-full my-2">
                <LanguageSwitcher isMobile={true} />
              </div>
              <ClickSpark
                sparkColor="#ffb700"
                sparkSize={10}
                sparkRadius={30}
                sparkCount={12}
                duration={600}
                extraScale={1.2}
              >
                <Button
                  onClick={() => scrollToSection('#register')}
                  className="bg-gradient-red-gold w-full mt-4"
                >
                  {t('nav.joinNow')}
                </Button>
              </ClickSpark>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;