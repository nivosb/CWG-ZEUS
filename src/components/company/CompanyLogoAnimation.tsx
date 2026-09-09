import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';

const CompanyLogoAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Central CWG Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glowing background */}
          <div className="absolute -inset-8 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
          
          {/* Logo text */}
          <div className="relative text-6xl font-azonix text-white">
            CWG
          </div>
        </div>
      </div>

      {/* Rotating circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#9C27DF]/20 rounded-full"
            style={{
              animation: `spin ${10 + i * 5}s linear infinite${i % 2 === 0 ? '' : ' reverse'}`,
              width: `${300 + i * 60}px`,
              height: `${300 + i * 60}px`
            }}
          />
        ))}
      </div>

      {/* Orbiting icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[Shield, Lock, CheckCircle].map((Icon, i) => (
          <div
            key={i}
            className="absolute w-72 h-72"
            style={{
              animation: `orbit ${8 + i * 2}s linear infinite${i % 2 === 0 ? '' : ' reverse'}`
            }}
          >
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#130423] p-2 rounded-lg">
              <Icon className="w-6 h-6 text-[#9C27DF]" />
            </div>
          </div>
        ))}
      </div>

      {/* Particle effects */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#9C27DF] rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        />
      ))}

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CompanyLogoAnimation;