import React from 'react';
import { Search, Target, Sword, Shield, FileText } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Reconnaissance",
    description: "Gathering intelligence about the target organization and identifying potential attack vectors."
  },
  {
    icon: Target,
    title: "Planning",
    description: "Developing sophisticated attack scenarios based on gathered intelligence and objectives."
  },
  {
    icon: Sword,
    title: "Execution",
    description: "Conducting stealthy attacks using advanced adversary tactics and techniques."
  },
  {
    icon: Shield,
    title: "Assessment",
    description: "Evaluating security controls effectiveness and incident response capabilities."
  },
  {
    icon: FileText,
    title: "Reporting",
    description: "Detailed documentation of findings with strategic improvement recommendations."
  }
];

const RedTeamProcess = () => {
  return (
    <section className="py-24 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Red Team Engagement Process
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our systematic approach to simulating real-world cyber attacks
          </p>
        </div>

        <div className="relative">
          {/* Process line - Desktop */}
          <div className="hidden md:block">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#9C27DF]/20 to-transparent" />
            <div className="absolute top-8 left-0 right-0 h-px bg-[#9C27DF]/10" />
          </div>

          {/* Process line - Mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#9C27DF]/20 to-transparent" />
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-[#9C27DF]/10" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col md:items-center text-left md:text-center pl-24 md:pl-0">
                  {/* Connection dot */}
                  <div className="absolute left-8 md:left-1/2 top-8 md:-translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-2 h-2 rounded-full bg-[#9C27DF]" />
                    <div className="absolute -inset-2 bg-[#9C27DF] opacity-40 blur-sm rounded-full animate-pulse" />
                  </div>

                  {/* Icon circle */}
                  <div className="absolute left-16 md:left-1/2 md:transform md:-translate-x-1/2 top-4">
                    <div className="w-16 h-16 rounded-full bg-[#130423] flex items-center justify-center relative z-10">
                      <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full" />
                      <Icon className="w-8 h-8 text-[#9C27DF] relative" />
                    </div>
                  </div>
                  
                  <div className="mt-24 md:mt-28">
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedTeamProcess;