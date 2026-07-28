import React from "react";

interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 4.5,
    quote:
      "Planning meals used to take hours every week. Now the AI creates balanced meal plans in seconds, and the grocery list saves me even more time.",
    name: "Daniel R.",
    role: "Gym Member",
    avatar: "assets/image-1.png",
  },
  {
    rating: 4.5,
    quote:
      "The meal planner keeps my week organized, and the healthy tips help me stay motivated. I've finally built a routine I can stick to.",
    name: "John Emily",
    role: "Working Professional",
    avatar: "assets/image-2.png",
  },
  {
    rating: 4.5,
    quote:
      "The grocery list feature is amazing. Everything I need is organized automatically, making shopping faster and reducing food waste.",
    name: "Michael T.",
    role: "Home Cook",
    avatar: "assets/image-3.png",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-orange-400 sm:h-[18px] sm:w-[18px]"
        >
          <path d="M10 1.5l2.7 5.47 6.03.88-4.37 4.26 1.03 6.01L10 15.98l-5.39 2.14 1.03-6.01L1.27 7.85l6.03-.88L10 1.5z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-700 sm:text-[15px]">
        {rating}/5
      </span>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-[#FFF1EC] p-6 sm:p-7">
      <StarRating rating={testimonial.rating} />

      <p className="mt-4 flex-1 text-[15px] italic leading-relaxed text-gray-600 sm:text-base">
        "{testimonial.quote}"
      </p>

      <div className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-500 sm:text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-white px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          <span className="text-orange-500">Loved by People</span>{" "}
          <span className="text-gray-900">Building Healthier Habits</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 sm:text-base">
          Trusted by thousands to plan smarter, eat healthier, and achieve their
          nutrition goals.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
