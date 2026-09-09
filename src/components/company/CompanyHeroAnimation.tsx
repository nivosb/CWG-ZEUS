import React from 'react';
import { Shield, Lock, CheckCircle, Globe, Users, Server } from 'lucide-react';

const CompanyHeroAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] mt-12 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Central element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-12 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
          <div className="relative text-5xl font-azonix text-white">
            CWG
          </div>
        </div>
      </div>

      {/* Inner rotating ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48 border border-[#9C27DF]/20 rounded-full animate-spin-slow">
          {[Shield, Lock, CheckCircle].map((Icon, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                transform: `rotate(${i * 120}deg) translateY(-24px)`,
                transformOrigin: 'center center'
              }}
            >
              <div className="bg-[#130423] p-2 rounded-lg">
                <Icon className="w-5 h-5 text-[#9C27DF]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outer rotating ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-72 h-72 border border-[#9C27DF]/10 rounded-full animate-spin-reverse">
          {[Globe, Users, Server].map((Icon, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                transform: `rotate(${i * 120}deg) translateY(-36px)`,
                transformOrigin: 'center center'
              }}
            >
              <div className="bg-[#130423] p-2 rounded-lg">
                <Icon className="w-5 h-5 text-[#9C27DF]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Particle effects */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#9C27DF] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(10px, -10px); opacity: 1; }
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin 30s linear infinite reverse;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CompanyHeroAnimation;