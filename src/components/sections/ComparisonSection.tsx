import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Clock, Brain, Users, Zap } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      category: 'Onboarding',
      human: { text: 'Needs onboarding', icon: Clock, negative: true },
      ai: { text: 'Learns from tasks', icon: Brain, negative: false }
    },
    {
      category: 'Availability',
      human: { text: 'Leaves company', icon: Users, negative: true },
      ai: { text: 'Always available', icon: Zap, negative: false }
    },
    {
      category: 'Memory',
      human: { text: 'Forgets details', icon: X, negative: true },
      ai: { text: 'Has perfect memory', icon: Check, negative: false }
    },
    {
      category: 'Consistency',
      human: { text: 'Variable performance', icon: X, negative: true },
      ai: { text: 'Consistent execution', icon: Check, negative: false }
    },
    {
      category: 'Scalability',
      human: { text: 'Limited capacity', icon: X, negative: true },
      ai: { text: 'Infinite scaling', icon: Check, negative: false }
    }
  ];

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-4 sm:mb-6 px-2">
            The <span className="text-primary glow-text">comparison</span> is clear
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto px-2">
            Side by side, the advantages become obvious
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-3 sm:p-6 text-center">
                <h3 className="text-sm sm:text-lg font-semibold text-foreground/70">Category</h3>
              </div>
              <div className="p-3 sm:p-6 text-center border-l border-border">
                <h3 className="text-sm sm:text-lg font-semibold text-foreground/70">Human Intern</h3>
              </div>
              <div className="p-3 sm:p-6 text-center border-l border-border">
                <h3 className="text-sm sm:text-lg font-semibold text-primary">AI Intern</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 border-t border-border hover:bg-muted/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-3 sm:p-6 flex items-center justify-center">
                  <span className="font-medium text-foreground text-xs sm:text-base text-center">{comparison.category}</span>
                </div>
                
                <div className="p-3 sm:p-6 border-l border-border flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3">
                  <motion.div
                    className="p-1.5 sm:p-2 rounded-full bg-red-500/20 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <comparison.human.icon className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                  </motion.div>
                  <span className="text-foreground/70 text-xs sm:text-base text-center">{comparison.human.text}</span>
                </div>
                
                <motion.div
                  className="p-3 sm:p-6 border-l border-border flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 bg-primary/5"
                  whileHover={{ backgroundColor: 'rgba(35, 97, 235, 0.1)' }}
                >
                  <motion.div
                    className="p-1.5 sm:p-2 rounded-full bg-primary/20 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: '0 0 10px rgba(35, 97, 235, 0.3)' 
                    }}
                  >
                    <comparison.ai.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </motion.div>
                  <span className="text-primary font-medium text-xs sm:text-base text-center">{comparison.ai.text}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            className="mt-8 sm:mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                The Choice is Clear
              </h3>
              <p className="text-base sm:text-lg text-foreground/80 mb-4 sm:mb-6 px-2">
                AI interns deliver consistent, scalable, and reliable performance without the traditional limitations of human resources.
              </p>
              <motion.button
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience the Difference
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection; 