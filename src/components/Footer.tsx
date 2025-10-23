import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";


const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const allowCloseRef = React.useRef(false);
  const externalUrl = "https://www.instagram.com/divnest/";

  const openConfirm = () => {
    allowCloseRef.current = false;
    setConfirmOpen(true);
  };
  const proceedToExternal = () => {
    allowCloseRef.current = true;
    setConfirmOpen(false);
    window.open(externalUrl, "_blank", "noopener,noreferrer");
  };
  const cancelConfirm = () => {
    allowCloseRef.current = true;
    setConfirmOpen(false);
  };

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
    t("specialty.gym.title") + " (01/06/2026)",
    t("specialty.mma.title"),
    t("specialty.fitness.man.title"),
    t("specialty.fitness.woman.title"),
    t("specialty.romanWrestling.title"),
    t("specialty.massage.title"),
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578160406392", name: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/irbt_champion_club/", name: "Instagram" },
  ];

  return (
    <>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-8 w-8 text-red-600">
                  <defs>
                    <linearGradient id="a" x1="6.293" x2="25.707" y1="6.293" y2="25.707" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#fee140" />
                      <stop offset="1" stopColor="#fa709a" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#a)" d="M29.707,6.293l-4-4A1,1,0,0,0,25,2H24.1a1,1,0,0,0-.708.293L21,4.683a2.337,2.337,0,0,0-.523.213L20,5.173c-2.493,1.435-5.749,5.075-5.994,7.28a1,1,0,0,0,.044.424,8.892,8.892,0,0,0,4.9,5.03,1.027,1.027,0,0,0,.178.054A1.9,1.9,0,0,0,19.51,18a4.118,4.118,0,0,0,2.517-1.214l0.136,0.136a2.588,2.588,0,0,0,1.734.767A2.317,2.317,0,0,0,25.674,17l1.158-1.158a2.362,2.362,0,0,0,.682-1.5l0.254-3.479a2.476,2.476,0,0,0-.011-0.3l1.95-1.952A1,1,0,0,0,30,7.9V7A1,1,0,0,0,29.707,6.293Zm-4.188,7.9a0.359,0.359,0,0,1-.1.233l-1.159,1.159a0.4,0.4,0,0,1-.286.1,0.6,0.6,0,0,1-.4-0.183l-0.193-.192a7.668,7.668,0,0,0,.814-1.277,1,1,0,1,0-1.81-.852C21.82,14.395,20.167,15.939,19.571,16a6.9,6.9,0,0,1-3.537-3.534C16.4,11.079,18.862,8.135,21,6.907l0.482-.277a0.532,0.532,0,0,1,.613.133l3.5,3.5a0.589,0.589,0,0,1,.182.449ZM28,7.488L26.823,8.666,23.506,5.349c-0.057-.058-0.122-0.1-0.183-0.156L24.515,4h0.071L28,7.414V7.488Zm-14.945,6.6a1.027,1.027,0,0,0-.178-0.054,3.634,3.634,0,0,0-2.9,1.175l-0.136-.136A2.588,2.588,0,0,0,8.1,14.312,2.28,2.28,0,0,0,6.326,15L5.168,16.156a2.362,2.362,0,0,0-.682,1.5L4.231,21.14a2.476,2.476,0,0,0,.011.3l-1.95,1.952A1,1,0,0,0,2,24.1V25a1,1,0,0,0,.293.707l4,4A1,1,0,0,0,7,30H7.9a1,1,0,0,0,.708-0.293l2.387-2.389a2.344,2.344,0,0,0,.524-0.215L12,26.827c2.493-1.435,5.749-5.075,5.994-7.28a1,1,0,0,0-.044-0.424A8.892,8.892,0,0,0,13.055,14.093ZM7.485,28H7.414L4,24.586V24.512l1.177-1.178,3.316,3.318c0.058,0.058.124,0.1,0.186,0.153ZM11,25.093l-0.482.277a0.529,0.529,0,0,1-.613-0.133l-3.5-3.5a0.589,0.589,0,0,1-.182-0.449L6.481,17.8a0.359,0.359,0,0,1,.1-0.233l1.159-1.159a0.37,0.37,0,0,1,.267-0.1H8.027a0.6,0.6,0,0,1,.4.183l0.193,0.192A7.668,7.668,0,0,0,7.8,17.962a1,1,0,1,0,1.81.852c0.568-1.208,2.222-2.753,2.818-2.813a6.9,6.9,0,0,1,3.537,3.534C15.6,20.921,13.138,23.865,11,25.093ZM6.293,7.707A1,1,0,0,1,7.707,6.293l2,2A1,1,0,1,1,8.293,9.707ZM11,9V7a1,1,0,0,1,2,0V9A1,1,0,0,1,11,9ZM6,12a1,1,0,0,1,1-1H9a1,1,0,0,1,0,2H7A1,1,0,0,1,6,12ZM25.707,24.293a1,1,0,1,1-1.414,1.414l-2-2a1,1,0,0,1,1.414-1.414ZM26,20a1,1,0,0,1-1,1H23a1,1,0,0,1,0-2h2A1,1,0,0,1,26,20Zm-5,3v2a1,1,0,0,1-2,0V23A1,1,0,0,1,21,23Z" />
                </svg>
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
                
                {/* Google Maps Embed */}
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.2!2d8.0467219!3d36.161639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fa690042e2f9e1:0xc7e8159e4cf44301!2z2YLYp9i52KkgSVJCVCBDSEFNUElPTiBDTFVC!5e0!3m2!1sen!2sdz!4v1694513234567!5m2!1sen!2sdz"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg"
                  ></iframe>
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
              <span>{t("footer.developedBy")}</span>
              <button
                type="button"
                onClick={openConfirm}
                className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 font-semibold underline-offset-2 hover:underline"
              >
                Divnest
              </button>
            </div>

            <div className="flex text-sm">
              <Link
                to="/PrivacyPolicy"
                className="text-gray-400 hover:text-white transition-colors duration-200 ml-2 mr-2"
              >
                {t("footer.privacyPolicy")}
              </Link>
              <Link
                to="/TermsAndConditions"
                className="text-gray-400 hover:text-white transition-colors duration-200 ml-2"
              >
                {t("footer.terms")}
              </Link>
              <Link
                to="/Disclaimer"
                className="text-gray-400 hover:text-white transition-colors duration-200 ml-2"
              >
                {t("footer.disclaimer")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
    {/* Non-skippable disclaimer popup for external link */}
    <AlertDialog
      open={confirmOpen}
      onOpenChange={(next) => {
        // Prevent closing by outside click or ESC unless explicitly allowed
        if (!next && !allowCloseRef.current) {
          setConfirmOpen(true);
        } else {
          setConfirmOpen(next);
          if (!next) allowCloseRef.current = false;
        }
      }}
    >
      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>{t("externalDisclaimer.title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("externalDisclaimer.description")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="text-sm text-gray-400 space-y-2">
          <p>• {t("externalDisclaimer.ownerProvided")}</p>
          <p>• {t("externalDisclaimer.noResponsibility")}</p>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={cancelConfirm}>{t("externalDisclaimer.cancel")}</AlertDialogCancel>
          <AlertDialogAction onClick={proceedToExternal}>{t("externalDisclaimer.accept")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
};

export default Footer;
