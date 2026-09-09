import { NavItem } from './types';

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Platform',
    dropdownItems: [
      { label: 'Zeus - Agentic Pentest Platform', href: '/products/agentic-pentest' }
    ]
  },
  {
    label: 'Services',
    dropdownItems: [
      { label: 'Penetration Testing', href: '/services/penetration-testing' },
      { label: 'Cloud Penetration Testing', href: '/services/cloud-penetration-testing' },
      { label: 'AI Penetration Testing', href: '/services/ai-penetration-testing' },
      { label: 'Red Team', href: '/services/red-team' },
      { label: 'SSDLC Consulting', href: '/services/ssdlc-consulting' },
      { label: 'Risk Assessment', href: '/services/risk-assessment' },
      { label: 'Code Review', href: '/services/code-review' },
      { label: 'CISO as a Service', href: '/services/ciso-service' },
      { label: 'Incident Response', href: '/services/incident-response' },
      { label: 'Managed EAS', href: '/services/managed-eas' },
      { label: 'Ransomware Readiness', href: '/services/ransomware-readiness' }
    ]
  },
  {
    label: 'Resources',
    dropdownItems: [
      { label: 'Blog', href: '/blog' }
    ]
  },
  {
    label: 'Company',
    dropdownItems: [
      { label: 'Our Story', href: '/company' },
      { label: 'Our Clients', href: '/clients' },
      { label: 'Careers', href: '/careers' }
    ]
  }
];
