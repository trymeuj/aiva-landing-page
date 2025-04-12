import React from 'react';

// Simple icon components - now using solid black for consistency
const MultipleAgentsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    <path d="M21 21v-2a4 4 0 0 0-3-3.85"></path>
  </svg>
);

const AutonomousIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const CrossAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 3 21 3 21 8"></polyline>
    <line x1="4" y1="20" x2="21" y2="3"></line>
    <polyline points="21 16 21 21 16 21"></polyline>
    <line x1="15" y1="15" x2="21" y2="21"></line>
    <line x1="4" y1="4" x2="9" y2="9"></line>
  </svg>
);

const CollaborationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

// Feature Card Component
const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-card border border-[#EEEEEE] card-hover">
      <div className="w-14 h-14 flex items-center justify-center mb-6 text-foreground">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "Multiple Agent Personalities",
      description: "Create specialized agents for your work, personal life, and everything in between. Each one acts and speaks differently — like having a team, not just a bot.",
      icon: MultipleAgentsIcon
    },
    {
      title: "Truly Autonomous Agents",
      description: "No rigid workflows. Just tell the agent what you need — it figures out the best plan and executes it on its own.",
      icon: AutonomousIcon
    },
    {
      title: "Cross-App Superpowers",
      description: "Read your emails, schedule meetings, send texts, manage docs — all in one place, across all your tools and services.",
      icon: CrossAppIcon
    },
    {
      title: "Agents That Talk to Each Other",
      description: "Agents collaborate behind the scenes. If tasks overlap or depend on each other, they coordinate — so nothing slips through the cracks.",
      icon: CollaborationIcon
    }
  ];

  return (
    <section className="w-full max-w-content mx-auto px-6 py-section-mobile md:py-section">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Why this isn't just another AI tool
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection; 