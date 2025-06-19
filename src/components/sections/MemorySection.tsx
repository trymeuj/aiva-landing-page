import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserX, Bot, Clock, MessageCircle, FileText, Calendar } from 'lucide-react';

const MemorySection: React.FC = () => {
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);
  const memoryItems = [
    { icon: MessageCircle, text: 'Project kickoff meeting notes', date: '2 weeks ago' },
    { icon: FileText, text: 'Client requirements document', date: '1 week ago' },
    { icon: Calendar, text: 'Weekly standup decisions', date: '3 days ago' },
    { icon: Clock, text: 'Last task completion status', date: '1 hour ago' }
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
            When people leave,{' '}
            <span className="text-red-400">knowledge goes</span> with them.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto px-2">
            With AI interns, <span className="text-primary font-semibold">memory stays</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Human Leaving Scenario */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-red-500/30"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <UserX className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-2">Human Intern Leaves</h3>
                <p className="text-sm sm:text-base text-foreground/60">Taking institutional knowledge with them</p>
              </div>

              <motion.div
                className="space-y-3"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 1, 0.4, 0.1] }}
                transition={{ duration: hasAnimatedOnce ? 3 : 8, repeat: Infinity, times: [0, 0.4, 0.6, 0.85, 1] }}
                onAnimationComplete={() => setHasAnimatedOnce(true)}
              >
                {memoryItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-2 sm:p-3 bg-muted/50 rounded-lg"
                    animate={{ 
                      opacity: [1, 1, 1, 0.6, 0.2],
                      x: [0, 0, 0, -8, -15]
                    }}
                    transition={{ 
                      duration: hasAnimatedOnce ? 2 : 6, 
                      delay: index * (hasAnimatedOnce ? 0.15 : 0.3),
                      repeat: Infinity,
                      times: [0, 0.35, 0.5, 0.8, 1]
                    }}
                  >
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/40 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground/40 line-through">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-6 text-center">
                <span className="text-red-400 font-medium text-sm sm:text-base">❌ Knowledge Lost Forever</span>
              </div>
            </div>
          </motion.div>

          {/* AI Intern Continuity */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/30"
                  animate={{ boxShadow: '0 0 30px rgba(35, 97, 235, 0.3)' }}
                >
                  <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">AI Intern Stays</h3>
                <p className="text-sm sm:text-base text-foreground/80">Perfect memory, always accessible</p>
              </div>

              <div className="space-y-3">
                {memoryItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-2 sm:p-3 bg-primary/5 rounded-lg border border-primary/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(35, 97, 235, 0.1)' }}
                  >
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs sm:text-sm text-foreground font-medium block truncate">{item.text}</span>
                      <div className="text-xs text-foreground/60">{item.date}</div>
                    </div>
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full flex-shrink-0"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-primary font-medium text-sm sm:text-base">✅ Perfect Continuity</span>
              </motion.div>

              {/* New Manager Interaction */}
              <motion.div
                className="mt-6 p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/20 shadow-2xl ring-2 ring-primary/40"
                initial={{ opacity: 0, y: 40, scale: 0.9, boxShadow: '0 0 0px rgba(35,97,235,0.0)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1.07, boxShadow: '0 0 32px 4px rgba(35,97,235,0.25)' }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 1 }}
                whileHover={{ scale: 1.12, boxShadow: '0 0 48px 8px rgba(35,97,235,0.35)' }}
              >
                <div className="text-xs sm:text-sm text-foreground/80 mb-2">
                  <strong>New Manager:</strong> "What's the status on the Johnson project?"
                </div>
                <div className="text-xs sm:text-sm text-primary">
                  <strong>AI Intern:</strong> "Here's the complete history and current status..."
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MemorySection; 