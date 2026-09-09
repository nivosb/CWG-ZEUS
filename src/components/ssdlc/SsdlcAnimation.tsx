import React from 'react';
import { Code, GitBranch, CheckCircle, XCircle, RefreshCcw } from 'lucide-react';

const SsdlcAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background grid - now blends with page background */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* CI/CD Pipeline Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-lg">
          {/* Pipeline stages */}
          <div className="flex justify-between items-center px-12">
            {['Code', 'Build', 'Test', 'Deploy'].map((stage, index) => (
              <div key={index} className="relative">
                <div className="w-12 h-12 rounded-full bg-[#130423] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full animate-pulse" />
                  <Code className="w-6 h-6 text-[#9C27DF]" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                  {stage}
                </span>
              </div>
            ))}
          </div>

          {/* Connecting lines */}
          <div className="absolute top-6 left-16 right-16 h-px bg-[#9C27DF]/30" />
          
          {/* Moving dot */}
          <div 
            className="absolute top-6 left-0 w-3 h-3 rounded-full bg-[#9C27DF]"
            style={{ animation: 'moveDot 4s linear infinite' }}
          />
        </div>
      </div>

      {/* Security checks visualization */}
      <div className="absolute bottom-12 left-0 right-0">
        <div className="flex justify-center space-x-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-2 animate-fadeIn"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {i % 2 === 0 ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <span className="text-white/60 text-sm">
                {i % 2 === 0 ? 'Secure' : 'Fix Required'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Git branches visualization */}
      <div className="absolute top-12 left-0 right-0">
        <div className="flex justify-center space-x-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <GitBranch className="w-4 h-4 text-[#9C27DF]" />
              <span className="text-white/60 text-sm">feature/{i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes moveDot {
          0% { transform: translateX(15%); }
          100% { transform: translateX(85%); }
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

export default SsdlcAnimation;