import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import JobApplicationModal from './JobApplicationModal';

const positions = [
  {
    title: "Red Team Expert",
    location: "Tel Aviv, Israel (Hybrid)",
    type: "Full-time",
    description: "We're looking for an experienced Red Team Expert to conduct advanced adversary simulations and help organizations improve their security posture.",
    requirements: [
      "5+ years of experience in offensive security",
      "Strong knowledge of attack techniques and methodologies",
      "Experience with common security tools and frameworks",
      "Excellent communication and reporting skills"
    ]
  },
  {
    title: "Cybersecurity Consultant",
    location: "Tel Aviv, Israel (Hybrid)",
    type: "Full-time",
    description: "Join our consulting team to help organizations assess their security risks and implement effective security programs.",
    requirements: [
      "3+ years of cybersecurity experience",
      "Strong understanding of security frameworks and controls",
      "Experience with security assessments and audits",
      "Excellent client communication skills"
    ]
  }
];

const OpenPositions: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Open Positions
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Join our team and work on cutting-edge cybersecurity challenges
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {positions.map((position, index) => (
            <div 
              key={index}
              className="relative group p-8 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleApply(position.title)}
                  className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#7D3FF8] to-[#9B6AF3] rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <p className="text-gray-400 mb-6">{position.description}</p>

              <div>
                <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  {position.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <JobApplicationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position={selectedPosition}
      />
    </section>
  );
};

export default OpenPositions;