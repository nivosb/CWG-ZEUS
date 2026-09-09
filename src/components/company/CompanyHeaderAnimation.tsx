import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';

const CompanyHeaderAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[200px] mt-12 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Animated lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#9C27DF] to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: '10%',
              width: '80%',
              animation: `pulseLine ${2 + i * 0.5}s infinite`,
              opacity: 0
            }}
          />
        ))}
      </div>

      {/* Central element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-8 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
          <div className="relative text-4xl font-azonix text-white">
            CWG
          </div>
        </div>
      </div>

      {/* Orbiting elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[Shield, Lock, CheckCircle].map((Icon, i) => (
          <div
            key={i}
            className="absolute w-48 h-48"
            style={{
              animation: `orbit ${6 + i * 2}s linear infinite${i % 2 === 0 ? '' : ' reverse'}`
            }}
          >
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-[#130423] p-2 rounded-lg">
              <Icon className="w-5 h-5 text-[#9C27DF]" />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes pulseLine {
          0% {
            opacity: 0;
            transform: scaleX(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scaleX(1);
          }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CompanyHeaderAnimation;