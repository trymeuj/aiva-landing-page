import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Calendar, CheckCircle } from 'lucide-react';

const AssignTasksSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedText, setTypedText] = useState('');

  const conversation = [
    { type: 'user', text: 'Can you set up weekly reports for our sales data?' },
    { type: 'ai', text: 'Got it. I\'ll create a weekly sales report that pulls from your CRM...' },
    { type: 'ai', text: 'Setting up database connection...' },
    { type: 'ai', text: 'Scheduling weekly automation...' },
    { type: 'ai', text: '✅ Done! Weekly sales reports will be sent every Monday at 9 AM.' }
  ];

  const taskIcons = [
    { icon: MessageSquare, label: 'Understanding' },
    { icon: Database, label: 'Database Setup' },
    { icon: Calendar, label: 'Scheduling' },
    { icon: CheckCircle, label: 'Completed' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % conversation.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentMessage = conversation[currentStep];
    let index = 0;
    setTypedText('');

    const typeTimer = setInterval(() => {
      if (index < currentMessage.text.length) {
        setTypedText(currentMessage.text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 50);

    return () => clearInterval(typeTimer);
  }, [currentStep]);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-sora mb-6">
            Assigning a task doesn't mean{' '}
            <span className="text-primary glow-text">handholding</span>.
          </h2>
          <p className="text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto">
            These interns learn from what you say — and do what's needed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chat Interface */}
          <motion.div
            className="bg-card border border-border rounded-2xl p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 h-80 overflow-hidden">
              {conversation.slice(0, currentStep + 1).map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.5 }}
                >
                  <div
                    className={`max-w-sm px-4 py-2 rounded-xl ${
                      message.type === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {index === currentStep ? (
                      <span className="typing-cursor">{typedText}</span>
                    ) : (
                      message.text
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Task Flow Visualization */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {taskIcons.map((task, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-500 ${
                  index <= Math.min(currentStep, 3)
                    ? 'bg-primary/10 border-primary/30 text-primary'
                    : 'bg-card border-border text-foreground/50'
                }`}
                animate={{
                  scale: index === Math.min(currentStep, 3) ? 1.05 : 1,
                  opacity: index <= Math.min(currentStep, 3) ? 1 : 0.5,
                }}
              >
                <motion.div
                  className={`p-2 rounded-full ${
                    index <= Math.min(currentStep, 3)
                      ? 'bg-primary/20'
                      : 'bg-foreground/10'
                  }`}
                  animate={{
                    rotate: index === Math.min(currentStep, 3) ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <task.icon className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">{task.label}</span>
                {index <= Math.min(currentStep, 3) && (
                  <motion.div
                    className="ml-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AssignTasksSection; 