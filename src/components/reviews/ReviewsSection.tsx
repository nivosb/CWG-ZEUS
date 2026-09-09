import React from 'react';
import ReviewsGrid from './ReviewsGrid';

const ReviewsSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Security Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what CISOs and security leaders say about their experience with our cybersecurity solutions
          </p>
        </div>
        <ReviewsGrid />
      </div>
    </section>
  );
}

export default ReviewsSection;