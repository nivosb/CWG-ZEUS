import React from 'react';
import { BarChart, AlertTriangle, CheckCircle, Shield, Target } from 'lucide-react';

const RiskAssessmentAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Risk matrix visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-64 h-64 border border-[#9C27DF]/30 rounded-lg">
          {/* Matrix grid */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="border border-[#9C27DF]/10"
                style={{
                  background: i < 3 ? 'rgba(156, 39, 223, 0.1)' :
                             i < 6 ? 'rgba(156, 39, 223, 0.2)' :
                             'rgba(156, 39, 223, 0.3)'
                }}
              />
            ))}
          </div>

          {/* Risk indicators */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `pulse ${2 + Math.random() * 2}s infinite`
              }}
            >
              <AlertTriangle className="w-6 h-6 text-[#9C27DF]" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating metrics */}
      <div className="absolute inset-x-0 bottom-12 flex justify-center space-x-12">
        {[
          { icon: Target, label: "Risk Score", value: "8.5" },
          { icon: Shield, label: "Controls", value: "24" },
          { icon: CheckCircle, label: "Compliance", value: "92%" }
        ].map((metric, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-2 animate-float"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <metric.icon className="w-6 h-6 text-[#9C27DF]" />
            <div className="text-white/60 text-sm">{metric.label}</div>
            <div className="text-white font-bold">{metric.value}</div>
          </div>
        ))}
      </div>

      {/* Animated chart */}
      <div className="absolute top-8 inset-x-0 flex justify-center">
        <div className="flex items-end space-x-2 h-24">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-4 bg-[#9C27DF]/30 rounded-t animate-chart"
              style={{
                height: `${30 + Math.random() * 70}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes chart {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-chart {
          animation: chart 1s ease-out forwards;
          transform-origin: bottom;
        }
      `}</style>
    </div>
  );
};

export default RiskAssessmentAnimation;