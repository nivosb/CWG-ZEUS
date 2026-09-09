import React from 'react';
import { Radar, Search, AlertTriangle, Shield, Bell, FileText } from 'lucide-react';

const features = [
  {
    icon: Radar,
    title: "Asset Discovery",
    description: "Continuous discovery and monitoring of all internet-facing assets, domains, and services."
  },
  {
    icon: Search,
    title: "Vulnerability Scanning",
    description: "Automated scanning and assessment of vulnerabilities across your external attack surface."
  },
  {
    icon: AlertTriangle,
    title: "Risk Prioritization",
    description: "Intelligent risk scoring and prioritization of vulnerabilities based on potential impact."
  },
  {
    icon: Shield,
    title: "Threat Detection",
    description: "Real-time detection of potential threats and suspicious activities targeting your assets."
  },
  {
    icon: Bell,
    title: "Alert Management",
    description: "Customizable alerts and notifications for immediate response to security incidents."
  },
  {
    icon: FileText,
    title: "Compliance Reporting",
    description: "Comprehensive reporting for regulatory compliance and security posture assessment."
  }
];

const EasFeatures = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comprehensive EAS Management
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            End-to-end visibility and protection of your external attack surface
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

export default EasFeatures;