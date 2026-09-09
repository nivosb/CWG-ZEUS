import React from 'react';
import { Users, Shield, FileText, Target, Settings, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Security Strategy",
    description: "Development and implementation of comprehensive security strategies aligned with business objectives."
  },
  {
    icon: Target,
    title: "Risk Management",
    description: "Identification, assessment, and mitigation of security risks across your organization."
  },
  {
    icon: FileText,
    title: "Compliance Management",
    description: "Ensuring adherence to regulatory requirements and industry standards (GDPR, HIPAA, PCI DSS, etc.)."
  },
  {
    icon: Settings,
    title: "Program Development",
    description: "Creation and maintenance of security policies, procedures, and controls."
  },
  {
    icon: Users,
    title: "Security Leadership",
    description: "Executive-level guidance and board reporting on security matters and initiatives."
  },
  {
    icon: Lock,
    title: "Incident Response",
    description: "Development and oversight of incident response plans and security operations."
  }
];

const CisoFeatures: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comprehensive Security Leadership
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Expert security leadership tailored to your organization's needs
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

export default CisoFeatures;