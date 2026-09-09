import React from 'react';
import { FileSearch, Shield, Target, Clipboard, GitBranch, Settings } from 'lucide-react';

const features = [
  {
    icon: FileSearch,
    title: "Threat Assessment",
    description: "Comprehensive identification and analysis of potential security threats and vulnerabilities."
  },
  {
    icon: Shield,
    title: "Control Evaluation",
    description: "Assessment of existing security controls and their effectiveness against threats."
  },
  {
    icon: Target,
    title: "Risk Scoring",
    description: "Quantitative and qualitative risk scoring based on impact and likelihood."
  },
  {
    icon: Clipboard,
    title: "Compliance Mapping",
    description: "Alignment with industry standards including ISO 27001, NIST, and CIS frameworks."
  },
  {
    icon: GitBranch,
    title: "Gap Analysis",
    description: "Identification of security gaps and recommendations for improvement."
  },
  {
    icon: Settings,
    title: "Remediation Planning",
    description: "Detailed action plans for addressing identified risks and vulnerabilities."
  }
];

const RiskAssessmentFeatures: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comprehensive Risk Assessment Services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our risk assessment methodology covers all aspects of your security posture
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

export default RiskAssessmentFeatures;