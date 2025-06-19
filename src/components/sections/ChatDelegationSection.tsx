import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle, Settings, Zap, User } from 'lucide-react';

const ChatDelegationSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const conversation = [
    { type: 'user', text: 'We need to improve our customer response time' },
    { type: 'ai', text: 'I can help with that. Let me analyze your current support workflow...' },
    { type: 'ai', text: 'I found we can automate initial responses and route urgent tickets faster.' },
    { type: 'ai', text: 'Should I set up automated responses for common questions and create priority routing?' },
    { type: 'user', text: 'Yes, that sounds perfect' },
    { type: 'ai', text: 'Great! I&apos;ll implement this solution right away.' }
  ];

  const tools = [
    { icon: MessageSquare, name: 'Auto-responder', status: 'active' },
    { icon: Settings, name: 'Priority Router', status: 'configuring' },
    { icon: Zap, name: 'Workflow Optimizer', status: 'pending' },
    { icon: CheckCircle, name: 'Testing Suite', status: 'ready' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % conversation.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [conversation.length]);

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
            You don&apos;t give teammates a{' '}
            <span className="text-foreground/50 line-through">checklist</span>.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto px-2">
            You have a <span className="text-primary font-semibold">conversation</span>. Then it gets done.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Chat Interface */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-4 sm:p-6 relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* AI Intern Indicator */}
            <motion.div
              className="absolute -top-3 left-4 bg-primary px-2 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center space-x-2 text-xs sm:text-sm font-medium text-white shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Morgan AI - Customer Success</span>
              <span className="sm:hidden">Morgan AI</span>
            </motion.div>

            <div className="space-y-3 sm:space-y-4 h-80 sm:h-96 overflow-y-auto mt-4">
              {conversation.slice(0, currentStep + 1).map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: index * 0.5,
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }}
                >
                  <div
                    className={`max-w-xs sm:max-w-sm px-3 py-2 sm:px-4 sm:py-3 rounded-xl text-sm sm:text-base ${
                      message.type === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground border border-border'
                    }`}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.5 + 0.2 }}
                    >
                      {message.text}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>

            {currentStep === conversation.length - 1 && (
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="text-primary font-medium text-sm sm:text-base">✅ Approved - Implementing now...</span>
              </motion.div>
            )}
          </motion.div>

          {/* Tools Implementation */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 px-2">Background Implementation in Progress</h3>
            
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl border transition-all duration-500 ${
                  index <= currentStep - 4
                    ? 'bg-primary/10 border-primary/30'
                    : 'bg-card border-border opacity-50'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: index <= currentStep - 4 ? 1 : 0.5,
                  x: 0,
                  scale: index === currentStep - 4 ? 1.05 : 1
                }}
                transition={{ delay: index * 0.3 }}
              >
                <motion.div
                  className={`p-2 rounded-full ${
                    index <= currentStep - 4
                      ? 'bg-primary/20 text-primary'
                      : 'bg-foreground/10 text-foreground/50'
                  }`}
                  animate={{
                    rotate: index === currentStep - 4 ? [0, 360] : 0,
                  }}
                  transition={{ duration: 1, repeat: index === currentStep - 4 ? Infinity : 0 }}
                >
                  <tool.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                
                <div className="flex-1">
                  <span className="font-medium text-sm sm:text-base">{tool.name}</span>
                  <div className="text-xs sm:text-sm text-foreground/60 capitalize">{tool.status}</div>
                </div>

                {index <= currentStep - 4 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  </motion.div>
                )}
              </motion.div>
            ))}

            {currentStep >= 4 && (
              <motion.div
                className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span className="text-green-400 font-medium text-sm sm:text-base">
                    Customer response time improved by 60%
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatDelegationSection; 