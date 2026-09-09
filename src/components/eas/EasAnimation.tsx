import React from 'react';
import { Globe, Shield, Radar, AlertCircle } from 'lucide-react';

const EasAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Central globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-8 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
          <Globe className="w-24 h-24 text-[#9C27DF] animate-spin-slow" />
        </div>
      </div>

      {/* Scanning radar effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 relative">
          <div className="absolute inset-0 border-2 border-[#9C27DF]/20 rounded-full" />
          <div className="absolute inset-0 border border-[#9C27DF]/40 rounded-full animate-ping" />
          <div 
            className="absolute w-full h-px bg-gradient-to-r from-[#9C27DF] to-transparent origin-left"
            style={{ animation: 'radar 4s linear infinite' }}
          />
        </div>
      </div>

      {/* Threat indicators */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animation: `pulse ${2 + Math.random() * 2}s infinite`
          }}
        >
          {i % 2 === 0 ? (
            <AlertCircle className="w-4 h-4 text-red-500" />
          ) : (
            <Shield className="w-4 h-4 text-green-500" />
          )}
        </div>
      ))}

      {/* Rotating radar */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-72 h-72 animate-spin-slow">
          <Radar className="w-8 h-8 text-[#9C27DF] absolute -top-4 left-1/2 transform -translate-x-1/2" />
        </div>
      </div>

      <style>{`
        @keyframes radar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default EasAnimation;