"use client";

import Image from "next/image";

const AiPoweredFeature = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F5] xl:py-6">
      {/* Left Background Pattern */}

      {/* Right Gradient */}
      <div className="absolute right-0 top-0 hidden h-full w-[40%] bg-[radial-gradient(circle_at_right,#FFE6DA_0%,transparent_70%)] lg:block" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold lg:text-4xl xl:text-4xl">
            <span className="text-[#FF6B35]">AI-Powered</span>{" "}
            <span className="text-[#222]">Features</span>
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Center Image */}
          <div className="hidden md:block xl:-mt-[70px] lg:-mt-[70px] md:-mt-[30px]">
            <Image
              src="/assets/feature.png"
              alt="Feature"
              width={800}
              height={1800}
              className="object-contain"
            />
          </div>

          {/* LEFT TOP */}
          <div className="absolute lg:-left-20 lg:top-20 xl:left-10 xl:top-15 hidden w-[320px] text-right lg:block">
            <h3 className="text-2xl lg:text-sm lg:font-semibold xl:text-lg xl:font-semibold font-medium text-[#1E1E1E]">
              AI Smart Meal Search
            </h3>

            <p className="mt-1 text-lg lg:text-xs xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Describe the meal you want in natural language, and AI instantly
              recommends recipes that match your dietary preferences and
              lifestyle.
            </p>
          </div>

          {/* LEFT BOTTOM */}
          <div className="absolute xl:bottom-25 xl:left-22 hidden w-[320px] text-right lg:block">
            <h3 className="text-2xl xl:text-lg xl:font-semibold font-medium text-[#1E1E1E]">
              AI Healthy Tips
            </h3>

            <p className="mt-1 text-lg xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Receive personalized nutrition tips, hydration reminders, and
              healthy lifestyle suggestions based on your goals, eating habits,
              and progress.
            </p>
          </div>

          {/* RIGHT TOP */}
          <div className="absolute xl:right-20 xl:top-20 hidden w-[320px] text-left lg:block">
            <h3 className="text-2xl xl:text-lg xl:font-semibold font-medium text-[#1E1E1E]">
              AI Meal Generation
            </h3>

            <p className="mt-1 text-lg xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Generate personalized daily meal plans with balanced breakfast,
              lunch, dinner, and snacks tailored to your nutrition goals.
            </p>
          </div>

          {/* RIGHT BOTTOM */}
          <div className="absolute xl:bottom-45 xl:right-26 hidden w-[320px] text-left lg:block">
            <h3 className="text-2xl xl:text-lg xl:font-semibold font-medium text-[#1E1E1E]">
              AI Recipe Recommendations
            </h3>

            <p className="mt-1 text-lg xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Discover recipes tailored to your available ingredients, dietary
              preferences, favourite cuisines and nutritional requirements.
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="mt-10 space-y-10 lg:hidden">
          <div className="text-center">
            <h3 className="text-2xl xl:text-lg xl:font-semibold font-medium text-[#1E1E1E]">
              AI Smart Meal Search
            </h3>
            <p className="mt-3 text-lg xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Describe the meal you want in natural language, and AI instantly
              recommends recipes that match your dietary preferences and
              lifestyle.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl xl:text-lg xl:font-semibold font-medium text-[#1E1E1E]">
              AI Meal Generation
            </h3>
            <p className="mt-3 text-lg xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Generate personalized daily meal plans with balanced breakfast,
              lunch, dinner, and snacks.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl xl:text-lg xl:font-semibold font-medium text-[#1E1E1E]">
              AI Healthy Tips
            </h3>
            <p className="mt-3 text-lg xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Receive personalized nutrition tips, hydration reminders and
              healthy lifestyle suggestions.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl xl:text-lg xl:font-semibold font-medium text-[#1E1E1E]">
              AI Recipe Recommendations
            </h3>
            <p className="mt-3 text-lg xl:text-base xl:font-normal xl:leading-6 text-[#818181]">
              Discover recipes tailored to your ingredients and nutrition goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPoweredFeature;
