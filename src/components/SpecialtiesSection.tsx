import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useMemo, useCallback } from "react";
import Stack from "@/blocks/Components/Stack/Stack";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Dumbbell,
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
    // Gym specialty
    {
      title: t("specialty.gym.title"),
      icon: <Dumbbell className="h-8 w-8" />,
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
    // Roman Wrestling specialty
    {
      title: t("specialty.romanWrestling.title"),
      icon: <Shield className="h-8 w-8" />,
      description: t("specialty.romanWrestling.description"),
      features: [
        t("specialty.romanWrestling.feature1"),
        t("specialty.romanWrestling.feature2"),
        t("specialty.romanWrestling.feature3"),
        t("specialty.romanWrestling.feature4"),
      ],
      forMen: true,
      forWomen: true,
      image: "/images/roman-wrestling.webp",
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
      title: t("specialty.fitness.man.title"),
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
    }
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
        "برامج كارديو و فيزيك",
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
        "لياقة بدنية نحت الجسم و رشاقة",
        "برامج كارديو و فيزيك (أيروبيك)",
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
        "ألعاب و أنشطة ذهنية",
        "تدريبات مرونة العضلات",
        "اكتساب الثقة بالنفس",
        "تدريبات تقوية العظام و المفاصل",
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

  // Optimized Stack render function - text only for better performance
  const renderCard = useCallback((specialty) => {
    const isGym = specialty.title === t("specialty.gym.title");
    
    if (isGym) {
      // Special "Coming Soon 2026" design for gym
      return (
        <Card className="glass-morphism border-purple-500/50 h-full relative overflow-hidden" style={{ transform: 'translateZ(0)' }}>
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30 animate-pulse"></div>
          
          {/* Coming Soon Badge */}
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
              2026
            </div>
          </div>
          
          {/* Overlay pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(147, 51, 234, 0.1) 10px,
              rgba(147, 51, 234, 0.1) 20px
            )`
          }}></div>
          
          <CardContent className="px-5 pt-5 pb-0 h-full flex flex-col relative z-10">
            {/* Header with Icon and Title */}
            <div className="text-center mb-3">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2.5 w-fit mx-auto mb-2 shadow-lg shadow-purple-500/25">
                {specialty.icon}
              </div>
              <h3 className="font-bebas text-xl text-white mb-1">
                {specialty.title}
              </h3>
              <div className="text-purple-300 text-xs font-medium">
                قريباً
              </div>
            </div>
            
            {/* Content - Coming Soon Message */}
            <div className="min-h-0 flex-1 flex flex-col justify-center">
              {/* Coming Soon Message */}
              <div className="text-center mb-4">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-white text-2xl font-bebas mb-2">
                    01/06/2026
                  </div>
                  <div className="text-gray-300 text-sm mb-2">
                    نعمل على إعداد شيء مميز لكم
                  </div>
                  <div className="flex items-center justify-center gap-2 text-purple-300 text-xs">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-purple-500 border-t-transparent"></div>
                    قيد التطوير
                  </div>
                </div>
              </div>
            </div>
            
            {/* Special Coming Soon Badge */}
            <div className="pb-2 pt-2 border-t border-purple-500/30">
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full px-3 py-1.5 border border-purple-500/50">
                  <span className="text-xs text-purple-200 font-medium whitespace-nowrap flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    قريباً في 2026
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }
    
    // Regular card design for other specialties
    return (
      <Card className="glass-morphism border-gray-800 h-full" style={{ transform: 'translateZ(0)' }}>
      <CardContent className="px-5 pt-5 pb-4 h-full flex flex-col">
          {/* Header with Icon and Title */}
          <div className="text-center mb-3">
            <div className="bg-gradient-red-gold rounded-full p-2.5 w-fit mx-auto mb-2">
              {specialty.icon}
            </div>
            <h3 className="font-bebas text-2xl text-white mb-1">
              {specialty.title}
            </h3>
          </div>
          
          {/* Content - Description and Features */}
          <div className="min-h-0">
            <p className="text-gray-300 mb-3 leading-relaxed text-sm text-center">
              {specialty.description}
            </p>
            {/* Show all 4 features */}
            <div className="mb-3">
              <h4 className="text-red-400 font-semibold mb-2 flex items-center justify-center text-sm">
                <Target className="h-3 w-3 mr-1" />
                {t("specialties.whatYouLearn")}
              </h4>
              <ul className="space-y-1">
                {specialty.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-400 text-sm flex items-center justify-center text-center px-2"
                  >
                    <span className="text-yellow-500 mr-1 text-sm">✓</span>
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Gender Availability Badge - Reduced spacing to bottom */}
          <div className="mt-auto pt-4 border-t border-gray-700/30">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-full px-3 py-1.5 border border-gray-600/50">
                <span className="text-sm text-gray-200 font-medium whitespace-nowrap">
                  {t("specialties.forAll")}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }, [t]);

  // Memoized and optimized age group card component
  const AgeGroupCard = useMemo(() => {
    interface AgeGroupCardProps {
      group: any;
      index: number;
      isActive: boolean;
      onClick: (index: number) => void;
    }
    
    return React.memo<AgeGroupCardProps>(({ group, index, isActive, onClick }) => (
      <div
        className={`relative cursor-pointer group transition-all duration-300 ${
          isActive ? "scale-102" : "hover:scale-101"
        }`}
        onClick={() => onClick(index)}
        style={{ 
          transform: 'translateZ(0)',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.5s ease, transform 0.3s ease'
        }}
      >
        <div
          className={`
          relative overflow-hidden rounded-xl p-5 h-full
          bg-gradient-to-br from-black/85 to-gray-900/85
          border-2 transition-all duration-300
          ${
            isActive
              ? `${group.borderColor} shadow-lg shadow-current/15`
              : "border-gray-800 hover:border-gray-700"
          }
        `}
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Background Gradient */}
          <div
            className={`
            absolute inset-0 opacity-0 transition-opacity duration-300
            bg-gradient-to-br ${group.color}
            ${
              isActive
                ? "opacity-8"
                : "group-hover:opacity-4"
            }
          `}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Icon Badge */}
            <div className="flex items-center justify-center mb-3">
              {isActive && (
                <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-full p-1 animate-pulse">
                  <Trophy className="h-3 w-3 text-white" />
                </div>
              )}
            </div>

            {/* Title */}
            <h4 className="font-bebas text-lg text-white mb-1">
              {group.title}
            </h4>
            <p className="text-xs text-gray-400 mb-2">
              {group.subtitle}
            </p>

            {/* Age Range */}
            <div
              className={`
              inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3
              ${group.bgColor} ${group.borderColor} border backdrop-blur-sm
            `}
            >
              <Calendar className="h-3 w-3 text-current" />
              <span className="text-sm font-medium text-white">
                {group.age}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-xs mb-3 leading-relaxed text-center">
              {group.description}
            </p>

            {/* Activities Preview */}
            <div className="space-y-1">
              {group.activities.slice(0, 3).map((activity: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-gray-400"
                >
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-red-500 to-yellow-500" />
                  {activity}
                </div>
              ))}
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/3 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    ));
  }, [inView]);

  return (
    <section
      id="specialties"
      className="py-10 md:py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
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

        {/* Age Groups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
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

          {/* Active Group Details */}
          <div
            key={activeAgeGroup}
            className={`
              rounded-xl p-6 border-2 backdrop-blur-sm
              bg-gradient-to-br from-black/85 to-gray-900/85
              ${activeGroup.borderColor}
              transition-all duration-300
            `}
            style={{ transform: 'translateZ(0)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

              <div>
                <h4 className="font-bebas text-xl text-white mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-red-400" />
                  الأنشطة المتاحة
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeGroup.activities.slice(0, 4).map((activity: string, idx: number) => (
                    <div
                      key={`${activeAgeGroup}-${idx}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-500" />
                      <span className="text-gray-300 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stack animation for specialties */}
        <div className="py-6 md:py-12 flex justify-center">
          <Stack
            cardDimensions={{ width: 280, height: 430 }}
            cardsData={specialtiesWithIds}
            renderCard={renderCard}
            sensitivity={80}
            animationConfig={{ stiffness: 120, damping: 30 }}
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

            {/* Schedule Note Section */}
            <div className="relative mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-full p-2">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bebas text-lg text-white mb-3 flex items-center gap-2">
                    نظام الحصص التدريبية
                    <div className="h-px bg-gradient-to-r from-red-500 to-yellow-500 flex-1 ml-3"></div>
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-red-400 font-medium text-sm">ثلاث حصص داخلية</span>
                      </div>
                      <p className="text-gray-300 text-sm">تدريب داخل القاعة</p>
                    </div>
                    
                    <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span className="text-yellow-400 font-medium text-sm">حصة واحدة خارجية</span>
                      </div>
                      <p className="text-gray-300 text-sm">تختلف حسب النشاط</p>
                    </div>
                  </div>
                  
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
