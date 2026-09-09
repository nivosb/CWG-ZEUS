import React from 'react';
import { Zap, Heart, Book, Globe, Coffee, Users } from 'lucide-react';

const perks = [
  {
    icon: Zap,
    title: "Cutting-edge Projects",
    description: "Work on challenging security projects using the latest technologies and methodologies."
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health insurance coverage for you and your family."
  },
  {
    icon: Book,
    title: "Learning & Development",
    description: "Continuous learning opportunities and certification support."
  },
  {
    icon: Globe,
    title: "Remote Work Options",
    description: "Flexible work arrangements with hybrid and remote possibilities."
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours and generous vacation policy."
  },
  {
    icon: Users,
    title: "Great Team Culture",
    description: "Collaborative environment with talented security professionals."
  }
];

const CareersPerks: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Join CWG?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We offer more than just a job - join a team that values innovation, growth, and work-life balance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <div 
                key={index}
                className="relative group p-6 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#130423] flex items-center justify-center mb-4 relative group">
                  <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
                  <Icon className="w-6 h-6 text-[#9C27DF] relative z-10" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{perk.title}</h3>
                <p className="text-gray-400">{perk.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareersPerks;