import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FinalCTASection: React.FC = () => {
  const interns = [
    { name: 'Sarah', role: 'Data Analyst', emoji: '📊', x: 20, y: 30 },
    { name: 'Alex', role: 'Marketing', emoji: '📈', x: 70, y: 20 },
    { name: 'Morgan', role: 'Customer Success', emoji: '💬', x: 15, y: 70 },
    { name: 'Jordan', role: 'Operations', emoji: '⚙️', x: 80, y: 60 },
    { name: 'Casey', role: 'Content', emoji: '✍️', x: 50, y: 80 },
    { name: 'Riley', role: 'Research', emoji: '🔍', x: 85, y: 25 }
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden constellation">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-primary font-medium text-sm sm:text-base">The Future is Here</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sora leading-tight mb-6 sm:mb-8 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            The future of work isn&apos;t{' '}
            <span className="text-foreground/50">more humans</span> —
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            It&apos;s <span className="text-primary glow-text">smarter teammates</span>.
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Build your AI team today and experience the difference of teammates who never forget, never leave, and always deliver.
          </motion.p>

          <div className="flex justify-center">
            <Link href="/waitlist">
              <motion.div
                className="group bg-primary hover:bg-primary/90 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Floating AI Interns Constellation */}
        <div className="relative h-64 sm:h-80 lg:h-[500px]">
          {interns.map((intern, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: `${intern.x}%`, top: `${intern.y}%` }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1 + index * 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 20
              }}
            >
              <motion.div
                className="relative group cursor-pointer"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                whileHover={{ scale: 1.2, z: 10 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-lg sm:text-2xl lg:text-3xl">{intern.emoji}</span>
                </div>
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-2 py-1 sm:px-3 sm:py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="text-xs sm:text-sm font-medium text-foreground">{intern.name}</div>
                  <div className="text-xs text-foreground/60">{intern.role}</div>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ 
                    boxShadow: [
                      '0 0 15px rgba(35, 97, 235, 0.3)',
                      '0 0 25px rgba(35, 97, 235, 0.5)',
                      '0 0 15px rgba(35, 97, 235, 0.3)'
                    ]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Connecting Lines - Hidden on mobile for better performance */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block">
            {interns.map((intern, index) => {
              if (index === interns.length - 1) return null;
              const nextIntern = interns[index + 1];
              return (
                <motion.line
                  key={index}
                  x1={`${intern.x}%`}
                  y1={`${intern.y}%`}
                  x2={`${nextIntern.x}%`}
                  y2={`${nextIntern.y}%`}
                  stroke="rgba(35, 97, 235, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2 + index * 0.3, duration: 1 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-foreground/60 mb-4 text-sm sm:text-base px-2">
            Be the first to experience the future of work with AI interns
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm text-foreground/40">
            <span>✓ No multi-step onboarding</span>
            <span>✓ Hire a new intern in seconds</span>
            <span>✓ Assign tasks in seconds</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection; 