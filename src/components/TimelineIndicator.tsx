import React from 'react';
import { motion } from 'framer-motion';

interface TimelineIndicatorProps {
  activeSection: number;
}

const TimelineIndicator: React.FC<TimelineIndicatorProps> = ({ activeSection }) => {
  const sections = [
    'Hero',
    'What Are AI Interns',
    'Assign Tasks',
    'Memory',
    'Chat Delegation',
    'Comparison',
    'Logs',
    'Final CTA'
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30">
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="relative flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className={`h-3 w-3 rounded-full border-2 ${
                index === activeSection
                  ? 'bg-primary border-primary animate-pulse-glow'
                  : 'bg-transparent border-primary/50'
              }`}
              animate={{
                scale: index === activeSection ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineIndicator; 