import React, { useState, useEffect } from 'react';
import { clientLogos } from './clientLogos';

const GlobalPartnersSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentSet, setCurrentSet] = useState(0);
  const logosPerSet = 10;
  const totalSets = Math.ceil(clientLogos.length / logosPerSet);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % totalSets);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isPaused, totalSets]);

  const getCurrentLogos = () => {
    const startIndex = currentSet * logosPerSet;
    return clientLogos.slice(startIndex, startIndex + logosPerSet);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Global Partners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We work with leading organizations to enhance their security posture
          </p>
        </div>

        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {getCurrentLogos().map((client, index) => (
            <a
              key={`${currentSet}-${client.name}`}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <img
                  src={client.imageUrl}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .client-logo:hover {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GlobalPartnersSection;