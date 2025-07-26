import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useMemo, useCallback } from "react";
import Stack from "@/blocks/Components/Stack/Stack";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Shield,
  Target,
  Flame,
  Swords,
  Heart,
  Clock,
  Calendar,
  Star,
  Trophy,
  MapPin,
  Waves,
  Trees,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const SpecialtiesSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeAgeGroup, setActiveAgeGroup] = useState(0);

  // Memoize static data to prevent recreations on every render
  const specialties = useMemo(() => [
    {
      title: t("specialty.boxing.title"),
      icon: <Zap className="h-8 w-8" />,
      description: t("specialty.boxing.description"),
      features: [
        t("specialty.boxing.feature1"),
        t("specialty.boxing.feature2"),
        t("specialty.boxing.feature3"),
        t("specialty.boxing.feature4"),
      ],
      forMen: true,
      forWomen: true,
      image: "/images/boxing.webp",
    },
    {
      title: t("specialty.kickboxing.title"),
      icon: <Target className="h-8 w-8" />,
      description: t("specialty.kickboxing.description"),
      features: [
        t("specialty.kickboxing.feature1"),
        t("specialty.kickboxing.feature2"),
        t("specialty.kickboxing.feature3"),
        t("specialty.kickboxing.feature4"),
      ],
      forMen: true,
      forWomen: true,
      image: "/images/kick.webp",
    },
    {
      title: t("specialty.muayThai.title"),
      icon: <Flame className="h-8 w-8" />,
      description: t("specialty.muayThai.description"),
      features: [
        t("specialty.muayThai.feature1"),
        t("specialty.muayThai.feature2"),
        t("specialty.muayThai.feature3"),
        t("specialty.muayThai.feature4"),
      ],
      forMen: true,
      forWomen: true,
      image: "/images/muaythai.webp",
    },
    {
      title: t("specialty.gym.title"),
      icon: <Shield className="h-8 w-8" />,
      description: t("specialty.gym.description"),
      features: [
        t("specialty.gym.feature1"),
        t("specialty.gym.feature2"),
        t("specialty.gym.feature3"),
        t("specialty.gym.feature4"),
      ],
      forMen: true,
      forWomen: true,
      image: "/images/gym.webp",
    },
    {
      title: t("specialty.mma.title"),
      icon: <Swords className="h-8 w-8" />,
      description: t("specialty.mma.description"),
      features: [
        t("specialty.mma.feature1"),
        t("specialty.mma.feature2"),
        t("specialty.mma.feature3"),
        t("specialty.mma.feature4"),
      ],
      forMen: true,
      forWomen: true,
      image: "/images/mma.webp",
    },
    {
      title: t("specialty.fitness.title"),
      icon: <Heart className="h-8 w-8" />,
      description: t("specialty.fitness.description"),
      features: [
        t("specialty.fitness.feature1"),
        t("specialty.fitness.feature2"),
        t("specialty.fitness.feature3"),
        t("specialty.fitness.feature4"),
      ],
      forMen: true,
      forWomen: true,
      image: "/images/fitness.webp",
    },
  ], [t]);

  const ageGroups = useMemo(() => [
    {
      id: 0,
      title: t("ageGroup.men.title"),
      subtitle: t("ageGroup.men.subtitle"),
      age: t("ageGroup.men.age"),
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-500/10",
      description: t("ageGroup.men.description"),
      activities: [
        "ملاكمة احترافية",
        "فنون قتالية",
        "تدريبات القوة",
        "برامج اللياقة",
      ],
      activitiesEn: [
        "Professional Boxing",
        "Martial Arts",
        "Strength Training",
        "Fitness Programs",
      ],
    },
    {
      id: 1,
      title: t("ageGroup.women.title"),
      subtitle: t("ageGroup.women.subtitle"),
      age: t("ageGroup.women.age"),
      color: "from-pink-600 to-pink-800",
      borderColor: "border-pink-500/30",
      bgColor: "bg-pink-500/10",
      description: t("ageGroup.women.description"),
      activities: [
        "ملاكمة للسيدات",
        "فنون دفاع عن النفس",
        "لياقة بدنية",
        "تدريبات جماعية",
      ],
      activitiesEn: [
        "Women's Boxing",
        "Self-Defense",
        "Fitness",
        "Group Training",
      ],
    },
    {
      id: 2,
      title: t("ageGroup.youngKids.title"),
      subtitle: t("ageGroup.youngKids.subtitle"),
      age: t("ageGroup.youngKids.age"),
      color: "from-yellow-600 to-orange-600",
      borderColor: "border-yellow-500/30",
      bgColor: "bg-yellow-500/10",
      description: t("ageGroup.youngKids.description"),
      activities: [
        "ألعاب حركية",
        "تطوير المهارات",
        "أنشطة ذهنية",
        "تدريبات أساسية",
      ],
      activitiesEn: [
        "Movement Games",
        "Skill Development",
        "Cognitive Activities",
        "Basic Training",
      ],
    },
  ], [t]);

  // Memoize animation variants to prevent recreation
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }), []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 50, willChange: 'opacity, transform' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }), []);

  // Memoize callback to prevent unnecessary re-renders
  const handleAgeGroupClick = useCallback((index) => {
    setActiveAgeGroup(index);
  }, []);

  // Memoize the active age group data
  const activeGroup = useMemo(() => ageGroups[activeAgeGroup], [ageGroups, activeAgeGroup]);

  // Memoize specialties with IDs for Stack component
  const specialtiesWithIds = useMemo(() => 
    specialties.map((s, idx) => ({ ...s, id: idx + 1 })), 
    [specialties]
  );

  // Memoize the Stack render function to prevent recreation
  const renderCard = useCallback((specialty) => (
    <Card className="glass-morphism border-gray-800 h-full">
      <CardContent className="p-0">
        {/* Image Header */}
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={specialty.image}
            alt={specialty.title}
            className="w-full h-full object-cover"
            loading="lazy"
            width={350}
            height={200}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute top-4 left-4 bg-gradient-red-gold rounded-full p-3">
            {specialty.icon}
          </div>
          <div className="absolute bottom-4 left-4">
            <h3 className="font-bebas text-2xl text-white">
              {specialty.title}
            </h3>
          </div>
        </div>
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-4 leading-relaxed">
            {specialty.description}
          </p>
          {/* Features */}
          <div className="mb-4">
            <h4 className="text-red-400 font-semibold mb-2 flex items-center">
              <Target className="h-4 w-4 mr-2" />
              {t("specialties.whatYouLearn")}
            </h4>
            <ul className="space-y-1">
              {specialty.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-gray-400 text-sm flex items-start"
                >
                  <span className="text-yellow-500 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {/* Gender Availability */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-full px-4 py-2 border border-gray-600">
              <span className="text-xs text-gray-300 ml-2">
                {t("specialties.forAll")}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ), [t]);

  // Memoized age group card component to reduce re-renders
  const AgeGroupCard = useMemo(() => ({ group, index, isActive, onClick }) => (
    <motion.div
      key={group.id}
      className={`relative cursor-pointer group transition-all duration-300 ${
        isActive ? "scale-105" : "hover:scale-102"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      onClick={() => onClick(index)}
      whileHover={{ y: -5 }}
      layout
    >
      <div
        className={`
        relative overflow-hidden rounded-2xl p-6 h-full
        bg-gradient-to-br from-black/90 to-gray-900/90
        border-2 transition-all duration-300
        ${
          isActive
            ? `${group.borderColor} shadow-2xl shadow-current/20`
            : "border-gray-800 hover:border-gray-600"
        }
      `}
      >
        {/* Background Gradient */}
        <div
          className={`
          absolute inset-0 opacity-0 transition-opacity duration-300
          bg-gradient-to-br ${group.color}
          ${
            isActive
              ? "opacity-10"
              : "group-hover:opacity-5"
          }
        `}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Icon and Badge */}
          <div className="flex items-center justify-between mb-4">
            {isActive && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-full p-1"
              >
                <Trophy className="h-4 w-4 text-white" />
              </motion.div>
            )}
          </div>

          {/* Title */}
          <h4 className="font-bebas text-xl text-white mb-1">
            {group.title}
          </h4>
          <p className="text-xs text-gray-400 mb-3">
            {group.subtitle}
          </p>

          {/* Age Range */}
          <div
            className={`
            inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4
            ${group.bgColor} ${group.borderColor} border backdrop-blur-sm
          `}
          >
            <Calendar className="h-3 w-3 text-current" />
            <span className="text-sm font-medium text-white">
              {group.age}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {group.description}
          </p>

          {/* Activities Preview */}
          <div className="space-y-1">
            {group.activities.slice(0, 4).map((activity, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs text-gray-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-yellow-500" />
                {activity}
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  ), [inView]);

  return (
    <section
      id="specialties"
      className="py-10 md:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements - Static to avoid repaints */}
      <div className="absolute inset-0 boxing-pattern opacity-10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 border border-red-600 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-yellow-500 rounded-full opacity-20"></div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-6xl text-white mb-4">
            {t("specialties.title").split(" ")[0]}{" "}
            <span className="text-gradient-red-gold">
              {t("specialties.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            {t("specialties.description")}
          </p>
        </motion.div>

        {/* Enhanced Age and Activity Rules */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
          {/* Interactive Age Group Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {ageGroups.map((group, index) => (
              <AgeGroupCard
                key={group.id}
                group={group}
                index={index}
                isActive={activeAgeGroup === index}
                onClick={handleAgeGroupClick}
              />
            ))}
          </div>

          {/* Detailed View for Active Group */}
          <motion.div
            key={activeAgeGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`
              rounded-2xl p-8 border-2 backdrop-blur-sm
              bg-gradient-to-br from-black/90 to-gray-900/90
              ${activeGroup.borderColor}
            `}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <h3 className="font-bebas text-3xl text-white">
                      {activeGroup.title}
                    </h3>
                    <p className="text-gray-400">
                      {activeGroup.subtitle}
                    </p>
                    <div
                      className={`
                      inline-flex items-center gap-2 px-4 py-2 rounded-full mt-2
                      ${activeGroup.bgColor} ${activeGroup.borderColor} border
                    `}
                    >
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium text-white">
                        {activeGroup.age}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {activeGroup.description}
                </p>
              </div>

              {/* Right Side - Activities */}
              <div>
                <h4 className="font-bebas text-xl text-white mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-red-400" />
                  الأنشطة المتاحة
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeGroup.activities.map((activity, idx) => (
                    <motion.div
                      key={`${activeAgeGroup}-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-500" />
                      <span className="text-gray-300 text-sm">{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stack animation for specialties */}
        <div className="py-6 md:py-12 flex justify-center">
          <Stack
            cardDimensions={{ width: 300, height: 480 }}
            cardsData={specialtiesWithIds}
            renderCard={renderCard}
          />
        </div>

        {/* Schedule Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-morphism rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="font-bebas text-2xl text-white">
                {t("specialties.schedule")}
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              {t("specialties.scheduleDesc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="font-bebas text-xl text-red-600">
                  {t("specialties.morning")}
                </div>
                <div className="text-gray-400 text-sm">
                  {t("specialties.morningTime")}
                </div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-xl text-yellow-500">
                  {t("specialties.afternoon")}
                </div>
                <div className="text-gray-400 text-sm">
                  {t("specialties.afternoonTime")}
                </div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-xl text-red-600">
                  {t("specialties.evening")}
                </div>
                <div className="text-gray-400 text-sm">
                  {t("specialties.eveningTime")}
                </div>
              </div>
            </div>

            {/* New Schedule Note Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative mt-8"
            >
              <div className="flex items-start gap-4">
                {/* Icon section */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-full p-2">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-bebas text-lg text-white mb-3 flex items-center gap-2">
                    نظام الحصص التدريبية
                    <div className="h-px bg-gradient-to-r from-red-500 to-yellow-500 flex-1 ml-3"></div>
                  </h4>
                  
                  {/* Class breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Indoor sessions */}
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-red-400 font-medium text-sm">ثلاث حصص داخلية</span>
                      </div>
                      <p className="text-gray-300 text-sm">تدريب داخل القاعة</p>
                    </div>
                    
                    {/* Outdoor session */}
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span className="text-yellow-400 font-medium text-sm">حصة واحدة خارجية</span>
                      </div>
                      <p className="text-gray-300 text-sm">تختلف حسب النشاط</p>
                    </div>
                  </div>
                  
                  {/* Location options */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5">
                      <MapPin className="h-3 w-3 text-green-400" />
                      <span className="text-green-300 text-sm">الملعب</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1.5">
                      <Waves className="h-3 w-3 text-blue-400" />
                      <span className="text-blue-300 text-sm">المسبح</span>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1.5">
                      <Trees className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-300 text-sm">الغابة</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;