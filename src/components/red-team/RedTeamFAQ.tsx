import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is red teaming?",
    answer: "Red teaming is an advanced form of security testing that simulates real-world cyber attacks to evaluate an organization's detection and response capabilities against sophisticated threats."
  },
  {
    question: "How is red teaming different from penetration testing?",
    answer: "While penetration testing focuses on finding vulnerabilities, red teaming simulates full attack scenarios using multiple attack vectors, including technical, physical, and social engineering approaches."
  },
  {
    question: "How long does a red team engagement take?",
    answer: "Red team engagements typically last 4-8 weeks, allowing time for proper reconnaissance, multiple attack attempts, and stealth operations that mirror real-world advanced persistent threats."
  },
  {
    question: "What deliverables will we receive?",
    answer: "You'll receive a comprehensive report including attack narratives, successful techniques, detection gaps, response assessment, and strategic recommendations for improving security posture."
  },
  {
    question: "How often should we conduct red team exercises?",
    answer: "We recommend conducting red team exercises annually or after significant changes to your security infrastructure, processes, or when testing new security controls and response procedures."
  }
];

const RedTeamFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Common questions about our red team services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white/5 hover:bg-white/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white/70 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white/[0.02] text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RedTeamFAQ;