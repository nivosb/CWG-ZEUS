import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-xl rounded-full" />
        <div className="w-16 h-16 rounded-full bg-[#130423] border border-[#9C27DF]/30 flex items-center justify-center relative z-10">
          <Icon className="w-8 h-8 text-[#9C27DF]" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default ProcessStep;