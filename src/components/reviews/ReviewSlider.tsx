import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewSliderProps {
  children: React.ReactNode[];
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, children.length - itemsPerPage);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrevious = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNext = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    }
  };

  return (
    <div className="relative px-12">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100 / itemsPerPage}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrevious}
        disabled={!isMobile && currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
          !isMobile && currentIndex === 0 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-gray-50'
        }`}
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={handleNext}
        disabled={!isMobile && currentIndex === maxIndex}
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all ${
          !isMobile && currentIndex === maxIndex 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-gray-50'
        }`}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Dots indicator */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: isMobile ? children.length : maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;