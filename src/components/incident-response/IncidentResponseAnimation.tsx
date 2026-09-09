import React from 'react';
import { AlertCircle, Shield, Clock, Zap, CheckCircle } from 'lucide-react';

const IncidentResponseAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Central element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-8 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
          <AlertCircle className="w-24 h-24 text-[#9C27DF]" />
        </div>
      </div>

      {/* Rotating elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[Shield, Clock, Zap, CheckCircle].map((Icon, i) => (
          <div
            key={i}
            className="absolute w-64 h-64"
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

      {/* Response timeline */}
      <div className="absolute bottom-12 left-0 right-0">
        <div className="flex justify-center space-x-8">
          {['Alert', 'Response', 'Contain', 'Resolve'].map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center animate-fadeIn"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <div className="w-3 h-3 bg-[#9C27DF] rounded-full mb-2" />
              <span className="text-white/60 text-sm">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default IncidentResponseAnimation;