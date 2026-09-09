import React from 'react';
import { Shield, Users, Award, Zap } from 'lucide-react';

const stats = [
  {
    icon: Shield,
    value: "10+",
    label: "Years of Experience"
  },
  {
    icon: Users,
    value: "300+",
    label: "Active Clients"
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards"
  },
  {
    icon: Zap,
    value: "10000+",
    label: "Vulnerabilities Found"
  }
];

const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Industry-Leading Expertise
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of organizations strengthen their security posture and protect against cyber threats.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#130423] flex items-center justify-center mb-4 relative group">
                  <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full" />
                  <Icon className="w-8 h-8 text-[#9C27DF] relative z-10" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;