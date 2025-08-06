import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import GlareHover from "@/blocks/Animations/GlareHover/GlareHover";
import { Trophy, Award, Star, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

// TypeScript interface for TrainerCard props
interface TrainerCardProps {
  trainer: {
    name: string;
    title: string;
    experience: string;
    image: string;
    achievements: string[];
    specialties: string[];
  };
  isMainTrainer: boolean;
  orderClass: string;
  cardVariants: Variants;
  glareTrigger: boolean;
  t: (key: string) => string;
}

// Memoized TrainerCard for performance
const TrainerCard = React.memo(function TrainerCard(props: TrainerCardProps) {
  const { trainer, isMainTrainer, orderClass, cardVariants, glareTrigger, t } = props;
  return (
    <motion.div
      variants={cardVariants}
      className={`w-full max-w-sm transition-all duration-300 ${orderClass} ${isMainTrainer ? "md:scale-105 md:-translate-y-4" : "md:hover:scale-105"}`}
    >
      <GlareHover
        width="100%"
        height="100%"
        background="transparent"
        borderRadius="1rem"
        className="p-6"
        glareColor="#ff4d4d"
        glareOpacity={0.2}
        glareSize={200}
        transitionDuration={800}
        trigger={glareTrigger}
      >
        {/* Trainer Image */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-red-600">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              decoding="async"
              style={{ willChange: 'transform, opacity' }}
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-gradient-red-gold rounded-full p-3">
            <Trophy className="h-6 w-6 text-white" />
          </div>
        </div>
        {/* Trainer Info */}
        <div className="text-center mb-6">
          <h3 className="font-bebas text-3xl text-white mb-2">{trainer.name}</h3>
          <p className="text-red-400 font-medium text-lg mb-3">{trainer.title}</p>
          <Badge variant="secondary" className="bg-red-600/20 text-red-400 border-red-600 px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            {trainer.experience}
          </Badge>
        </div>
        {/* Achievements */}
        {trainer.achievements && trainer.achievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-yellow-500 font-semibold mb-3 flex items-center justify-center">
              <Award className="h-5 w-5 mr-2" />
              {t("trainers.achievements")}
            </h4>
            <ul className="text-gray-300 space-y-2">
              {trainer.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Specialties */}
        {trainer.specialties && trainer.specialties.length > 0 && (
          <div className="mt-auto">
            <h4 className="text-yellow-500 font-semibold mb-3 flex items-center justify-center">
              <Target className="h-5 w-5 mr-2" />
              {t("trainers.specialties")}
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {trainer.specialties.map((specialty, idx) => (
                <Badge key={idx} variant="outline" className="border-gray-600 text-gray-300">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </GlareHover>
    </motion.div>
  );
});

const TrainersSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trainers = React.useMemo(() => [
    {
      name: t("trainer.name"),
      title: t("trainer.title"),
      experience: "9 " + t("trainers.experience"),
      image: "/images/oussama.png",
      achievements: [
        t("trainer.achievement1"),
        t("trainer.achievement2"),
        t("trainer.achievement3"),
        t("trainer.achievement4"),
      ],
      specialties: [
        t("trainer.specialty1"),
        t("trainer.specialty2"),
        t("trainer.specialty3"),
      ],
    },
    {
      name: t("trainer2.name"),
      title: t("trainer2.title"),
      experience: "3 " + t("trainers.experience"),
      image: "/images/tasnim.png",
      achievements: [
        t("trainer2.achievement1"),
        t("trainer2.achievement2"),
      ],
      specialties: [
        t('trainer2.specialty1'),
        t('trainer2.specialty2'),
      ],
    },
    {
      name: t("trainer3.name"),
      title: t("trainer3.title"),
      experience: "2 " + t("trainers.experience"),
      image: "/images/ouail.png",
      achievements: [],
      specialties: [],
    },
  ], [t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Automatic glare trigger state
  const [glareTriggers, setGlareTriggers] = useState([false, false]);

  useEffect(() => {
    // Reduce frequency for performance
    const intervals = trainers.map(
      (_, idx) =>
        setInterval(() => {
          setGlareTriggers((prev) => {
            const arr = [...prev];
            arr[idx] = true;
            return arr;
          });
          setTimeout(() => {
            setGlareTriggers((prev) => {
              const arr = [...prev];
              arr[idx] = false;
              return arr;
            });
          }, 700); // glare duration
        }, 5000 + idx * 1200) // slower, staggered
    );
    return () => intervals.forEach(clearInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trainers.length]);

  return (
    <section id="trainers" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 boxing-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-4xl md:text-6xl text-white mb-4">
            {t("trainers.title").split(" ")[0]}{" "}
            <span className="text-gradient-red-gold">
              {t("trainers.title").split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t("trainers.description")}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center"
        >
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              trainer={trainer}
              isMainTrainer={index === 0}
              orderClass={index === 0 ? "order-first md:order-2" : index === 1 ? "md:order-1" : "md:order-3"}
              cardVariants={cardVariants}
              glareTrigger={glareTriggers[index]}
              t={t}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainersSection;
