import React from 'react';
import { Search, ShieldCheck, XCircle, AlertTriangle } from 'lucide-react';

const SecurityScanAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Scanning grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Scanning line */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#9C27DF] to-transparent animate-scanLine" />
      </div>

      {/* Security findings */}
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
            {i % 3 === 0 ? (
              <XCircle className="w-6 h-6 text-red-500" />
            ) : i % 3 === 1 ? (
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
            ) : (
              <ShieldCheck className="w-6 h-6 text-green-500" />
            )}
          </div>
        ))}
      </div>

      {/* Central scanning element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
          <Search className="w-16 h-16 text-[#9C27DF] animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes scanLine {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-scanLine {
          animation: scanLine 3s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SecurityScanAnimation;