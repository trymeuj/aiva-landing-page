import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Folder, Wrench } from 'lucide-react';

// New Card component for static/gradient reveal
const RevealCard = ({
  shortText,
  detailedText,
  icon
}: {
  shortText: string;
  detailedText: string;
  icon: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex items-center justify-center w-full sm:w-60 p-4 h-48 sm:h-56 border border-border rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer
        shadow-lg ${hovered ? 'shadow-2xl shadow-[0_8px_32px_0_rgba(35,97,235,0.15)] scale-105 -translate-y-1' : ''}
        ${hovered ? 'bg-gradient-to-tr from-[#2361eb] via-[#1e293b]/60 to-black' : 'bg-black'}`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-200">
          <div className="text-xl sm:text-2xl mb-2 sm:mb-1">{icon}</div>
          {!hovered ? (
            <div className="font-bold text-sm sm:text-base text-white mb-1 text-center px-2">{shortText}</div>
          ) : (
            <div className="text-white text-xs sm:text-sm text-center font-medium px-2 sm:px-1">{detailedText}</div>
          )}
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    shortText: 'Understands Natural Language',
    detailedText: 'Understands natural instructions. Can reason, plan, and adapt to your needs.',
    icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />, // or emoji: 🧠
  },
  {
    shortText: 'Ever-Evolving Memory',
    detailedText: 'Remembers tasks, their output & forms context over time in its domain.',
    icon: <Folder className="w-6 h-6 sm:w-8 sm:h-8 text-white" />, // or emoji: 🗂️
  },
  {
    shortText: 'Performs Tasks',
    detailedText: 'Performs tasks - be it recurring, ad-hoc, or trigger-based. Just assign any task.',
    icon: <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-white" />, // or emoji: 🛠️
  },
];

const WhatAreAIInternsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="text-4xl sm:text-5xl lg:text-6xl">👤</span>
            <div className="text-center sm:text-left">
              What is an <span className="text-primary glow-text">AI Intern?</span>
            </div>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-2xl mx-auto px-2">
            A fully autonomous teammate that works through chat.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>It remembers what you say, builds workflows, and evolves with you.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 w-full max-w-4xl justify-center items-center">
            {cards.map((card, idx) => (
              <RevealCard key={card.shortText} {...card} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatAreAIInternsSection; 