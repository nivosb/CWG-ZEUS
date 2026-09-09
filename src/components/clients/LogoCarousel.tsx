import React from 'react';
import { clientLogos } from './clientLogos';
import LogoRow from './LogoRow';

const LogoCarousel: React.FC = () => {
  const firstRowLogos = clientLogos.slice(0, Math.ceil(clientLogos.length / 2));
  const secondRowLogos = clientLogos.slice(Math.ceil(clientLogos.length / 2));

  return (
    <div className="relative w-full overflow-hidden">
      <style>
        {`
          @media (max-width: 768px) {
            .animate-infinite-scroll,
            .animate-infinite-scroll-reverse {
              --animation-duration: 15s;
            }
          }
        `}
      </style>
      <div className="flex flex-col gap-12">
        <div className="relative">
          <div className="flex animate-infinite-scroll">
            {/* Original set */}
            {firstRowLogos.map((client, index) => (
              <div key={`original-${index}`} className="flex-none">
                <LogoRow logos={[client]} />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {firstRowLogos.map((client, index) => (
              <div key={`duplicate-${index}`} className="flex-none">
                <LogoRow logos={[client]} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex animate-infinite-scroll-reverse">
            {/* Original set */}
            {secondRowLogos.map((client, index) => (
              <div key={`original-${index}`} className="flex-none">
                <LogoRow logos={[client]} />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {secondRowLogos.map((client, index) => (
              <div key={`duplicate-${index}`} className="flex-none">
                <LogoRow logos={[client]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;