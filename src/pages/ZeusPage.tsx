import React, { useState } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import FloatingOrb from '../components/FloatingOrb';
import AgenticDashboard from '../components/agentic-pentest/AgenticDashboard';
import AgenticFeatures from '../components/agentic-pentest/AgenticFeatures';
import AgenticUseCases from '../components/agentic-pentest/AgenticUseCases';
import AgenticProcess from '../components/agentic-pentest/AgenticProcess';
import AgenticStats from '../components/agentic-pentest/AgenticStats';
import AgenticComparison from '../components/agentic-pentest/AgenticComparison';
import AgenticBenefits from '../components/agentic-pentest/AgenticBenefits';
import AgenticFAQ from '../components/agentic-pentest/AgenticFAQ';
import ContactModal from '../components/modals/ContactModal';
import { useScrollReveal, revealClasses, revealDelay } from '../hooks/useScrollReveal';

const ZeusHero: React.FC<{ onDemoClick: () => void }> = ({ onDemoClick }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section ref={ref} className="relative z-10 min-h-[92vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          {/* Left: Text content */}
          <div className={`${revealClasses(visible)} text-center lg:text-left`}>
            {/* Zeus logo */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src="/images/zeus/zeus-final-gradient-transparent.svg"
                alt="Zeus logo"
                className="w-20 h-20 sm:w-24 sm:h-24 animate-[zeusFloat_4s_ease-in-out_infinite]"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#9C27DF]/10 border border-[#9C27DF]/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#9C27DF] animate-pulse" />
              <span className="text-white/80 text-sm font-medium">The Agentic Pentesting Platform</span>
            </div>

            <h1
              className="font-bold leading-[1.05] tracking-[-0.055em] text-white"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4FF3D] via-white to-[#5B4CFF]">
                Zeus
              </span>
            </h1>
            <p
              className="mt-3 font-bold leading-[1.1] tracking-[-0.04em] text-white/90"
              style={{ fontSize: 'clamp(1.1rem, 3.5vw, 2rem)' }}
            >
              Autonomous AI that hunts exploitable risk
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:text-lg sm:leading-7 lg:mx-0">
              Zeus deploys autonomous agents that continuously enumerate, probe, and exploit
              vulnerabilities across your entire attack surface - validated by expert human
              pentesters at every critical step.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#a126e9]/10 border border-[#a126e9]/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#a126e9] animate-pulse" />
                <span className="text-white/80 text-sm font-medium">Human in the Loop</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#a126e9]/10 border border-[#a126e9]/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#a126e9] animate-pulse" />
                <span className="text-white/80 text-sm font-medium">Autonomous AI Agents</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#a126e9]/10 border border-[#a126e9]/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#a126e9] animate-pulse" />
                <span className="text-white/80 text-sm font-medium">Continuous Validation</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onDemoClick}
                className="px-8 py-3.5 bg-gradient-to-r from-[#9C27DF] to-[#7D3FF8] rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/30 inline-flex items-center justify-center gap-2 group"
              >
                <Zap className="w-5 h-5" fill="currentColor" />
                Book a Zeus Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#dashboard"
                className="px-8 py-3.5 border border-white/15 rounded-full text-white font-semibold hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2"
              >
                See it in action
              </a>
            </div>
          </div>

          {/* Right: Orbiting agent visual */}
          <div className={`${revealClasses(visible)} [transition-delay:200ms] relative h-72 sm:h-96 hidden sm:block`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-16 bg-[#9C27DF] opacity-15 blur-3xl rounded-full animate-pulse" />
                {/* Radar rings */}
                <div className="absolute inset-0 rounded-full border border-[#9C27DF]/20 scale-150" />
                <div className="absolute inset-0 rounded-full border border-[#9C27DF]/15 scale-[1.8]" />
                <div className="absolute inset-0 rounded-full border border-dashed border-[#9C27DF]/10 scale-[2.1] animate-[spin_20s_linear_infinite]" />

                {/* Central Zeus bolt */}
                <div className="relative w-24 h-24 rounded-full bg-[#130423] border border-[#9C27DF]/40 flex items-center justify-center shadow-[0_0_40px_rgba(156,39,223,0.3)]">
                  <Zap className="w-12 h-12 text-[#9C27DF]" fill="currentColor" />
                </div>

                {/* Orbiting agent nodes */}
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ animation: `zeusOrbit ${10 + i * 3}s linear infinite${i % 2 ? ' reverse' : ''}` }}
                  >
                    <div
                      className="absolute w-12 h-12 rounded-full bg-[#130423] border border-[#9C27DF]/30 flex items-center justify-center shadow-[0_0_20px_rgba(156,39,223,0.15)]"
                      style={{ transform: `rotate(${i * 90}deg) translateY(-130px) rotate(-${i * 90}deg)` }}
                    >
                      <Zap className="w-5 h-5 text-[#9C27DF]" />
                    </div>
                  </div>
                ))}

                {/* Data pulse dots */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#9C27DF]"
                    style={{
                      left: `${15 + i * 10}%`,
                      top: `${20 + (i % 4) * 20}%`,
                      animation: `dataPulse ${1.5 + i * 0.3}s infinite ease-in-out`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes zeusOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dataPulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes zeusFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

const DashboardSection: React.FC = () => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section id="dashboard" className="relative z-10 py-12 sm:py-16 px-4">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`${revealClasses(visible)} text-center mb-8 sm:mb-12`}>
          <span className="inline-block px-4 py-1.5 bg-[#9C27DF]/10 border border-[#9C27DF]/30 rounded-full text-[#9C27DF] text-xs sm:text-sm font-medium">
            Live Platform
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            Watch Zeus work in real time
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Autonomous agents scan, probe, and exploit - while human experts validate every finding before it reaches you.
          </p>
        </div>
        <div className={`${revealClasses(visible)} [transition-delay:150ms]`}>
          <AgenticDashboard />
        </div>
      </div>
    </section>
  );
};

const CTABanner: React.FC<{ onDemoClick: () => void }> = ({ onDemoClick }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section className="relative z-10 py-20 sm:py-28 px-4">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`${revealClasses(visible)} relative overflow-hidden rounded-3xl border border-[#a126e9]/30 bg-gradient-to-br from-[#160d1f] via-[#1a0a2e] to-[#0d0318] px-6 py-12 sm:px-12 sm:py-16 text-center`}>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#a126e9]/25 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-16 w-72 h-72 bg-[#a126e9]/20 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]" />
          <div className="absolute inset-0 bg-[linear-gradient(#a126e90A_1px,transparent_1px),linear-gradient(90deg,#a126e90A_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#a126e9]/15 border border-[#a126e9]/40 mb-6">
              <Zap className="w-7 h-7 text-[#a126e9]" fill="currentColor" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Can Zeus break into your app?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
              Book a scoped demo and see autonomous agents work against your environment -
              with a human expert accountable for every result.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
              <button
                onClick={onDemoClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#9C27DF] to-[#7D3FF8] rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/30 inline-flex items-center justify-center gap-2 group"
              >
                <Zap className="w-5 h-5" fill="currentColor" />
                Book a Zeus Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={onDemoClick}
                className="w-full sm:w-auto px-8 py-3.5 border border-white/15 rounded-full text-white font-semibold hover:bg-white/5 transition-colors"
              >
                Talk to an expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function ZeusPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0d0318] via-[#0d0318] to-black">
      <FloatingOrb color="#9C2Fdf" size="300px" position="-top-20 -left-20" blur="120px" />
      <FloatingOrb color="#9C2Fdf" size="250px" position="top-1/5 -right-20" blur="100px" />
      <FloatingOrb color="#5e17eb" size="200px" position="bottom-20 left-20" blur="80px" />

      <div className="relative z-10">
        <ZeusHero onDemoClick={() => setIsModalOpen(true)} />
        <DashboardSection />
        <AgenticFeatures />
        <AgenticUseCases />
        <AgenticProcess />
        <AgenticStats />
        <AgenticComparison />
        <AgenticBenefits />
        <AgenticFAQ />
        <CTABanner onDemoClick={() => setIsModalOpen(true)} />
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default ZeusPage;
