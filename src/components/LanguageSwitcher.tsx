import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ isMobile = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ar', name: 'العربية', flag: 'dz' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    document.documentElement.lang = langCode;
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    setIsOpen(false);
  };

  return (
    <div className={`relative ${isMobile ? "flex justify-center" : ""}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-red-400 transition-colors duration-200 flex items-center gap-2"
      >
        <Globe className="h-4 w-4" />
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className={`${isMobile ? "" : "hidden sm:inline"}`}>{currentLanguage.name}</span>
      </Button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className={`${isMobile ? "relative w-fit mx-auto" : "absolute"} top-full mt-2 ${isMobile ? "right-auto" : "right-0"} bg-black/90 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl z-[100] min-w-[120px]`}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full px-4 py-2 text-left hover:bg-red-600/20 transition-colors duration-200 flex items-center gap-2 first:rounded-t-lg last:rounded-b-lg ${
                i18n.language === language.code ? 'bg-red-600/30 text-red-400' : 'text-gray-300'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm">{language.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher;