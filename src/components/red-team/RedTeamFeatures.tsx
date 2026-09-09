import React from 'react';
import { Target, Users, Network, Shield, Eye, Brain } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Advanced Persistence",
    description: "Simulate sophisticated attackers maintaining long-term access to your systems."
  },
  {
    icon: Users,
    title: "Social Engineering",
    description: "Test human security awareness through targeted phishing and social manipulation."
  },
  {
    icon: Network,
    title: "Infrastructure Testing",
    description: "Evaluate security of network infrastructure against advanced attack techniques."
  },
  {
    icon: Shield,
    title: "Defense Validation",
    description: "Verify effectiveness of security controls and incident response procedures."
  },
  {
    icon: Eye,
    title: "Stealth Operations",
    description: "Assessment of ability to detect sophisticated and stealthy attack techniques."
  },
  {
    icon: Brain,
    title: "Threat Intelligence",
    description: "Simulation based on real-world adversary tactics and techniques."
  }
];

const RedTeamFeatures = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comprehensive Red Team Operations
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our red team services simulate sophisticated cyber attacks to test your security posture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="relative group p-6 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#130423] flex items-center justify-center mb-4 relative group">
                  <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
                  <Icon className="w-6 h-6 text-[#9C27DF] relative z-10" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RedTeamFeatures;