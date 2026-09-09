import React from 'react';
import ReviewSlider from './ReviewSlider';
import { reviews } from './reviewsData';
import ReviewCard from './ReviewCard';

const ReviewsGrid: React.FC = () => {
  return (
    <div className="relative">
      <ReviewSlider>
        {reviews.map((review, index) => (
          <div key={index} className="px-4">
            <ReviewCard {...review} />
          </div>
        ))}
      </ReviewSlider>
    </div>
  );
}

export default ReviewsGrid;