import React from 'react';
import NewsletterSection from './NewsletterSection';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import ReportSection from './ReportSection';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#000000] pt-24 pb-12 px-4 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000] to-[#000000] opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <NewsletterSection />
        
        <hr className="border-white/10 my-16" />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <FooterLogo />
            <p className="text-gray-400 mt-6 mb-8">
              CWG is a cybersecurity company that provides advanced tools and services for threat detection, vulnerability management, and incident response.
            </p>
            <SocialLinks />
          </div>
          
          <FooterLinks />
        </div>
        
        <ReportSection />
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#9C27DF]/10 via-transparent to-transparent" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#9C27DF]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#7D3FF8]/20 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;