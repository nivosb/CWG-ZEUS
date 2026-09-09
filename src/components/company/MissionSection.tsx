import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower organizations with cutting-edge cybersecurity solutions that protect their assets, data, and reputation in an increasingly complex threat landscape."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the global leader in innovative cybersecurity services, setting the standard for excellence in protecting organizations against evolving cyber threats."
  },
  {
    icon: Heart,
    title: "Values",
    description: "Excellence, integrity, innovation, and client success drive everything we do. We believe in building lasting partnerships and delivering measurable security outcomes."
  }
];

const MissionSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="relative group p-6 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#130423] flex items-center justify-center mb-4 relative group">
                  <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
                  <Icon className="w-6 h-6 text-[#9C27DF] relative z-10" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;