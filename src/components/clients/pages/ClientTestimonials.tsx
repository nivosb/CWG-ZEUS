import React from 'react';
import { reviews } from '../../reviews/reviewsData';

const ClientTestimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Hear directly from our clients about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 6).map((review, index) => (
            <div
              key={index}
              className="relative group p-6 bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">{review.name}</h3>
                  <p className="text-gray-400 text-sm">{review.position}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-400 text-sm">{review.company}</span>
                    <img
                      src={review.companyLogo}
                      alt={`${review.company} logo`}
                      className="h-4 w-auto object-contain brightness-0 invert opacity-50"
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;