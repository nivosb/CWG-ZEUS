import React from 'react';
import { Code, GitBranch, Shield, Terminal, Users, Workflow } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: "Secure Coding Practices",
    description: "Implementation of secure coding standards and best practices to prevent common vulnerabilities."
  },
  {
    icon: GitBranch,
    title: "Security Gates",
    description: "Integration of security checkpoints throughout the development pipeline."
  },
  {
    icon: Shield,
    title: "Threat Modeling",
    description: "Systematic approach to identifying and addressing security threats during design."
  },
  {
    icon: Terminal,
    title: "Automated Security Testing",
    description: "Implementation of automated security testing tools in CI/CD pipelines."
  },
  {
    icon: Users,
    title: "Developer Training",
    description: "Comprehensive security training programs for development teams."
  },
  {
    icon: Workflow,
    title: "Process Integration",
    description: "Seamless integration of security practices into existing development workflows."
  }
];

const SsdlcFeatures = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comprehensive SSDLC Services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            End-to-end security integration throughout your development lifecycle
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

export default SsdlcFeatures;