import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      <div className="container mx-auto relative z-10 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Centered Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* SVG Shiny Border Pill */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <svg
                width="auto"
                height="56"
                viewBox="0 0 320 56"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
              >
                <rect
                  x="4" y="4" width="312" height="48" rx="24"
                  fill="none"
                  stroke="#2361eb33"
                  strokeWidth="2"
                />
                <rect
                  x="4" y="4" width="312" height="48" rx="24"
                  fill="none"
                  stroke="url(#shiny-gradient)"
                  strokeWidth="4"
                  strokeDasharray="235 150"
                  strokeDashoffset="0"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-460"
                    dur="3s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0;1"
                    keySplines="0.42 0 0.58 1"  
                  />
                </rect>
                <defs>
                  <linearGradient id="shiny-gradient" x1="0" y1="0" x2="320" y2="56" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0.2" />
                    <stop offset="10%" stopColor="#2361eb" stopOpacity="0.2" />
                    <stop offset="30%" stopColor="#2361eb" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#2361eb" stopOpacity="1" />
                    <stop offset="70%" stopColor="#2361eb" stopOpacity="0.8" />
                    <stop offset="90%" stopColor="#2361eb" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
              <motion.div
                className="pill-content inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 py-2 sm:px-4 sm:py-2 mx-auto"
                style={{ position: 'relative', zIndex: 2, minHeight: 48, minWidth: 120 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap">Meet Your New Teammates</span>
              </motion.div>
            </div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sora leading-tight px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              You've hired{' '}
              <span className="text-primary glow-text">humans</span>{' '}before.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-xl lg:text-2xl text-foreground/80 leading-relaxed px-2 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Now meet your first{' '}
              <span className="text-primary font-semibold">AI intern</span>.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              They remember, execute, evolve — and never leave.
            </motion.p>

            <motion.button
              className="group bg-primary hover:bg-primary/90 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Build Your First Intern</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 