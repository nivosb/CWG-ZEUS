import React, { useState } from 'react';
import { X, Upload, Linkedin } from 'lucide-react';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: string;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ isOpen, onClose, position }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null as File | null,
    linkedinProfile: ''
  });

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/rtf'];
      if (validTypes.includes(file.type)) {
        setFormData(prev => ({ ...prev, resume: file }));
      } else {
        alert('Please upload a valid file type (PDF, DOC, DOCX, TXT, or RTF)');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0d0318] rounded-2xl w-full max-w-2xl p-6 relative border border-white/10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/60 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">Apply for {position}</h2>
        <p className="text-gray-400 mb-6">Please fill out the form below to apply for this position.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
                value={formData.firstName}
                onChange={e => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
                value={formData.lastName}
                onChange={e => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
              value={formData.phone}
              onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-white/80 mb-1">
              Resume/CV *
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume"
                required
                accept=".pdf,.doc,.docx,.txt,.rtf"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="resume"
                className="flex items-center justify-center w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 cursor-pointer"
              >
                <Upload className="w-5 h-5 mr-2" />
                {formData.resume ? formData.resume.name : 'Upload Resume/CV'}
              </label>
              <p className="mt-1 text-xs text-gray-400">
                Accepted file types: PDF, DOC, DOCX, TXT, RTF
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-white/80 mb-1">
              LinkedIn Profile
            </label>
            <div className="relative">
              <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                id="linkedin"
                placeholder="https://linkedin.com/in/your-profile"
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#9C27DF]"
                value={formData.linkedinProfile}
                onChange={e => setFormData(prev => ({ ...prev, linkedinProfile: e.target.value }))}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#7D3FF8] to-[#9B6AF3] rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationModal;