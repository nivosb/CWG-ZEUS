import React from 'react';
import { Users, Shield, FileText, Target, Settings, Lock } from 'lucide-react';

const CisoAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Central element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-8 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
          <Users className="w-24 h-24 text-[#9C27DF]" />
        </div>
      </div>

      {/* Rotating elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[Shield, FileText, Target, Settings, Lock].map((Icon, i) => (
          <div
            key={i}
            className="absolute w-64 h-64"
            style={{
              animation: `orbit ${10 + i * 2}s linear infinite${i % 2 === 0 ? '' : ' reverse'}`
            }}
          >
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#130423] p-3 rounded-lg">
              <Icon className="w-8 h-8 text-[#9C27DF]" />
            </div>
          </div>
        ))}
      </div>

      {/* Floating indicators */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            animation: `float ${3 + i * 0.5}s infinite ease-in-out`
          }}
        >
          <div className="px-3 py-1 bg-[#130423] rounded-full text-sm text-white/80">
            {['Strategy', 'Compliance', 'Risk', 'Security', 'Leadership'][i]}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default CisoAnimation;