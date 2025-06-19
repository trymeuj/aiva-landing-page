import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Clock, User, Settings, Database, Mail, CheckCircle } from 'lucide-react';

const LogsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Activities', count: 24 },
    { id: 'tasks', label: 'Tasks', count: 12 },
    { id: 'communications', label: 'Communications', count: 8 },
    { id: 'integrations', label: 'Integrations', count: 4 }
  ];

  const logs = [
    {
      id: 1,
      type: 'task',
      icon: CheckCircle,
      title: 'Sarah AI completed weekly sales report',
      description: 'Generated and sent sales analytics to stakeholders',
      time: '2 minutes ago',
      intern: 'Sarah AI',
      status: 'completed',
      details: 'Processed 1,247 records, identified 3 key trends'
    },
    {
      id: 2,
      type: 'communication',
      icon: Mail,
      title: 'Alex AI sent follow-up emails',
      description: 'Automated follow-up sequence for 15 prospects',
      time: '15 minutes ago',
      intern: 'Alex AI',
      status: 'completed',
      details: 'Personalized messages based on interaction history'
    },
    {
      id: 3,
      type: 'integration',
      icon: Database,
      title: 'Morgan AI synced CRM data',
      description: 'Updated customer records from multiple sources',
      time: '1 hour ago',
      intern: 'Morgan AI',
      status: 'completed',
      details: 'Synchronized 342 records, resolved 12 conflicts'
    },
    {
      id: 4,
      type: 'task',
      icon: Settings,
      title: 'Jordan AI optimized workflow automation',
      description: 'Improved response time by 35%',
      time: '3 hours ago',
      intern: 'Jordan AI',
      status: 'completed',
      details: 'Analyzed 500+ interactions, implemented 3 optimizations'
    }
  ];

  const filteredLogs = activeFilter === 'all' 
    ? logs 
    : logs.filter(log => {
        if (activeFilter === 'tasks') return log.type === 'task';
        if (activeFilter === 'communications') return log.type === 'communication';
        if (activeFilter === 'integrations') return log.type === 'integration';
        return true;
      });

  const highlightAgentName = (title: string, agent: string) => {
    const parts = title.split(agent);
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="text-primary">{agent}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

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
            See everything they've done.{' '}
            <span className="text-primary glow-text">Ask them why</span>.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto px-2">
            Complete transparency into every action, decision, and outcome.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full border transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-card text-foreground border-border hover:border-primary/50'
                }`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">{filter.label}</span>
                <span className={`text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full ${
                  activeFilter === filter.id
                    ? 'bg-white/20'
                    : 'bg-primary/20 text-primary'
                }`}>
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-primary/30 rounded-full hidden sm:block" />

            <div className="space-y-4 sm:space-y-6">
              {filteredLogs.map((log, index) => (
                <motion.div
                  key={log.id}
                  className="relative flex items-start space-x-4 sm:space-x-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 border-2 sm:border-4 border-primary/30 rounded-full flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: '0 0 20px rgba(35, 97, 235, 0.3)' 
                    }}
                  >
                    <log.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                  </motion.div>

                  {/* Log Content */}
                  <motion.div
                    className="flex-1 bg-card border border-border rounded-2xl p-4 sm:p-6 card-hover min-w-0"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                      <div className="min-w-0 flex-1 sm:pr-4">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                          {highlightAgentName(log.title, log.intern)}
                        </h3>
                        <p className="text-sm sm:text-base text-foreground/70">{log.description}</p>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-foreground/60 mb-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{log.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-primary">
                          <User className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{log.intern}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                      <div className="text-xs sm:text-sm text-foreground/60 flex-1">
                        {log.details}
                      </div>
                      <motion.div
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm font-medium self-start sm:self-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {log.status}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { label: 'Tasks Completed', value: '1,247', change: '+23%' },
              { label: 'Response Time', value: '1.2s', change: '-65%' },
              { label: 'Success Rate', value: '99.8%', change: '+12%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(35, 97, 235, 0.1)' }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-foreground/70 mb-2">{stat.label}</div>
                <div className="text-green-400 text-sm font-medium">{stat.change}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogsSection; 