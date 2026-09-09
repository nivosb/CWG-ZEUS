import React, { useState, useRef, useEffect } from 'react';
import { Zap, ArrowRight, Shield, Cloud, Sword, FileSearch, Bell, Code, CheckCircle, Award, MapPin, Lock, FileCheck } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { Link } from 'react-router-dom';
import FloatingOrb from '../components/FloatingOrb';
import ContactModal from '../components/modals/ContactModal';
import { clientLogos } from '../components/clients/clientLogos';

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Comprehensive security testing of web applications, mobile apps, and infrastructure to identify vulnerabilities before attackers do.",
    benefits: ["OWASP Top 10 Coverage", "Detailed Reports", "Remediation Guidance"]
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "In-depth security assessment of cloud environments across AWS, Azure, and Google Cloud Platform to ensure robust cloud infrastructure.",
    benefits: ["Multi-Cloud Support", "Configuration Review", "Security Hardening"]
  },
  {
    icon: Sword,
    title: "Red Team Operations",
    description: "Advanced adversary simulation to test your organization's detection and response capabilities against sophisticated threats.",
    benefits: ["Real-world Scenarios", "Stealth Operations", "Defense Validation"]
  },
  {
    icon: FileSearch,
    title: "Risk Assessment",
    description: "Comprehensive evaluation of your organization's security posture to identify and address potential risks before they're exploited.",
    benefits: ["Threat Analysis", "Compliance Checks", "Strategic Planning"]
  },
  {
    icon: Bell,
    title: "Managed EAS",
    description: "Continuous monitoring and management of your external attack surface to protect against emerging threats and vulnerabilities.",
    benefits: ["24/7 Monitoring", "Threat Detection", "Incident Response"]
  },
  {
    icon: Code,
    title: "Secure SDLC",
    description: "Integration of security practices throughout your development lifecycle to build secure applications from the ground up.",
    benefits: ["Security Gates", "Code Review", "Developer Training"]
  }
];

const complianceStandards = [
  {
    icon: Lock,
    title: "SOC 2",
    description: "Certified compliance with SOC 2 Type II requirements for security, availability, and confidentiality."
  },
  {
    icon: Shield,
    title: "ISO 27001",
    description: "Adherence to international standards for information security management systems."
  },
  {
    icon: FileCheck,
    title: "GDPR",
    description: "Full compliance with EU data protection and privacy regulations."
  },
  {
    icon: Award,
    title: "HIPAA",
    description: "Compliance with healthcare data security and privacy requirements."
  }
];

const GOOGLE_SCRIPT_URL = new URL('https://script.google.com/macros/s/AKfycbzSsmcGVZ3gQhSti0_VBbxCSKqK0zNteAntfQYBFue3bToM0H3H3WFhLaNoSVqbsGZQeg/exec').toString();

function LandingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const mainCTARef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyButton(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    if (mainCTARef.current) {
      observer.observe(mainCTARef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleConsultationClick = () => {
    // @ts-ignore - gtag_report_conversion is added via script tag
    window.gtag_report_conversion();
    scrollToForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // @ts-ignore - gtag_report_conversion is added via script tag
      window.gtag_report_conversion();
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response) {
        // Redirect to thank you page after successful submission
        window.location.href = '/thank-you';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('consultation-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0d0318] via-[#0d0318] to-black">
      <FloatingOrb
        color="#9C2Fdf"
        size="300px"
        position="-top-20 -left-20"
        blur="120px"
      />
      <FloatingOrb
        color="#9C2Fdf"
        size="250px"
        position="top-1/5 -right-20"
        blur="100px"
      />
      <FloatingOrb
        color="#5e17eb"
        size="200px"
        position="bottom-20 left-20"
        blur="80px"
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-12 sm:pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Link to="/" className="inline-block mb-4">
              <h1 className="text-4xl text-white font-azonix hover:text-[#9C27DF] transition-colors">
                CWG
              </h1>
            </Link>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Cybersecurity Solutions for Your Business
            </h1>

            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 rounded-full backdrop-blur-sm mb-8">
              <MapPin className="w-4 h-4 text-[#9C27DF] mr-2" />
              <span className="text-white/80 text-sm">Based in Tel Aviv, Israel</span>
              <ReactCountryFlag
                countryCode="IL"
                svg
                className="ml-2"
                style={{
                  width: '1.2em',
                  height: '1.2em'
                }}
              />
            </div>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              CWG, led by elite cyber experts, provides penetration testing, cloud security, red teaming, risk assessments, and more to protect your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                ref={mainCTARef}
                onClick={handleConsultationClick}
                className="main-cta px-8 py-4 text-lg bg-gradient-to-r from-[#22c55e] to-[#22c55e] rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Schedule Your Free Consultation
              </button>
              <a
                href="#services"
                className="px-8 py-4 text-lg border border-white/10 rounded-full text-white font-semibold hover:bg-white/5 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-400">
                Join hundreds of organizations that trust us with their security
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {clientLogos.slice(0, 12).map((client, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <img
                    src={client.imageUrl}
                    alt={client.name}
                    className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Compliance & Standards
              </h2>
              <p className="text-gray-400">
                Our services adhere to international security standards and compliance requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => {
                const Icon = standard.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#130423] flex items-center justify-center mb-4 relative group">
                      <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
                      <Icon className="w-6 h-6 text-[#9C27DF] relative z-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{standard.title}</h3>
                    <p className="text-gray-400 text-sm">{standard.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Comprehensive Security Solutions
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Our range of cybersecurity services helps organizations identify, protect against, and recover from security threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="relative group p-6 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#130423] flex items-center justify-center mb-4 relative group">
                      <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
                      <Icon className="w-6 h-6 text-[#9C27DF] relative z-10" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#9C27DF] mr-2" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="consultation-form" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Get Started with a Free Consultation
              </h2>
              <p className="text-gray-400">
                Fill out the form below and our security experts will get in touch with you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center p-8 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/10">
                <CheckCircle className="w-16 h-16 text-[#9C27DF] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-400 mb-6">
                  We've received your request and will contact you shortly to discuss your security needs.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF] [&>option]:text-black"
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-gradient-to-r from-[#22c55e] to-[#22c55e] rounded-full text-white font-semibold transition-opacity inline-flex items-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Mobile sticky button */}
        <div 
          className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
            showStickyButton ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          } ${isModalOpen ? 'pointer-events-none' : ''}`}
        >
          <button
            onClick={handleConsultationClick}
            className="w-full px-6 py-3 bg-gradient-to-r from-[#22c55e] to-[#22c55e] rounded-full text-white font-semibold shadow-lg flex items-center justify-center gap-2 text-base"
          >
            <Zap className="w-4 h-4" />
            Schedule Your Free Consultation
          </button>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default LandingPage;