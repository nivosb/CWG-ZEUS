import React from 'react';
import { Lock, Key, Shield, FileText, Database } from 'lucide-react';

const RansomwareAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Protected files */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animation: `float ${3 + i * 0.5}s infinite ease-in-out`
            }}
          >
            <div className="relative">
              <FileText className="w-8 h-8 text-[#9C27DF]" />
              <Shield className="w-4 h-4 text-green-500 absolute -right-1 -bottom-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Central shield with rotating protection ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-8 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
          <div className="relative">
            <Shield className="w-20 h-20 text-[#9C27DF] animate-pulse" />
            <Lock className="w-8 h-8 text-green-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Rotating protection elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[Key, Database, Lock].map((Icon, i) => (
          <div
            key={i}
            className="absolute w-48 h-48"
            style={{
              animation: `orbit ${8 + i * 2}s linear infinite`
            }}
          >
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#130423] p-2 rounded-lg">
              <Icon className="w-6 h-6 text-[#9C27DF]" />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default RansomwareAnimation;