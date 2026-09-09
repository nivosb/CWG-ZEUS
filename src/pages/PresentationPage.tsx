import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Shield, Lock, CheckCircle, Globe, Code, Sword, FileSearch, Search, Users, Maximize2, Minimize2, Bell, Bomb, Server, Target, RefreshCcw, AlertTriangle, BookOpen, FileCheck } from 'lucide-react';
import FloatingOrb from '../components/FloatingOrb';
import { clientLogos } from '../components/clients/clientLogos';

const certifications = [
  {
    name: "OSEP",
    image: "https://www.offsec.com/_astro/OSEP.D_R8bS1A.svg"
  },
  {
    name: "OSCP",
    image: "https://www.offsec.com/_astro/OSCP.D0Wrgjqy.svg"
  },
  {
    name: "eMAPT",
    image: "https://miro.medium.com/v2/resize:fit:558/0*E6IhWnqoD9FUVO6h.png"
  },
  {
    name: "Azure Red Team Professional",
    image: "https://i.postimg.cc/JzKjnzCw/55.png"
  },
  {
    name: "OSWE",
    image: "https://www.offsec.com/_astro/OSWE.DI54Eyvq.svg"
  },
  {
    name: "Windows Red Teaming Expert",
    image: "https://i.postimg.cc/xdhYyLVK/54.png"
  },
  {
    name: "Red Team Ops",
    image: "https://miro.medium.com/v2/0*X1y7JLUAFN5QLiLi.png"
  },
  {
    name: "AWS Cloud Security",
    image: "https://i.postimg.cc/pT67tqyS/53.png"
  }
];

function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const presentationRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 'logo',
      title: 'Logo',
      content: (
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Logo Animation Container */}
          <div className="relative w-96 h-96">
            {/* Rotating circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-[#9C27DF]/20 rounded-full"
                  style={{
                    animation: `spin ${10 + i * 5}s linear infinite${i % 2 === 0 ? '' : ' reverse'}`,
                    width: `${300 + i * 60}px`,
                    height: `${300 + i * 60}px`
                  }}
                />
              ))}
            </div>

            {/* Orbiting icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[Shield, Lock, CheckCircle].map((Icon, i) => (
                <div
                  key={i}
                  className="absolute w-72 h-72"
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

            {/* Central Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
                <h1 className="text-8xl font-azonix text-white relative z-10 animate-fadeIn">CWG</h1>
              </div>
            </div>
          </div>
        </div>
      )
    },
   {
      id: 'story',
      title: 'Our Story',
      content: (
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 animate-fadeIn">
              Founded by Elite Security Experts
            </h2>
            <div className="text-xl text-gray-400 space-y-6">
              <p className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
                Founded by veterans of elite intelligence and cybersecurity units of the Israeli Defense Forces (IDF), 
                CWG specializes in protecting sensitive commercial and government information through advanced cybersecurity solutions.
              </p>
              <p className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
                Our team brings decades of combined experience in cybersecurity, offering comprehensive professional 
                services worldwide.
              </p>
            </div>
          </div>

          {/* Right side - Animation */}
          <div className="relative">
            {/* Company Logo Animation */}
            <div className="relative w-full h-[500px] overflow-hidden">
              {/* Background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(#9C27DF0A_1px,transparent_1px),linear-gradient(90deg,#9C27DF0A_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* Central element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-12 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
                  <div className="relative text-5xl font-azonix text-white">
                    CWG
                  </div>
                </div>
              </div>

              {/* Inner rotating ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 border border-[#9C27DF]/20 rounded-full animate-spin-slow">
                  {[Shield, Lock, CheckCircle].map((Icon, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        transform: `rotate(${i * 120}deg) translateY(-24px)`,
                        transformOrigin: 'center center'
                      }}
                    >
                      <div className="bg-[#130423] p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-[#9C27DF]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outer rotating ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72 border border-[#9C27DF]/10 rounded-full animate-spin-reverse">
                  {[Globe, Users, Server].map((Icon, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        transform: `rotate(${i * 120}deg) translateY(-36px)`,
                        transformOrigin: 'center center'
                      }}
                    >
                      <div className="bg-[#130423] p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-[#9C27DF]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Particle effects */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#9C27DF] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'founders',
      title: 'Founders',
      content: (
        <div className="space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 animate-fadeIn text-center">
            CWG's Founders
          </h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                name: "Amir Mittwoch",
                role: "CRO",
                image: "/images/team/amir.jpg",
                experience: {
                  years: "17",
                  sector: "Years IT Sector Experience",
                  startup: "4",
                  startupRole: "Years Startup Investor"
                },
                education: "BBA, MBA",
                background: "I.E. Mittwoch NCR"
              },
              {
                name: "Niv Bayazi",
                role: "CEO",
                image: "/images/team/niv.jpg",
                experience: {
                  years: "4",
                  sector: "Years Cyber Security Research",
                  startup: "5",
                  startupRole: "Years Senior Penetration Tester"
                },
                education: "B.Sc Computer Science",
                background: "Office of the Prime Minister of Israel"
              },
              {
                name: "Etai Yaffe",
                role: "CTO",
                image: "/images/team/etai.jpg",
                experience: {
                  years: "5",
                  sector: "Years Cyber Security Specialist",
                  startup: "10",
                  startupRole: "Years Senior Penetration Tester"
                },
                education: "B.Sc Computer Science, MBA",
                background: "IDF Intelligence Units"
              }
            ].map((founder, index) => (
              <div 
                key={index}
                className="relative group p-8 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 animate-scaleIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-xl rounded-full" />
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-[#9C27DF]">{founder.role}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-3xl font-bold text-[#9C27DF]">{founder.experience.years}</p>
                      <p className="text-sm text-gray-400">{founder.experience.sector}</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#9C27DF]">{founder.experience.startup}</p>
                      <p className="text-sm text-gray-400">{founder.experience.startupRole}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-white">{founder.education}</p>
                    <p className="text-[#9C27DF] text-sm">{founder.background}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'services',
      title: 'Our Services',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 animate-fadeIn">
            Comprehensive Security Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Penetration Testing",
                description: "Comprehensive security testing of applications and infrastructure"
              },
              {
                icon: Globe,
                title: "Cloud Security",
                description: "Advanced cloud infrastructure security assessment"
              },
              {
                icon: Sword,
                title: "Red Team",
                description: "Sophisticated adversary simulation and security testing"
              },
              {
                icon: Code,
                title: "Code Review",
                description: "In-depth security analysis of application source code"
              },
              {
                icon: FileSearch,
                title: "Risk Assessment",
                description: "Comprehensive security risk evaluation and management"
              },
              {
                icon: Users,
                title: "CISO Service",
                description: "Expert security leadership and strategic guidance"
              },
              {
                icon: AlertTriangle,
                title: "Incident Response",
                description: "Rapid response and recovery from security incidents"
              },
              {
                icon: BookOpen,
                title: "Security Training",
                description: "SSDLC and security awareness training programs"
              },
              {
                icon: FileCheck,
                title: "Compliance Preparation",
                description: "SOC2, GDPR, HIPAA, and ISO27001 compliance guidance"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="relative group p-6 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#130423] flex items-center justify-center mb-4 relative group">
                  <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
                  <service.icon className="w-6 h-6 text-[#9C27DF] relative z-10" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Our Products',
      content: (
        <div className="space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 animate-fadeIn">
            Managed Security Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: Bell,
                title: "Managed EAS",
                description: "Comprehensive external attack surface management with continuous monitoring and vulnerability assessment.",
                animation: (
                  <div className="absolute right-4 top-4 w-24 h-24">
                    {/* Radar animation */}
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full border border-[#9C27DF]/30 animate-ping" />
                      <div 
                        className="absolute w-full h-px bg-gradient-to-r from-[#9C27DF] to-transparent origin-left"
                        style={{ animation: 'radar 4s linear infinite' }}
                      />
                    </div>
                    <Bell className="absolute inset-0 m-auto w-8 h-8 text-[#9C27DF] animate-pulse" />
                  </div>
                )
              },
              {
                icon: Bomb,
                title: "Ransomware Readiness",
                description: "Advanced ransomware protection and recovery solutions to safeguard your business.",
                animation: (
                  <div className="absolute right-4 top-4 w-24 h-24">
                    {/* Shield protection animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
                        <Shield className="w-12 h-12 text-[#9C27DF] animate-pulse" />
                        <Lock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* Rotating protection ring */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 border-2 border-[#9C27DF]/20 rounded-full animate-spin-slow" />
                    </div>
                  </div>
                )
              }
            ].map((product, index) => (
              <div 
                key={index}
                className="relative p-8 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 animate-slideUp overflow-hidden min-h-[300px]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#130423] flex items-center justify-center mb-6 relative group">
                    <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
                    <product.icon className="w-8 h-8 text-[#9C27DF] relative z-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{product.description}</p>
                </div>
                {product.animation}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Team Certifications',
      content: (
        <div className="space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 animate-fadeIn text-center">
            Team Certifications
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-auto max-w-[150px] mx-auto transition-all duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'partners',
      title: 'Our Partners',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 animate-fadeIn">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'process',
      title: 'Security Assessment Process',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 animate-fadeIn text-center">
            CWG Security Assessment Process
          </h2>
          
          <div className="relative w-full max-w-4xl mx-auto h-[600px] mt-8">
            {/* Central circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-xl rounded-full animate-pulse" />
                <div className="absolute inset-0 border-2 border-[#9C27DF]/30 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-[#9C27DF]" />
                </div>
              </div>
            </div>

            {/* Process steps in a circle */}
            {[
              { 
                icon: Users, 
                title: "Kickoff Meeting", 
                description: "Understanding client needs, scope definition, and expectations" 
              },
              { 
                icon: Target, 
                title: "Execution", 
                description: "Conducting thorough security tests, vulnerability analysis, and risk assessments" 
              },
              { 
                icon: FileSearch, 
                title: "Report & Review", 
                description: "Delivering detailed findings, risk prioritization, and remediation recommendations" 
              },
              { 
                icon: Code, 
                title: "Ongoing Mitigation Tasks", 
                description: "Assisting with remediation efforts and security improvements" 
              },
              { 
                icon: RefreshCcw, 
                title: "Re-Test", 
                description: "Validating fixes, ensuring security hardening, and confirming risk reduction" 
              }
            ].map((step, index) => {
              const Icon = step.icon;
              const angle = (index * 360) / 5 - 90; // Start from top (-90 degrees)
              const radius = 250; // Distance from center
              
              // Calculate position on the circle
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 w-64 animate-fadeIn"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="relative group">
                    {/* Connection line to center */}
                    <div 
                      className="absolute left-1/2 top-1/2 h-px bg-gradient-to-r from-[#9C27DF] to-transparent w-24 origin-left"
                      style={{
                        transform: `rotate(${angle + 180}deg)`,
                        opacity: 0.3
                      }}
                    />
                    
                    {/* Icon and content */}
                    <div className="relative bg-[#130423] p-4 rounded-xl border border-[#9C27DF]/20 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-full bg-[#130423] flex items-center justify-center mb-3 relative group">
                        <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full" />
                        <Icon className="w-6 h-6 text-[#9C27DF] relative z-10" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Rotating connection lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] border border-[#9C27DF]/10 rounded-full animate-spin-slow" />
              <div className="absolute w-[400px] h-[400px] border border-[#9C27DF]/20 rounded-full animate-spin-reverse" />
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      previousSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    }
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await presentationRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error('Error attempting to enable fullscreen:', err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (err) {
        console.error('Error attempting to exit fullscreen:', err);
      }
    }
  };

  return (
    <div 
      ref={presentationRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0d0318] via-[#0d0318] to-black"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <FloatingOrb
        color="#9C2Fdf"
        size="300px"
        position="-top-20 -left-20"
        blur="120px"
      />
      <FloatingOrb
        color="#9C2Fdf"
        size="250px"
        position="top-1/5 -right-20"
        blur="100px"
      />
      <FloatingOrb
        color="#5e17eb"
        size="200px"
        position="bottom-20 left-20"
        blur="80px"
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-[#9C27DF]' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center px-12">
          <div className="max-w-6xl w-full">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={previousSlide}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <span className="text-white/60 text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="fixed top-8 right-8 z-20 p-2 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 transition-colors"
        >
          {isFullscreen ? (
            <Minimize2 className="w-6 h-6 text-white" />
          ) : (
            <Maximize2 className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animate-slideRight {
          animation: slideRight 0.8s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin 30s linear infinite reverse;
        }

        /* Fullscreen styles */
        :fullscreen {
          background: linear-gradient(to bottom, #0d0318, #0d0318, #000000);
        }
        ::-webkit-backdrop {
          background: linear-gradient(to bottom, #0d0318, #0d0318, #000000);
        }
        ::backdrop {
          background: linear-gradient(to bottom, #0d0318, #0d0318, #000000);
        }
      `}</style>
    </div>
  );
}

export default PresentationPage;