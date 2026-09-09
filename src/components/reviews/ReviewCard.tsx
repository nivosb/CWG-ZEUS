import React from 'react';

interface ReviewCardProps {
  name: string;
  position: string;
  company: string;
  companyLogo: string;
  image: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, position, company, companyLogo, image, review }) => {
  return (
    <div className="bg-[#f8f9fa] p-8 rounded-2xl">
      <div className="flex items-start gap-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-sm text-gray-600 truncate">{position}</p>
          <p className="text-sm text-gray-600 truncate mt-1">{company}</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6">{review}</p>

      <div className="flex justify-center">
        <img
          src={companyLogo}
          alt={`${company} logo`}
          className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
}

export default ReviewCard;