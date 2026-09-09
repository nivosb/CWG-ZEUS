import React from 'react';
import { Shield, Target, Users } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-[#130423] flex items-center justify-center mb-3 relative group">
      <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
      <div className="relative text-[#9C27DF]">{icon}</div>
    </div>
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-gray-400 text-sm text-center">{label}</div>
  </div>
);

const StatsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
      <StatItem
        icon={<Shield className="w-6 h-6" />}
        value="3000+"
        label="Security Projects Completed"
      />
      <StatItem
        icon={<Target className="w-6 h-6" />}
        value="10000+"
        label="Vulnerabilities Found"
      />
      <StatItem
        icon={<Users className="w-6 h-6" />}
        value="300+"
        label="Active Clients"
      />
    </div>
  );
};

export default StatsSection;