"use client";

import Image from "next/image";

const AiPoweredFeature = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#FFF8F5] py-16 md:py-6 lg:py-6 xl:py-6"
    >
      {/* Left Background Pattern */}

      {/* Right Gradient */}
      <div className="absolute right-0 top-0 hidden h-full w-[40%] bg-[radial-gradient(circle_at_right,#FFE6DA_0%,transparent_70%)] md:block lg:block" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-6 text-center md:mb-16">
          <h2 className="text-4xl font-bold lg:text-4xl xl:text-4xl">
            <span className="text-[#FF6B35]">AI-Powered</span>{" "}
            <span className="text-[#222]">Features</span>
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Center Image */}
          <div className="hidden md:block xl:-mt-[70px] lg:-mt-[70px] md:-mt-[70px]">
            <Image
              src="/assets/feature.png"
              alt="Feature"
              width={800}
              height={1800}
              className="object-contain lg:w-[550px] xl:w-full md:w-[600px]"
            />
          </div>

          {/* LEFT TOP */}
          <div className="absolute md:-left-35 md:top-10 lg:-left-1 lg:top-6 xl:left-0 xl:top-25 hidden w-[320px] text-right md:block">
            <h3 className="text-xl md:text-sm md:font-semibold lg:text-lg lg:font-semibold xl:text-xl xl:font-semibold font-semibold text-[#1E1E1E]">
              AI Smart Meal Search
            </h3>

            <p className="text-sm md:text-xs md:font-normal md:leading-5 md:line-clamp-4 lg:text-sm lg:font-normal lg:leading-6 xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Describe the meal you want in natural language, and AI instantly
              recommends recipes that match your dietary preferences and
              lifestyle.
            </p>
          </div>

          {/* LEFT BOTTOM */}
          <div className="absolute md:-left-25 md:bottom-25 lg:left-10 lg:bottom-15 xl:left-17 xl:bottom-30 hidden w-[320px] text-right md:block">
            <h3 className="text-xl md:text-sm md:font-semibold lg:text-lg lg:font-semibold xl:text-xl xl:font-semibold font-semibold text-[#1E1E1E]">
              AI Healthy Tips
            </h3>

            <p className="text-sm md:text-xs md:font-normal md:leading-5 md:line-clamp-4 lg:text-sm lg:font-normal lg:leading-6 xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Receive personalized nutrition tips, hydration reminders, and
              healthy lifestyle suggestions based on your goals, eating habits,
              and progress.
            </p>
          </div>

          {/* RIGHT TOP */}
          <div className="absolute md:-right-30 md:top-6 lg:right-6 lg:top-6 xl:right-8 xl:top-24 hidden w-[320px] text-left md:block">
            <h3 className="text-xl md:text-sm md:font-semibold lg:text-lg lg:font-semibold xl:text-xl xl:font-semibold font-semibold text-[#1E1E1E]">
              AI Meal Generation
            </h3>

            <p className="text-sm md:text-xs md:font-normal md:leading-5 md:line-clamp-4 lg:text-sm lg:font-normal lg:leading-6 xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Generate personalized daily meal plans with balanced breakfast,
              lunch, dinner, and snacks tailored to your nutrition goals.
            </p>
          </div>

          {/* RIGHT BOTTOM */}
          <div className="absolute xl:bottom-50 xl:right-17 lg:bottom-20 lg:right-10 md:bottom-30 md:-right-25 hidden w-[320px] text-left md:block">
            <h3 className="text-xl md:text-sm md:font-semibold lg:text-lg lg:font-semibold xl:text-lg xl:font-semibold font-semibold text-[#1E1E1E]">
              AI Recipe Recommendations
            </h3>

            <p className="text-sm md:text-xs md:font-normal md:leading-5 md:line-clamp-4 lg:text-sm lg:font-normal lg:leading-6 xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Discover recipes tailored to your available ingredients, dietary
              preferences, favourite cuisines and nutritional requirements.
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="mt-6 space-y-6 lg:hidden md:hidden">
          <div className="text-center">
            <h3 className="text-xl md:text-xl font-semibold text-[#1E1E1E]">
              AI Smart Meal Search
            </h3>
            <p className="mt-2 text-sm md:text-base text-[#818181]">
              Describe the meal you want in natural language, and AI instantly
              recommends recipes that match your dietary preferences and
              lifestyle.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-xl font-semibold text-[#1E1E1E]">
              AI Meal Generation
            </h3>
            <p className="mt-2 text-sm md:text-base text-[#818181]">
              Generate personalized daily meal plans with balanced breakfast,
              lunch, dinner, and snacks.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-xl font-semibold text-[#1E1E1E]">
              AI Healthy Tips
            </h3>
            <p className="mt-2 text-sm md:text-base text-[#818181]">
              Receive personalized nutrition tips, hydration reminders and
              healthy lifestyle suggestions.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-xl font-semibold text-[#1E1E1E]">
              AI Recipe Recommendations
            </h3>
            <p className="mt-2 text-sm md:text-base text-[#818181]">
              Discover recipes tailored to your ingredients and nutrition goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPoweredFeature;
