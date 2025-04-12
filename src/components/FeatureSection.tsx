import React from 'react';

// Simple icon components with consistent size and style
const MultipleAgentsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    <path d="M21 21v-2a4 4 0 0 0-3-3.85"></path>
  </svg>
);

const AutonomousIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const CrossAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 3 21 3 21 8"></polyline>
    <line x1="4" y1="20" x2="21" y2="3"></line>
    <polyline points="21 16 21 21 16 21"></polyline>
    <line x1="15" y1="15" x2="21" y2="21"></line>
    <line x1="4" y1="4" x2="9" y2="9"></line>
  </svg>
);

const CollaborationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-white p-7 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.05)] border border-[#EEEEEE] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_8px_12px_rgba(0,0,0,0.08)]">
      <div className="mb-5">
        <Icon style={{ width: '28px', height: '28px' }} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[#333333]">{title}</h3>
      <p className="text-[#666666] text-base">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "Multiple Agent Personalities",
      description: "Create specialized agents for your work, personal life, and everything in between. Be the Manager. They’re Your Team.",
      icon: MultipleAgentsIcon
    },
    {
      title: "Humans or Agents ?",
      description: "Truly Autonomous Agents. No rigid workflows. Just tell the agent what you need — it figures out the best plan and executes it on its own.",
      icon: AutonomousIcon
    },
    {
      title: "Cross-App Superpowers",
      description: "Gmail. Docs. Calendar. ChatGPT. Excel. Whatsapp. Everything works through your agent.",
      icon: CrossAppIcon
    },
    {
      title: "Agents That Talk to Each Other",
      description: "Agents that work like teammates. They sync, collaborate, and run behind the scenes.",
      icon: CollaborationIcon
    }
  ];

  return (
    <section className="w-full py-24 md:py-28 bg-[#F6F6F6]">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#222222]">
          Why this isn't just another AI tool
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 