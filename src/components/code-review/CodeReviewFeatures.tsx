import React from 'react';
import { Code, Search, Shield, GitBranch, Terminal, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: "Manual Code Review",
    description: "Expert analysis of code by experienced security professionals to identify complex vulnerabilities."
  },
  {
    icon: Search,
    title: "Automated Scanning",
    description: "Advanced tools and techniques to detect common security issues and coding patterns."
  },
  {
    icon: Shield,
    title: "Security Assessment",
    description: "Comprehensive evaluation of security controls and potential vulnerabilities in the code."
  },
  {
    icon: GitBranch,
    title: "Best Practices",
    description: "Recommendations for implementing secure coding practices and industry standards."
  },
  {
    icon: Terminal,
    title: "Remediation Guidance",
    description: "Detailed guidance on fixing identified vulnerabilities and improving code security."
  },
  {
    icon: FileCheck,
    title: "Compliance Review",
    description: "Verification of code compliance with security standards and regulations."
  }
];

const CodeReviewFeatures: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comprehensive Code Review Services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our expert code review services help identify and fix security vulnerabilities before they can be exploited
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

export default CodeReviewFeatures;