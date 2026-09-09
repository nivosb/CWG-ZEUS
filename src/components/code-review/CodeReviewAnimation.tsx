import React from 'react';
import { Code, CheckCircle, XCircle, Search } from 'lucide-react';

const CodeReviewAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Code lines */}
      <div className="absolute inset-0 flex flex-col justify-center px-12 space-y-3 font-mono text-sm">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 animate-slideIn"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="w-8 text-white/40">{i + 1}</div>
            <div className="flex-1 text-white/60 overflow-hidden">
              <div className="animate-typing">
                {i % 2 === 0 ? 'function validateInput(data) {' : 
                 i % 3 === 0 ? 'const sanitizedData = sanitize(data);' :
                 'return checkSecurity(data);'}
              </div>
            </div>
            {i % 2 === 0 ? (
              <CheckCircle className="w-5 h-5 text-green-500 animate-fadeIn" />
            ) : i % 3 === 0 ? (
              <XCircle className="w-5 h-5 text-red-500 animate-fadeIn" />
            ) : null}
          </div>
        ))}
      </div>

      {/* Scanning effect */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#9C27DF] to-transparent animate-scan" />
      </div>

      {/* Code analysis indicators */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-[#9C27DF]" />
          <span className="text-white/60 text-sm">Analyzing code...</span>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        .animate-typing {
          white-space: nowrap;
          overflow: hidden;
          animation: typing 1s steps(30, end);
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CodeReviewAnimation;