import React from 'react';
import { Clock, Shield, Zap, Users, Phone, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency response team ready to assist with cyber incidents at any time."
  },
  {
    icon: Shield,
    title: "Rapid Response",
    description: "Guaranteed response times with defined SLAs to ensure quick incident containment."
  },
  {
    icon: Zap,
    title: "Immediate Action",
    description: "Swift deployment of incident response procedures to minimize damage and data loss."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned security professionals with extensive incident handling experience."
  },
  {
    icon: Phone,
    title: "Direct Support",
    description: "Dedicated emergency hotline and communication channels for urgent assistance."
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Detailed incident documentation and post-mortem analysis for compliance and improvement."
  }
];

const IncidentResponseFeatures = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comprehensive Incident Response
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Professional incident response services with guaranteed response times
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

export default IncidentResponseFeatures;