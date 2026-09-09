import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import FloatingOrb from '../components/FloatingOrb';

declare global {
  interface Window {
    _linkedin_data_partner_ids: number[];
    lintrk: any;
  }
}

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    // Fire Google Ads conversion tracking
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16920987913/Hfd1CIaMuKsaEImSx4Q_',
        'value': 2.0,
        'currency': 'ILS'
      });
    }

    // LinkedIn Insight Tag
    const _linkedin_partner_id = "8186153";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);

    // Create and inject LinkedIn tracking script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    
    if (!window.lintrk) {
      window.lintrk = function(a: any, b: any) {
        window.lintrk.q.push([a, b]);
      };
      window.lintrk.q = [];
    }
    
    document.getElementsByTagName('script')[0].parentNode?.insertBefore(script, document.getElementsByTagName('script')[0]);

    // Add LinkedIn noscript pixel
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.alt = '';
    img.src = 'https://px.ads.linkedin.com/collect/?pid=8186153&fmt=gif';
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    // Cleanup function
    return () => {
      document.body.removeChild(noscript);
    };
  }, []);

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

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full bg-[#22c55e]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-[#22c55e]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              We've received your request and will contact you shortly to discuss your security needs.
            </p>
            <p className="text-gray-400">
              One of our security experts will reach out to you within 24 hours.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;