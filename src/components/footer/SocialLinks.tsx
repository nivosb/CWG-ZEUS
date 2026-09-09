import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/cyberwall-global/' },
  { Icon: Twitter, href: '#' },
  { Icon: Facebook, href: '#' },
  { Icon: Instagram, href: '#' }
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <Icon className="w-5 h-5 text-white" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;