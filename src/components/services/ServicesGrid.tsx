import React from 'react';
import { Shield, Cloud, Sword, Bomb, Bell, Code, Search, FileSearch, Users, AlertCircle, Brain } from 'lucide-react';
import { Bot } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Comprehensive security testing of web applications, mobile apps, and infrastructure to identify vulnerabilities before attackers do.",
    path: "/services/penetration-testing"
  },
  {
    icon: Cloud,
    title: "Cloud Penetration Testing",
    description: "In-depth security assessment of cloud infrastructure, configurations, and services across AWS, Azure, and GCP environments.",
    path: "/services/cloud-penetration-testing"
  },
  {
    icon: Sword,
    title: "Red Team",
    description: "Advanced adversary simulation to test your organization's detection and response capabilities against real-world attack scenarios.",
    path: "/services/red-team"
  },
  {
    icon: Bomb,
    title: "Ransomware Readiness",
    description: "Evaluate and enhance your organization's preparedness against ransomware attacks through simulation and defense testing.",
    path: "/services/ransomware-readiness"
  },
  {
    icon: Bell,
    title: "Managed EAS",
    description: "End-to-end management of your External Attack Surface, providing continuous monitoring and vulnerability assessment.",
    path: "/services/managed-eas"
  },
  {
    icon: Code,
    title: "SSDLC Consulting",
    description: "Expert guidance on implementing secure software development lifecycle practices to build security into your development process.",
    path: "/services/ssdlc-consulting"
  },
  {
    icon: Search,
    title: "Code Review",
    description: "Thorough analysis of source code to identify security vulnerabilities, bugs, and potential improvements in your applications.",
    path: "/services/code-review"
  },
  {
    icon: FileSearch,
    title: "Security Assessment",
    description: "Comprehensive evaluation of your organization's security posture, identifying gaps and providing actionable recommendations.",
    path: "/services/risk-assessment"
  },
  {
    icon: Users,
    title: "CISO as a Service",
    description: "Expert security leadership and guidance to develop and maintain your cybersecurity strategy, compliance, and risk management.",
    path: "/services/ciso-service"
  },
  {
    icon: AlertCircle,
    title: "Incident Response",
    description: "24/7 emergency response and support during cyber incidents with guaranteed SLA, helping organizations recover quickly and effectively.",
    path: "/services/incident-response"
  }
  ,
  {
    icon: Brain,
    title: "AI Penetration Testing",
    description: "Specialized security testing for AI systems, LLMs, and ML pipelines to uncover prompt injection, model theft, adversarial attacks, and data poisoning vulnerabilities.",
    path: "/services/ai-penetration-testing"
  },
  {
    icon: Bot,
    title: "Zeus - Agentic Pentest Platform",
    description: "Autonomous AI agents with human expert oversight delivering continuous, scalable penetration testing - faster, deeper, and more comprehensive than traditional assessments.",
    path: "/products/agentic-pentest"
  }
];

const ServicesGrid: React.FC = () => {
  const navigate = useNavigate();

  const handleExplore = (path: string) => {
    navigate(path);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          onExplore={() => handleExplore(service.path)}
        />
      ))}
    </div>
  );
}

export default ServicesGrid;
