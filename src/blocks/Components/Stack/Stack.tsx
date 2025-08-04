/*
  Installed from https://reactbits.dev/ts/tailwind/
*/

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useCallback, useMemo } from "react";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]); // Reduced rotation range
  const rotateY = useTransform(x, [-100, 100], [-30, 30]); // Reduced rotation range

  const handleDragEnd = useCallback((_: never, info: { offset: { x: number; y: number } }) => {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }, [sensitivity, onSendToBack, x, y]);

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ 
        x, 
        y, 
        rotateX, 
        rotateY,
        transform: 'translateZ(0)', // Force hardware acceleration
      }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.4} // Reduced elasticity for smoother performance
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: any[];
  animationConfig?: { stiffness: number; damping: number };
  renderCard?: (card: any) => React.ReactNode;
}

function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  renderCard,
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          {
            id: 1,
            img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
          },
          {
            id: 2,
            img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
          },
          {
            id: 3,
            img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
          },
          {
            id: 4,
            img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
          },
        ]
  );

  const sendToBack = useCallback((id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  }, []);

  // Memoize transition configuration for better performance
  const springTransition = useMemo(() => ({
    type: "spring" as const,
    stiffness: animationConfig.stiffness,
    damping: animationConfig.damping,
  }), [animationConfig.stiffness, animationConfig.damping]);

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
        transform: 'translateZ(0)', // Hardware acceleration
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-2xl overflow-hidden border-4 border-white bg-white/5"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={springTransition}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                overflow: 'visible',
                transform: 'translateZ(0)', // Hardware acceleration
              }}
            >
              {renderCard ? renderCard(card) : (
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

export default Stack;
