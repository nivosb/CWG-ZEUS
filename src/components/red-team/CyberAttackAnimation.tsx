import React from 'react';
import { Shield, Zap, AlertTriangle } from 'lucide-react';

const CyberAttackAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Animated attack paths */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-[#9C27DF] to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '10%',
              width: '80%',
              animation: `attackPath ${2 + i * 0.5}s infinite`,
              opacity: 0
            }}
          />
        ))}
      </div>

      {/* Animated nodes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32">
          {/* Central shield */}
          <div className="absolute inset-0 flex items-center justify-center animate-pulse">
            <Shield className="w-16 h-16 text-[#9C27DF]" />
          </div>

          {/* Orbiting attack indicators */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full animate-spin"
              style={{
                animation: `orbit ${3 + i}s linear infinite`,
                transformOrigin: 'center'
              }}
            >
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                {i % 2 === 0 ? (
                  <Zap className="w-4 h-4 text-red-500 animate-pulse" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-yellow-500 animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add some glowing effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#9C27DF] opacity-20 blur-3xl animate-pulse" />
      </div>

      <style>{`
        @keyframes attackPath {
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
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CyberAttackAnimation;