import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

const ReviewsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews: Review[] = [
    {
      name: 'Sophia Martinez',
      role: 'Wellness Coach',
      rating: 5,
      text: 'Wellsip has become a staple in my daily routine. The natural alkalinity and smooth taste make it my go-to choice for staying hydrated throughout the day.',
    },
    {
      name: 'James Chen',
      role: 'Professional Athlete',
      rating: 5,
      text: "As an athlete, hydration is crucial. Wellsip's mineral-rich composition helps me recover faster and perform at my best. The pH balance is perfect.",
    },
    {
      name: 'Emily Thompson',
      role: 'Yoga Instructor',
      rating: 5,
      text: "I love the purity and taste of Wellsip. It is not just water, it is a wellness experience. The natural minerals make a noticeable difference in how I feel.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="reviews" className="relative border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
              What People Say
            </h2>
            <p className="text-base font-light text-zinc-600">
              Trusted by wellness enthusiasts, athletes, and those who value quality.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[0.75rem] font-light text-zinc-500">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-pink-500 stroke-pink-500" />
              ))}
            </div>
            <span>4.9 / 5 from 1,200+ reviews</span>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="review-card min-w-full p-8 md:p-10"
              >
                <div className="flex items-center gap-1 text-pink-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-pink-500 stroke-pink-500" />
                  ))}
                </div>
                <p className="mt-4 text-base md:text-lg font-light leading-relaxed text-zinc-700">
                  "{review.text}"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-zinc-700 text-sm font-semibold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-900">{review.name}</span>
                    <span className="text-[0.75rem] font-light text-zinc-500">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 pb-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-4 bg-pink-500/80'
                    : 'w-2 bg-zinc-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;

