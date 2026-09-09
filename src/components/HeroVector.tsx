import React from 'react';
import { Shield } from 'lucide-react';

const HeroVector: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12">
      <div className="relative">
        {/* Vector graphic */}
        <svg
          viewBox="0 0 800 400"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circles */}
          <circle cx="400" cy="200" r="120" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="400" cy="200" r="100" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" from="100" to="110" dur="3s" repeatCount="indefinite" />
          </circle>
          
          {/* Rotating outer ring */}
          <g>
            <circle cx="400" cy="200" r="150" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="8 8">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 400 200"
                to="360 400 200"
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
          
          {/* Tech lines */}
          {[45, 135, 225, 315].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 400 200)`}>
              <line
                x1="520"
                y1="200"
                x2="600"
                y2="200"
                stroke="#FFFFFF"
                strokeWidth="2"
                opacity="0.5"
              >
                <animate
                  attributeName="x2"
                  values="600;580;600"
                  dur="2s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </line>
            </g>
          ))}
          
          {/* Glowing dots */}
          {[0, 90, 180, 270].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 400 200)`}>
              <circle cx="550" cy="200" r="4" fill="#FFFFFF">
                <animate
                  attributeName="opacity"
                  values="1;0.3;1"
                  dur="2s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          {/* Shield shape */}
          <path
            d="M400 120 L460 140 L460 220 L400 280 L340 220 L340 140 Z"
            fill="#130423"
            stroke="#9C27DF"
            strokeWidth="2"
          />
          
          {/* Inner shield details */}
          <path
            d="M400 140 L440 155 L440 210 L400 255 L360 210 L360 155 Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.5;0.2;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* Centered Shield Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 rounded-full bg-[#130423] flex items-center justify-center relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
            
            {/* Icon */}
            {/*<div className="relative">
              <Shield className="w-8 h-8 text-[#9C27DF]" />
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVector;