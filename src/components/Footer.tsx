import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";


const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.trainers"), href: "#trainers" },
    { name: t("nav.specialties"), href: "#specialties" },
    { name: t("nav.gallery"), href: "#gallery" },
    { name: t("nav.register"), href: "#register" },
  ];

  const specialties = [
    t("specialty.boxing.title"),
    t("specialty.kickboxing.title"),
    t("specialty.muayThai.title"),
    t("specialty.gym.title"),
    t("specialty.mma.title"),
    t("specialty.fitness.title"),
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 boxing-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Dumbbell className="h-8 w-8 text-red-600" />
                <span className="font-bebas text-2xl text-gradient-red-gold">
                  IRBT Champion Club
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                {t("footer.description")}
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-3 text-red-600" />
                  <span className="text-sm">
                    ولاية سوق أهراس، بلدية تاورة، طريق ونزة
                  </span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-3 text-red-600" />
                  <span className="text-sm">0669778844</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-3 text-red-600" />
                  <span className="text-sm">irbtchampionclub@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="font-bebas text-xl text-white">
                {t("footer.quickLinks")}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Training Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-bebas text-xl text-white">
                {t("footer.trainingPrograms")}
              </h3>
              <ul className="space-y-3">
                {specialties.map((specialty) => (
                  <li key={specialty}>
                    <button
                      onClick={() => scrollToSection("#specialties")}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                    >
                      {specialty}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="font-bebas text-xl text-white flex items-center">
                <Clock className="h-5 w-5 mr-2 text-red-600" />
                {t("footer.trainingHours")}
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>{t('sunday')} إلى {t('thursday')}:</span>
                  <span className="text-white">ستيم تحديدها لاحقا</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>{t('friday')}:</span>
                  <span className="text-white">سيتم تحديدها لاحقا</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>{t('saturday')}:</span>
                  <span className="text-white">سيتم تحديدها لاحقا</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="font-bebas text-lg text-white">
                  {t("footer.followUs")}
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white hover:bg-red-600/20 transition-all duration-200"
                      asChild
                    >
                      <a href={social.href} aria-label={social.name}>
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} IRBT Champion Club. {t("footer.copyright")}
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>{t("footer.madeWith")}</span>
              <span className="text-red-600">❤️</span>
              <span>{t("footer.by")}</span>
              <a
                href="#"
                className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 font-semibold"
              >
                Divnest
              </a>
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t("footer.privacyPolicy")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
