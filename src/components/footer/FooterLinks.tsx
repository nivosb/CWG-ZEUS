import React from 'react';

const footerLinks = {
  'Services': [
    'Penetration Testing (Web, Mobile & Infrastructure)',
    'Cloud Penetration Testing',
    'Red Team',
    'SSDLC Consulting',
    'Code Review',
    'Security Assessment',
    'Social Engineering',
    'Ransomware Readiness',
    'Managed EAS (Managed External Attack Surface)'
  ],
  'About Us': [
    'Company',
    'Leadership'
  ]
};

const FooterLinks: React.FC = () => {
  return (
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(footerLinks).map(([category, links]) => (
        <div key={category}>
          <h3 className="text-white font-semibold mb-6">{category}</h3>
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;