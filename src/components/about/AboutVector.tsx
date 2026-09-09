import React from 'react';

const AboutVector: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      <div className="relative w-full h-full scale-90 lg:scale-110">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rest of the SVG content remains the same */}
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(0.5) rotate(0)"
            >
              <path
                d="M25 0 L50 14.4 L50 28.8 L25 43.4 L0 28.8 L0 14.4 Z"
                fill="none"
                stroke="#9C27DF"
                strokeWidth="1"
                opacity="0.1"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.2;0.1"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#hexagons)" />
          
          <g transform="translate(200, 200)">
            <circle
              r="150"
              fill="none"
              stroke="#9C27DF"
              strokeWidth="1"
              strokeDasharray="10 5"
              opacity="0.3"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="30s"
                repeatCount="indefinite"
              />
            </circle>
            
            <path
              d="M0 -100 L80 -60 L80 40 L0 100 L-80 40 L-80 -60 Z"
              fill="none"
              stroke="#9C27DF"
              strokeWidth="2"
            >
              <animate
                attributeName="opacity"
                values="1;0.5;1"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
            
            <path
              d="M0 -80 L60 -40 L60 30 L0 80 L-60 30 L-60 -40 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              opacity="0.2"
            />
            
            {[-60, -30, 0, 30, 60].map((angle, i) => (
              <circle
                key={i}
                cx={Math.cos((angle * Math.PI) / 180) * 100}
                cy={Math.sin((angle * Math.PI) / 180) * 100}
                r="4"
                fill="#9C27DF"
              >
                <animate
                  attributeName="opacity"
                  values="1;0.3;1"
                  dur="2s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
            
            <g opacity="0.2">
              {[-45, -15, 15, 45].map((angle, i) => (
                <line
                  key={i}
                  x1={Math.cos((angle * Math.PI) / 180) * 60}
                  y1={Math.sin((angle * Math.PI) / 180) * 60}
                  x2={Math.cos((angle * Math.PI) / 180) * 120}
                  y2={Math.sin((angle * Math.PI) / 180) * 120}
                  stroke="#FFFFFF"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;0.5;0.2"
                    dur="3s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </line>
              ))}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AboutVector;